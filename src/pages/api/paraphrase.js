// pages/api/paraphrase.js
import { GoogleGenAI } from "@google/genai";
import { config } from "dotenv";

config();  // Load environment variables

// Initialize GoogleGenAI client
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_API_KEY });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { text } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ success: false, message: "No text provided." });
    }

    try {
      // Use the generateContent method to paraphrase
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash",  // Specify the model
        contents: `Rewrite the following paragraph using natural, conversational English. Keep it clear and easy to understand:\n\n"${text}"`
      });

      // Send back the paraphrased text
      res.status(200).json({ success: true, paraphrasedText: response.text });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error generating paraphrase" });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}


