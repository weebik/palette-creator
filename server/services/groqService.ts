import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function getColorPalette(
  prompt: string,
  primaryCount: number,
  accentCount: number
): Promise<{ primary: string[]; accent: string[] }> {
  const fullPrompt = `You are an API. Return ONLY valid JSON. No explanation, no markdown.
Generate a UI color palette with ${primaryCount} primary color${
    primaryCount !== 1 ? "s" : ""
  } and ${accentCount} accent color${accentCount !== 1 ? "s" : ""}.
Style: ${prompt}.
Output only JSON in this format: {"primary": [...], "accent": [...]}`;

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [{ role: "user", content: fullPrompt }],
    temperature: 0.7,
  });

  const rawContent = response.choices[0]?.message?.content;
  if (!rawContent) throw new Error("No content returned from Groq");

  const match = rawContent.match(/\{[\s\S]*\}/);
  if (!match) {
    console.error("Response did not contain valid JSON block:", rawContent);
    throw new Error("No JSON found in Groq response");
  }

  try {
    const parsed = JSON.parse(match[0]);
    return parsed;
  } catch (err) {
    console.error("Failed to parse JSON:", match[0]);
    throw new Error("Invalid JSON format in Groq response");
  }
}
