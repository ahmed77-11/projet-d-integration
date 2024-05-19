import { Router } from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  accepteOrRefuseReservation,
  addReservation,
  deleteRes,
  updateReservation,
} from "../controllers/reservation.controller.js";
const router = Router();
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
