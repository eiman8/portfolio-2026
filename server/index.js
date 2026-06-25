import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send("Portfolio API is running 🚀");
});

app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
