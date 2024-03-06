/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#1fb6ff', // Azul primário
      'danger': '#ff4949', // Vermelho de perigo
      'success': '#4caf50', // Verde de sucesso
      'warning': '#ff9800', // Amarelo de aviso
      'info': '#2196f3', // Azul de informação
      'dark': '#333', // Preto escuro
      'light': '#f4f4f4', // Cinza claro
      'white': '#fff', // Branco
      'black': '#000', // Preto
    },
  },
  spacing: {
    '2': '2px',
    '4': '4px',
    '8': '8px',
    '16': '16px',
    '24': '24px',
    '32': '32px',
    '48': '48px',
    '64': '64px',
  },
  fontFamily: {
    'sans': ['Helvetica', 'Arial', 'sans-serif'],
    'serif': ['Georgia', 'Cambria', 'serif'],
    'mono': ['Menlo', 'Monaco', 'Consolas', 'monospace'],
  },
  borderWidth: {
    'default': '1px',
    'none': '0',
    '2': '2px',
    '4': '4px',
    '8': '8px',
  },
  zIndex: {
    'auto': 'auto',
    '0': 0,
    '10': 10,
    '20': 20,
    '30': 30,
    '40': 40,
    '50': 50,
  },
  height: {
    'auto': 'auto',
    'px': '1px',
    '0': '0',
    'full': '100%',
    'screen': '100vh',
  },
  width: {
    'auto': 'auto',
    'px': '1px',
    '0': '0',
    '1/4': '25%',
    '1/2': '50%',
    '3/4': '75%',
    'full': '100%',
    'screen': '100vw',
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    // Certifique-se de que 'tailwindcss' é o último plugin
    require('tailwindcss'),
  ],
}

