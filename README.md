# CMHK Agent Portfolio Page

Portfolio project website for **CMHK Agent: AI-powered Telecom Plan Recommendation Prototype**.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is generated in `dist/`.

## GitHub Pages Deployment

This project includes `.github/workflows/deploy-pages.yml`. After pushing to the `main` branch:

1. Open the GitHub repository settings.
2. Go to **Pages**.
3. Set **Build and deployment** source to **GitHub Actions**.
4. Push to `main` or run the workflow manually.

`vite.config.js` uses `base: "./"` so built assets work under GitHub Pages project URLs such as:

```text
https://your-username.github.io/CMHK-Agent/
```

## Replace Placeholder Links

Edit `src/main.jsx`:

```js
const DIFY_EMBED_URL = "https://your-dify-app-url-here";
const POSTER_URL = "#";
const PRESENTATION_URL = "#";
const PORTFOLIO_URL = "#";
```
