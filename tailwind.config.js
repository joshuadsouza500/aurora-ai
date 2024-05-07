
const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily:{
        sans: ['var(--font-idm-sans)'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        background:'#070815',
        scroller: "linear-gradient(to bottom right, var(--red-800), var(--gray-950))"
      },
      screens :{
        'custom-lg': {'min': '1300px'},
      },
      fontSize:{
        hm:'82px'
      }
    },
  },
  plugins: [addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          
          "bg-dot": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg width="45" height="45" viewBox="0 0 72 72"  xmlns="http://www.w3.org/2000/svg" fill="${value}">
              <path stroke="${value}"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  d="m12 4 .005 7.993m0 0 7.603-2.465m-7.603 2.465 4.697 6.48m-4.697-6.48-4.707 6.48m4.707-6.48L4.392 9.328"></path>
              
              </svg>`
            )}")`,
            
            animation: 'example 1s ',
        
          }),
            "bg-dotsmall": (value) => ({
              backgroundImage: `url("${svgToDataUri(
                `<svg width="25" height="23" viewBox="0 0 72 72"  xmlns="http://www.w3.org/2000/svg" fill="${value}">
                
                <path stroke="${value}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"  d="m12 4 .005 7.993m0 0 7.603-2.465m-7.603 2.465 4.697 6.48m-4.697-6.48-4.707 6.48m4.707-6.48L4.392 9.328"></path>
              </svg>`
              )}")`,
            }),
          
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    
   require('@pyncz/tailwind-mask-image')
  ],
  
}

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}