import { Router } from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  accepteOrRefuseReservation,
  addReservation,
  deleteRes,
  getReservationByEstate,
  getReservationByOwner,
  updateReservation,
} from "../controllers/reservation.controller.js";
import { getEstatesByOwner } from "../controllers/estate.controller.js";
const router = Router();
router.get(
  "/getReservationByEstate/:estateId",
  verifyToken,
  getReservationByEstate
);
router.get("/getReservationByOwner", verifyToken, getReservationByOwner);
router.post("/addReservation/:estateId", verifyToken, addReservation);
router.patch(
  "/updateReservation/:reservationId/:estateId",
  verifyToken,
  updateReservation
);
router.post(
  "/reservationDescion/:reservationId",
  verifyToken,
  accepteOrRefuseReservation
);
router.delete("/deleteReservation/:reservationId", verifyToken, deleteRes);
export default router;
