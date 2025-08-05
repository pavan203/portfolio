# 💼 Portfolio Project

This is a personal **portfolio website** showcasing projects, skills, and experiences. Built using modern frontend tools, it delivers a clean, responsive, and fast user interface.

---

## 🚀 Tech Stack

- ⚛️ **React** – Component-based UI development  
- ⚡ **Vite** – Lightning-fast build tool and development server  
- 🟦 **TypeScript** – Type-safe JavaScript  
- 🎨 **Tailwind CSS** – Utility-first CSS framework  
- 🧱 **shadcn/ui** – Headless UI components with Tailwind integration

---

## 📦 Getting Started

> Prerequisites: [Node.js](https://nodejs.org/) and npm installed

```bash
# 1. Clone the repository
git clone <YOUR_GIT_URL>

# 2. Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev



🌐 Deployment – GitHub Pages
This project is hosted using GitHub Pages by serving static files directly from the main branch. No need for GitHub Actions or deploying to a separate branch.

🔧 Configuration Steps
Update vite.config.ts

Add the base property with your GitHub repo name:

// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/<your-repo-name>/", // 🔁 Replace with your actual repo name
  plugins: [react()],
});

Build the project:

npm run build
Move build files to docs/ directory

Rename or move the dist/ folder to docs/:

mv dist docs
Push changes to GitHub

git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
Enable GitHub Pages

Go to your repository on GitHub

Click on Settings > Pages

Under Source, select:

Branch: main

Folder: /docs

Click Save

✅ Your site will be live shortly at:
https://<your-username>.github.io/<your-repo-name>/
