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
  })
);

app.options("*", cors());

app.use(express.json());

app.use("/generate", generateRoute);

app.get("/ping", (_req, res) => {
  console.log("Ping received - server is alive");
  res.status(200).json({ message: "pong" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
