import type { Config } from "tailwindcss";

const config: Config = {
<<<<<<< HEAD
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
=======
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
<<<<<<< HEAD
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
=======
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        xl: "0 16px 32px var(--tw-shadow-color)",
      },
      colors: {
        "ycs-black": "#1F232C",
        "ycs-pink": "#FF555B",
        "ycs-faded-pink": "F26891",
        "ycs-blue": "#0071BC",
        "ycs-green": "#39A393",
<<<<<<< HEAD
        "ycs-security-red": "#890c0c",
        "ycs-gray": "#323844",
=======
        "ycs-security-red": "#590c0c",
>>>>>>> d4869af (Rewrite the entire codebase in nextjs with stricter eslint and typescript settings)
      },
      fontSize: {
        big: "200px",
      },
    },
  },
  plugins: [],
};
export default config;
