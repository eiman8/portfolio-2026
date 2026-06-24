import dotenv from "dotenv";

import express from "express";
import cors from "cors";

import contactRoutes from "./routes/contact.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
