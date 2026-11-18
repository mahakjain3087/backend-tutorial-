import express from "express";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend server is running!");
});

app.use("/api/users", userRoutes);

export default app;

