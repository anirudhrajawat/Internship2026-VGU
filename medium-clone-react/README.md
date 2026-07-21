# Medium Clone (React)

A React conversion of the original static HTML/CSS Medium clone, built with Vite.

## Project Structure

```
medium-clone-react/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── mediumres.css
│   └── components/
│       ├── Header.jsx
│       ├── Hero.jsx
│       └── Footer.jsx
```

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run the dev server:
   ```
   npm run dev
   ```
   Then open the URL shown in the terminal (usually http://localhost:5173).

3. Build for production:
   ```
   npm run build
   ```
   Output goes to the `dist/` folder.

## Notes

- All markup and styling from the original `index.html` / `mediumres.css` were preserved exactly — only split into reusable React components (`Header`, `Hero`, `Footer`).
- No external UI libraries were added; it's plain React + CSS.
