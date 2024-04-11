/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors : {
      black : {
        "800" : "#2c2c2c",
        "700" : "#333333",
        "600" : "#393939",
        "500" : "#909090"
      },
      white : "#ffffff",
      green : "#9aff5c",
      "off-white" : "#F4F4F4"
    },
    extend: {
      fontFamily : {
        "jetBrains" : ["JetBrainsMono"]
      },
      backgroundImage : {
        "overlay-bg" : "url('/overlay-bg.png')"
      }
    },
  },
  plugins: [],
}

