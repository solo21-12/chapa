/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        Navy: "#0a192f",
        LightNavy: "#112240 ",
        LightestNavy: "#233554 ",
        Slate: "#8892b0",
        LightSlate: "#a8b2d1",
        LightestSlate: "#ccd6f6",
        White: "#e6f1ff",
        Green: "#64ffda",
        chapa:"#7DC242",
        chapGray:'(255, 255, 255, 0.60)'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "960px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
