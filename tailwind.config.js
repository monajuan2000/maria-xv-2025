// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        decorative: ['"Cinzel Decorative"', 'cursive'],
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite', // Asegúrate de que el nombre de la animación coincida
      },
    //   colors: {
    //    silver: '#c0c0c0',
    //    gold: '#ffd700',
    //    steelblue: '#4682b4',
    // },
    // screens: {
    //     iphone12: { raw: '(min-width: 360px) and (max-width: 395px)' },
    //   },
    },
  },
  plugins: [],
};
