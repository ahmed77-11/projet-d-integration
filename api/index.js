import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js";
import estateRouter from "./routes/estate.route.js";
import reservationRouter from "./routes/reservation.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(cookieParser());

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/estate", estateRouter);
app.use("/api/reservation", reservationRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
