/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        white: "#ffffff",
        textColor: 'var(--text-color)',
        primarylight: 'var(--primary-light)',
        menuColor: 'var(--menu-color)',
      },
      fontFamily: {
        ador: [
          '"AdorModernv1", "AdorModernv2", "AdorModernv", "Ador", "Adorv1", "Adorv2"',
        ],
        adorSemi: ["AdorSemiBold"],
        liAdorNoirrit: ["Li Ador Noirrit", "sans-serif"],
        adorBold: ["AdorBold"],
        poppins: ['"poppins"', "sans-serif"],
        inter: ['"Inter", sans-serif'],
      },
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        'customxl': '1440px', // Custom breakpoint at 1440px
        'custom2xl': '1840px', // Custom breakpoint at 1440px
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
};
