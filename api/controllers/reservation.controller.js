import prisma from "../connexion.js";

export const getReservationByEstate = async (req, res) => {
  const estateId = parseInt(req.params.estateId);
  try {
    const reservation = await prisma.reservation.findMany({
      where: {
        estateId,
        OR: [
          {
            status: "accepted",
          },
          { status: "pending" },
        ],
      },
    });
    if (reservation.length < 0) {
      throw new Error("not data found");
    }
    res.status(200).json(reservation);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while geting reservation" });
  }
};
export const addReservation = async (req, res) => {
  const { startDate, endDate } = req.body;
  let { estateId } = req.params;

  estateId = parseInt(estateId);
  try {
    const allReservation = await prisma.reservation.findMany({
      where: {
        estateId: estateId,
        OR: [
          {
            startDate: {
              lte: new Date(endDate),
            },
            endDate: {
              gte: new Date(startDate),
            },
          },
          {
            startDate: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          },
          {
            endDate: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          },
        ],
        AND: [
          {
            OR: [
              {
                status: "pending",
              },
              {
                status: "accepted",
              },
            ],
          },
        ],
      },
    });

    if (allReservation.length > 0) {
      return res.status(400).json("There is a reservation between these dates");
    }
    const customer = await prisma.customer.findFirst({
      where: { userId: req.user.id },
    });

    const addedRes = await prisma.reservation.create({
      data: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        estate: { connect: { id: estateId } },
        customer: { connect: { id: customer.id } },
      },
    });

    res.status(201).json(addedRes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the reservation." });
  }
};
export const updateReservation = async (req, res) => {
  const { startDate, endDate } = req.body;
  let { estateId, reservationId } = req.params;

  estateId = parseInt(estateId);
  reservationId = parseInt(reservationId);
  try {
    const allReservation = await prisma.reservation.findMany({
      where: {
        estateId: estateId,
        OR: [
          {
            startDate: {
              lte: new Date(endDate),
            },
            endDate: {
              gte: new Date(startDate),
            },
          },
          {
            startDate: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          },
          {
            endDate: {
              gte: new Date(startDate),
              lte: new Date(endDate),
            },
          },
        ],
        AND: [
          {
            OR: [
              {
                status: "pending",
              },
              {
                status: "accepted",
              },
            ],
          },
        ],
      },
    });

    if (allReservation.length > 0) {
      return res.status(400).json("There is a reservation between these dates");
    }
    const customer = await prisma.customer.findFirst({
      where: { userId: req.user.id },
    });

    const updatedRes = await prisma.reservation.update({
      where: { id: reservationId },
      data: {
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        estate: { connect: { id: estateId } },
        customer: { connect: { id: customer.id } },
      },
    });

    res.status(201).json(updatedRes);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while updating the reservation." });
  }
};
export const deleteRes = async (req, res) => {
  let { reservationId } = req.params;
  reservationId = parseInt(reservationId);
  try {
    const reservation = await prisma.reservation.delete({
      where: { id: reservationId },
    });
    if (reservation) {
      res.status(203).json("deleted Successfuly");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const accepteOrRefuseReservation = async (req, res) => {
  let { reservationId } = req.params;
  let { status } = req.body;
  try {
    reservationId = parseInt(reservationId);
    const reservation = await prisma.reservation.findFirst({
      where: { id: reservationId },
    });
    const estate = await prisma.estate.findFirst({
      where: { id: reservation.estateId },
    });
    if (req.user.id === estate.addedBy) {
      const descion = await prisma.reservation.update({
        where: { id: reservationId },
        data: {
          status: status,
        },
      });
      descion
        ? res.status(200).json("updated Successfuly")
        : res.status(500).json("descion is not updated");
    } else {
      res.status(403).json("you are not allowed to do this action");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
    return;
  }
};
// export const getReservationByOwner = async (req, res) => {
//   const ownerId = parseInt(req.user.id);
//   try {
//     const estates = await prisma.estate.findMany({
//       where: {
//         addedBy: ownerId,
//       },
//     });
//     const allreservation = await Promise.all(
//       estates.map(async (estate, index) => {
//         const reservationByEstate = await prisma.reservation.findMany({
//           where: {
//             estateId: estate.id,
//             AND: [{ status: "pending" }],
//           },
//         });
//         if (reservationByEstate.length > 0) {
//           return reservationByEstate;
//         }
//       })
//     );

//     res.status(200).json(allreservation.filter(Boolean));
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while fetching reservations" });
//   }
// };
export const getReservationByOwner = async (req, res) => {
  const ownerId = parseInt(req.user.id);
  try {
    const estates = await prisma.estate.findMany({
      where: {
        addedBy: ownerId,
      },
      include: {
        reservations: {
          where: {
            AND: [{ status: "pending" }],
          },
          include: {
            customer: {
              include: {
                user: true, // Include User data to get the customer's name
              },
            },
            estate: true, // Include Estate data to get the estate's name
          },
        },
      },
    });

    // Transform the results to include customer name and estate name
    const reservations = estates.flatMap((estate) =>
      estate.reservations.map((reservation) => ({
        id: reservation.id,
        customerName: reservation.customer.user.username, // Get the user's name
        estateName: estate.name,
        startDate: reservation.startDate,
        endDate: reservation.endDate,
        status: reservation.status,
      }))
    );

    res.json(reservations);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching reservations" });
  }
};
