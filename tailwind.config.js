/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "our-partners":
          "url('/assets/images/ourPartners/ourPartners-bordr-bg.png')",
        "experience-card":
          "linear-gradient(98.22deg, rgba(255, 255, 255, 0.12) 0%, rgba(204, 204, 204, 0) 12.83%)",
        bgheader: "url(/assets/images/heroImages/heroBGimg.webp)",
      },
      fontFamily: {
        syne: "'Syne', sans-serif",
      },
      backgroundImage: {
        bgheader: "url(/assets/images/heroImages/heroBgimg.webp)",
      },
      backgroundImage: {
        bgheader: "url(/assets/images/heroImages/heroBgimg.webp)",
      },
      colors: {
        darkblack: "#040404",
        pink: "#D0215D",
        purple: "#A020F0",
        grey: "#ffffff1a",
        bruntpink: "#c2205e",
        darkgray: "#363636",
        onxy: "#111111",
      },
      lineHeight: {
        "2sm": "120%",
        lg: "134%",
        "2lg": "138%",
        "4xl": "140%",
      },
      fontSize: {
        "4sm": "34px",
        "6xxl": "60px",
        "5md": "45px",
        "4sm": "29px",
        "5md": "45px",
        "7lg": "51px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens: {
        xxs: "500px",
        "custom2xl": "1536px",
        "3xl": "1921px",
        "5xl": "2520px",
      },
    },
  },
  plugins: [],
};
