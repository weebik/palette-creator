import { Router } from "express";
import { generatePalette } from "../controllers/generateController";

const router = Router();

router.post("/", generatePalette);

export default router;
