import express from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/user", userRouter.router);

export default app;
