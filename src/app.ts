import express from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.router";
import { categoryRouter } from "./modules/category/category.router";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/user", userRouter.router);
app.use("/api/v2/category", categoryRouter.router);

export default app;
