# Tailwind-Theme-Model
Esse é um modelo de template com theme pronto para utilização para tornar o seu design muito mais dinâmico e bonito.

# Para criar o seu do zero

npx create-react-app my-project
cd my-project

# Instalando o Tailwind 

npm install -D tailwindcss
npx tailwindcss init

# Depois configure seus paths de templates lá no arquivo tailwind.config

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


# Adicione as diretivas no CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

# Pronto agora você pode rodar seu Modelo com Theme do zero!