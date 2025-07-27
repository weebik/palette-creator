import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import generateRoute from "./routes/generate";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "https://palettecreator-weebik.vercel.app",
    methods: ["POST", "GET", "OPTIONS"],
    credentials: false,
  })
);

app.use(express.json());

app.use("/generate", generateRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
