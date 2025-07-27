import { Request, Response } from "express";
import { getColorPalette } from "../services/groqService";

export const generatePalette = async (req: Request, res: Response) => {
  const { prompt, primaryCount, accentCount } = req.body;

  if (!prompt || primaryCount === undefined || accentCount === undefined) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const palette = await getColorPalette(prompt, primaryCount, accentCount);
    res.json(palette);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate palette" });
  }
};
