/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      periwinkle: "#686EA0",
      mint: "#81C8BD",
      citron: "#ECDA25",
      peach: "#F8A28B",
      "gray-light": "#777",
      "gray-dark": "#111",
      white: "#fff",
      dcprimary: "#686EA0",
      dcsecondary: "#F8A28B",
      dcsuccess: "#eada24",
      dcerror: "#ffa38b",
    },
    fontFamily: {
      sans: ["highway-gothic", "sans-serif"],
      serif: ["benguiat", "serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
