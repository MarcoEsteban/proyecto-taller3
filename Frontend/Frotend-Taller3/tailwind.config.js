/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //? Aplicar los colores como JSON:
      colors: {
        primary: "#1ABB9C", //? Color Verde un Poco fosforesente primario que se va a ocupar en casi todo.
        // primary: "#73879C", //? Color Verde Opaco primario que se va a ocupar en casi todo.
        secundary: {
          500: "#2A3F54", //? Color Sidebar.
          300: "#73879C", //? Color Icons.
          200: "#EDEDED", //? Color Header.
          100: "#F7F7F7", //? Color Fondo o TExto.
        },
      },
    },
  },
  plugins: [],
}

