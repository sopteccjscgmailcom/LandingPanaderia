# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## Instalacion del proyecto
    npm create vite@latest
    npm install
    npm i axios
## tailwindcss
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p

### copiar en [tailwind.config.js](tailwind.config.js)
    /** @type {import('tailwindcss').Config} */
    export default {
      content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
### copiar en [index.css](src/index.css)
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

### Instalacion de react-router-dom
    npm i react-router-dom