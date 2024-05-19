import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import upload from "../utils/multerConfig.js";
import {
  addFlat,
  addHouse,
  deleteEstate,
  findByNameLocationPrice,
  findByNameLocationPriceToOwner,
  findEstateWithReservation,
  getAllEstates,
  getEstateById,
  getEstatesByOwner,
  updateFlat,
  updateHouse,
} from "../controllers/estate.controller.js";

const router = express.Router();

router.post("/addFlat", verifyToken, upload.array("images", 5), addFlat);
router.post("/addHouse", verifyToken, upload.array("images", 5), addHouse);
router.get("/getAllEstates", verifyToken, getAllEstates);
router.get("/findByNaLocPr", verifyToken, findByNameLocationPrice);
router.get("/getEstatesByOwner", verifyToken, getEstatesByOwner);
router.get("/getEstateById/:estateId", verifyToken, getEstateById);
router.get(
  "/getWithReservation/:estateId",
  verifyToken,
  findEstateWithReservation
);
router.get(
  "/findByNaLocPrToOwner",
  verifyToken,
  findByNameLocationPriceToOwner
);

router.put("/updateFlat/:estateId", verifyToken, updateFlat);
router.put("/updateHouse/:estateId", verifyToken, updateHouse);
router.delete("/deleteEstate/:estateId", verifyToken, deleteEstate);
export default router;
