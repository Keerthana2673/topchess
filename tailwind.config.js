/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#CEA82A",
        secondary: "#19191A",
        accent: "#AA881D",
        text: "#BDBDBD",
        muted: "#787878",
        gold: "#CEA82A",
        "gold-dark": "#AA881D",
        "dark-bg": "#19191A",
        "text-light": "#BDBDBD",
        light: "#F6F6F6",
        "light-gray": "#EDEDED",
        "white-translucent": "#FFFFFF1C",
        "dark-translucent": "#19191A00",
      },
    },
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      addUtilities({
        '.prespective': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    },
  ],
  daisyui: {
    themes: [
      {
        topchess: {
          primary: "#CEA82A",
          secondary: "#19191A",
          accent: "#AA881D",
          neutral: "#19191A",
          "base-100": "#19191A",
          "base-200": "#1F1F1F",
          "base-300": "#2A2A2A",
          info: "#BDBDBD",
          success: "#AA881D",
          warning: "#EDEDED",
          error: "#787878",
        },
      },
    ],
  },
};