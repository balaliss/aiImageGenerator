import express from 'express';
import OpenAI from 'openai';
import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post('/generate', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== 'string' || prompt.trim().length === 0) {
    return res.status(400).json({ error: 'A prompt is required.' });
  }

  try {
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt.trim(),
      n: 1,
      size: '1024x1024',
    });

    res.json({ url: response.data[0].url });
  } catch (err) {
    const message = err?.error?.message ?? err.message ?? 'Image generation failed.';
    res.status(500).json({ error: message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
