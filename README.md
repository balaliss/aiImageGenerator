# AI Image Generator

A simple web app that turns text prompts into images using OpenAI's DALL-E 3 model. Enter a description, click **Generate**, and the image appears in seconds.

![Screenshot placeholder](screenshot.png)

---

## Tech Stack

| Layer    | Technology                        |
|----------|-----------------------------------|
| Frontend | HTML, CSS, vanilla JavaScript     |
| Backend  | Node.js + Express                 |
| AI       | OpenAI DALL-E 3 API               |

---

## How It Works

1. User types a prompt in the browser and clicks **Generate**.
2. The frontend sends the prompt to the local Express server (`POST /generate`).
3. The server calls the OpenAI API with the prompt — the API key never leaves the server.
4. The image URL returned by DALL-E 3 is passed back to the browser and displayed.

---

## Running Locally

### Prerequisites
- Node.js 18+
- An [OpenAI API key](https://platform.openai.com/account/api-keys) with DALL-E 3 access

### Setup

```bash
# 1. Clone the repo
git clone https://github.com/balaliss/aiImageGenerator.git
cd aiImageGenerator

# 2. Install dependencies
npm install

# 3. Create your .env file
cp .env.example .env
# Then open .env and paste your OpenAI API key

# 4. Start the server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

> **Tip:** Use `npm run dev` during development — it restarts the server automatically on file changes (requires Node 18+).

---

## Project Structure

```
aiImageGenerator/
├── public/
│   └── index.html     # Single-file frontend (HTML + CSS + JS)
├── server.js          # Express server — handles API calls
├── package.json
├── .env.example       # Environment variable template
├── .gitignore         # Excludes node_modules and .env
└── README.md
```

---

## Notes

- Images are generated at **1024×1024** resolution.
- DALL-E 3 typically takes 10–20 seconds per image.
- The Download button lets you save the image directly from the browser.
- Press **Cmd+Enter** (Mac) or **Ctrl+Enter** (Windows) to generate without clicking.

---

## License

MIT
