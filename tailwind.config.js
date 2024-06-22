/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "rating-background": "url('src/assets/images/hero4.png')",
        "auth-background": "url('src/assets/images/bg-login-admin.jpg')",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
