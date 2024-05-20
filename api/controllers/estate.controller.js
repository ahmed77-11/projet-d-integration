import prisma from "../connexion.js";

import axios from "axios";

export const addFlat = async (req, res) => {
  let {
    name,
    location,
    description,
    price,
    bedrooms,
    bathrooms,
    buildingName,
    floors,
    parking,
  } = req.body;
  price = parseFloat(price);
  bedrooms = parseInt(bedrooms);
  bathrooms = parseInt(bathrooms);
  floors = parseInt(floors);
  parking = parking == "true" ? true : false;
  const imagesUrls = req.files.map((file) => file.path);

  // Geocode the location address
  try {
    const geocodeResponse = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        location
      )}&format=json`
    );
    if (geocodeResponse.data.length === 0) {
      throw new Error("Address not found");
    }
    const { lat, lon } = geocodeResponse.data[0];
    const owner = await prisma.owner.findFirst({
      where: { userId: req.user.id },
    });
    if (!owner) return res.status(404).status("owner not found");

    // Create new flat with geocoded coordinates
    const newEstate = await prisma.estate.create({
      data: {
        name,
        location,
        description,
        price,
        bedrooms,
        bathrooms,
        lan: parseFloat(lat),
        lag: parseFloat(lon),
        estateType: "flat",
        addedBy: req.user.id,
        Flat: {
          create: {
            buildingName,
            floors,
            parking,
          },
        },
      },
      include: { Flat: true },
    });

    // Create images for the flat
    const images = await Promise.all(
      imagesUrls.map((url) => {
        return prisma.imagesUrls.create({
          data: {
            url,
            estateId: newEstate.id,
          },
        });
      })
    );

    res.status(201).json({ successMsg: "Flat added successfully" });
  } catch (error) {
    console.error("Error adding flat:", error);
    res.status(500).json({ error: "Error adding flat" });
  }
};
export const addHouse = async (req, res) => {
  let {
    name,
    location,
    description,
    price,
    bedrooms,
    bathrooms,
    backyard,
    garage,
    pool,
    numberOfFloor,
  } = req.body;
  price = parseFloat(price);
  bedrooms = parseInt(bedrooms);
  bathrooms = parseInt(bathrooms);
  backyard = backyard == "true" ? true : false;
  garage = garage == "true" ? true : false;
  pool = pool == "true" ? true : false;
  numberOfFloor = parseInt(numberOfFloor);
  const imagesUrls = req.files.map((file) => file.path);

  // Geocode the location address
  try {
    const geocodeResponse = await axios.get(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
        location
      )}&format=json`
    );
    if (geocodeResponse.data.length === 0) {
      throw new Error("Address not found");
    }
    const { lat, lon } = geocodeResponse.data[0];

    // Create new house with geocoded coordinates
    const newEstate = await prisma.estate.create({
      data: {
        name,
        location,
        description,
        lan: parseFloat(lat),
        lag: parseFloat(lon),
        price,
        bedrooms,
        bathrooms,
        estateType: "house",
        addedBy: req.user.id,
        House: {
          create: {
            backyard,
            garage,
            pool,
            numberOfFloor,
          },
        },
      },
      include: { House: true },
    });

    // Create images for the house
    const images = await Promise.all(
      imagesUrls.map((url) => {
        return prisma.imagesUrls.create({
          data: {
            url,
            estateId: newEstate.id,
          },
        });
      })
    );

    res.status(201).json({ successMsg: "House added successfully" });
  } catch (error) {
    console.error("Error adding house:", error);
    res.status(500).json({ error: "Error adding house" });
  }
};
export const getEstatesByOwner = async (req, res) => {
  try {
    const estates = await prisma.estate.findMany({
      where: { addedBy: req.user.id },
    });
    const allEstates = [];
    await Promise.all(
      estates.map(async (estate) => {
        const imagesUrls = await prisma.imagesUrls.findMany({
          where: { estateId: estate.id },
        });
        if (estate.estateType === "flat") {
          const flat = await prisma.flat.findFirst({
            where: { estateId: estate.id },
          });

          allEstates.push({
            ...estate,
            imagesUrls,
            flat,
          });
        }
        if (estate.estateType === "house") {
          const house = await prisma.house.findFirst({
            where: { estateId: estate.id },
          });

          allEstates.push({
            ...estate,
            imagesUrls,
            house,
          });
        }
      })
    );
    res.status(200).json(allEstates);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
export const getEstateById = async (req, res) => {
  try {
    const estateId = parseInt(req.params.estateId);
    console.log(estateId);
    const estate = await prisma.estate.findFirst({ where: { id: estateId } });
    if (!estate) return res.status(404).status("Estate Not Found");
    const imagesUrls = await prisma.imagesUrls.findMany({
      where: { estate: estate },
    });
    if (estate.estateType === "flat") {
      const flat = await prisma.flat.findFirst({
        where: { estateId: estate.id },
      });
      return res.status(200).json({ ...estate, flat, imagesUrls });
    }
    if (estate.estateType === "house") {
      const house = await prisma.house.findFirst({
        where: { estateId: estateId },
      });
      return res.status(200).json({ ...estate, house, imagesUrls });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
export const findByNameLocationPriceToOwner = async (req, res) => {
  try {
    const { name, location, priceMax, priceMin } = req.query;

    let searchQuery = {
      addedBy: req.user.id,
    };

    if (name) {
      searchQuery.name = {
        contains: name.toLowerCase(), // Perform case-insensitive search
      };
    }
    if (location) {
      searchQuery.location = {
        contains: location.toLowerCase(), // Perform case-insensitive search
      };
    }
    if (priceMax && priceMin) {
      const priceValueMax = parseFloat(priceMax);
      const priceValueMin = parseFloat(priceMin);
      searchQuery.price = {
        gte: priceValueMin,
        lte: priceValueMax,
      };
    }

    // Fetch estates based on the constructed search query
    const estates = await prisma.estate.findMany({
      where: searchQuery,
    });

    const allEstates = await Promise.all(
      estates.map(async (estate) => {
        const imagesUrls = await prisma.imagesUrls.findMany({
          where: { estateId: estate.id },
        });
        if (estate.estateType === "flat") {
          const flat = await prisma.flat.findFirst({
            where: { estateId: estate.id },
          });

          return {
            ...estate,
            imagesUrls,
            flat,
          };
        }
        if (estate.estateType === "house") {
          const house = await prisma.house.findFirst({
            where: { estateId: estate.id },
          });

          return {
            ...estate,
            imagesUrls,
            house,
          };
        }
      })
    );

    res.status(200).json(allEstates.filter(Boolean)); // Filter out undefined values
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};
export const updateFlat = async (req, res) => {
  const flatId = parseInt(req.params.estateId);
  let {
    name,
    location,
    description,
    price,
    bedrooms,
    bathrooms,
    buildingName,
    floors,
    parking,
  } = req.body;
  bathrooms = parseInt(bathrooms);
  bedrooms = parseInt(bedrooms);
  price = parseFloat(price);
  floors = parseInt(floors);
  parking = parking === "true" ? true : false;
  try {
    const existingFlat = await prisma.flat.findFirst({
      where: { estateId: flatId },
    });
    if (!existingFlat) {
      return res.status(404).json({ error: "Flat not found" });
    }
    const updatedEstate = await prisma.estate.update({
      where: { id: flatId },
      data: {
        name,
        location,
        description,
        price,
        bedrooms,
        bathrooms,
        Flat: {
          update: {
            buildingName,
            floors,
            parking,
          },
        },
      },
    });
    console.log(updatedEstate);
    res.status(201).json("Flat Updated Succuffuly");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
export const updateHouse = async (req, res) => {
  const houseId = parseInt(req.params.estateId);
  console.log(req.body);
  let {
    name,
    location,
    description,
    price,
    bedrooms,
    bathrooms,
    backyard,
    garage,
    pool,
    numberOfFloor,
  } = req.body;
  bathrooms = parseInt(bathrooms);
  bedrooms = parseInt(bedrooms);
  price = parseFloat(price);
  numberOfFloor = parseInt(numberOfFloor);
  backyard = backyard === "true" ? true : false;
  garage = garage === "true" ? true : false;
  pool = pool === "true" ? true : false;

  try {
    const existingHouse = await prisma.house.findFirst({
      where: { estateId: houseId },
    });
    if (!existingHouse) {
      return res.status(404).json({ error: "House not found" });
    }
    const updateHouse = await prisma.estate.update({
      where: { id: houseId },
      data: {
        name,
        location,
        description,
        price,
        bedrooms,
        bathrooms,
        House: {
          update: {
            backyard,
            garage,
            pool,
            numberOfFloor,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
export const deleteEstate = async (req, res) => {
  const estateId = parseInt(req.params.estateId);
  try {
    const estate = await prisma.estate.findFirst({ where: { id: estateId } });
    if (!estate) res.status(404).json("estateNotFound");
    const deleteEstate = await prisma.estate.delete({
      where: { id: estateId },
    });
    if (estate.estateType === "flat") {
      const deleteFlat = await prisma.flat.delete({
        where: { estateId: estateId },
      });
    }
    if (estate.estateType === "house") {
      const deleteHouse = await prisma.house.delete({
        where: { estateId: { estateId: estateId } },
      });
    }
    res.status(200).json("Estate Deleted Succfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const findByNameLocationPrice = async (req, res, next) => {
  try {
    const { name, location, priceMax, priceMin } = req.query;
    console.log(req.query);

    let searchQuery = {};

    if (name) {
      searchQuery.name = {
        contains: name.toLowerCase(), // Perform case-insensitive search
      };
    }
    if (location) {
      searchQuery.location = {
        contains: location.toLowerCase(), // Perform case-insensitive search
      };
    }
    /* The above JavaScript code snippet is checking if the variable `price` is truthy (i.e., not falsy
    such as null, undefined, 0, etc.). If `price` is truthy, it then converts the `price` value to a
    floating-point number using `parseFloat()`. It then creates a search query object
    `searchQuery.price` with a range condition where the price should be greater than or equal to
    (`gte`) `priceValue - PRICE_TOLERANCE` and less than or equal to (`lte`) `priceValue +
    PRICE_TOLERANCE`. The `PRICE_T */
    if (priceMax && priceMin) {
      const priceValueMax = parseFloat(priceMax);
      const priceValueMin = parseFloat(priceMin);

      searchQuery.price = {
        gte: priceValueMin,
        lte: priceValueMax,
      };
    }

    // Fetch estates based on the constructed search query
    const estates = await prisma.estate.findMany({
      where: searchQuery,
    });

    const allEstates = await Promise.all(
      estates.map(async (estate) => {
        const imagesUrls = await prisma.imagesUrls.findMany({
          where: { estateId: estate.id },
        });
        if (estate.estateType === "flat") {
          const flat = await prisma.flat.findFirst({
            where: { estateId: estate.id },
          });

          return {
            ...estate,
            imagesUrls,
            flat,
          };
        }
        if (estate.estateType === "house") {
          const house = await prisma.house.findFirst({
            where: { estateId: estate.id },
          });

          return {
            ...estate,
            imagesUrls,
            house,
          };
        }
      })
    );

    res.status(200).json(allEstates.filter(Boolean)); // Filter out undefined values
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};

export const getAllEstates = async (req, res) => {
  try {
    const estates = await prisma.estate.findMany();
    const allEstates = await Promise.all(
      estates.map(async (estate) => {
        const imagesUrls = await prisma.imagesUrls.findMany({
          where: { estateId: estate.id },
        });
        if (estate.estateType === "flat") {
          const flat = await prisma.flat.findFirst({
            where: { estateId: estate.id },
          });

          return {
            ...estate,
            imagesUrls,
            flat,
          };
        }
        if (estate.estateType === "house") {
          const house = await prisma.house.findFirst({
            where: { estateId: estate.id },
          });

          return {
            ...estate,
            imagesUrls,
            house,
          };
        }
      })
    );
    res.status(200).json(allEstates.filter(Boolean)); // Filter out undefined values
  } catch (error) {
    console.error(err);
    res.status(500).json({ error: err.message || "Internal Server Error" });
  }
};
export const findEstateWithReservation = async (req, res) => {
  let { estateId } = req.params;
  estateId = parseInt(estateId);
  try {
    const estate = await prisma.estate.findUnique({ where: { id: estateId } });
    const imagesUrls = await prisma.imagesUrls.findMany({
      where: { estateId: estateId },
    });
    if (estate.estateType === "flat") {
      const flat = await prisma.flat.findFirst({
        where: { estateId: estateId },
      });
      const reservation = await prisma.reservation.findMany({
        where: {
          estateId,
          AND: [
            {
              status: "accepted",
            },
            { status: "pending" },
          ],
        },
      });
      res.status(200).json({ ...estate, imagesUrls, flat, reservation });
    }
    if (estate.estateType === "house") {
      const house = await prisma.house.findFirst({
        where: { estateId: estateId },
      });
      const reservation = await prisma.reservation.findMany({
        where: {
          estateId,
          AND: [
            {
              status: "accepted",
            },
            { status: "pending" },
          ],
        },
      });
      res.status(200).json({ ...estate, imagesUrls, house, reservation });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
