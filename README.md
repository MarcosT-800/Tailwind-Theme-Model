# Tailwind-Theme-Model

Este é um modelo de template com theme pronto para utilização, permitindo que você crie designs dinâmicos e bonitos.

## Para criar o seu do zero

```bash
npx create-react-app my-project
cd my-project
Instalando o Tailwind
bash
Copy code
npm install -D tailwindcss
npx tailwindcss init
Depois, configure seus paths de templates no arquivo tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

Adicione as diretivas no CSS:

css
@tailwind base;
@tailwind components;
@tailwind utilities;
Pronto! Agora você pode rodar seu modelo com theme do zero!