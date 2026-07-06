import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      "colors": {
        "secondary-container": "#fed800",
        "on-tertiary-fixed-variant": "#3f484d",
        "surface-dim": "#dbd9d9",
        "on-primary-fixed-variant": "#004d62",
        "secondary-fixed": "#ffe165",
        "tertiary-fixed-dim": "#bfc8ce",
        "surface": "#fbf9f8",
        "on-secondary-container": "#705e00",
        "surface-container-high": "#eae8e7",
        "on-background": "#1b1c1c",
        "primary-fixed-dim": "#58d5ff",
        "secondary-fixed-dim": "#e7c400",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "on-primary-fixed": "#001f29",
        "on-tertiary": "#ffffff",
        "outline-variant": "#bcc8cf",
        "on-secondary": "#ffffff",
        "inverse-on-surface": "#f2f0f0",
        "on-primary-container": "#004b5f",
        "background": "#fbf9f8",
        "inverse-primary": "#58d5ff",
        "surface-bright": "#fbf9f8",
        "tertiary": "#576065",
        "surface-container-lowest": "#ffffff",
        "primary-container": "#2cc1ed",
        "outline": "#6d797f",
        "surface-container-highest": "#e4e2e2",
        "primary-fixed": "#b9eaff",
        "tertiary-container": "#abb4ba",
        "on-tertiary-container": "#3d464b",
        "on-secondary-fixed": "#221b00",
        "on-secondary-fixed-variant": "#544600",
        "on-surface-variant": "#3d494e",
        "surface-variant": "#e4e2e2",
        "primary": "#006781",
        "on-error-container": "#93000a",
        "on-primary": "#ffffff",
        "surface-container-low": "#f5f3f3",
        "on-surface": "#1b1c1c",
        "on-tertiary-fixed": "#141d21",
        "error-container": "#ffdad6",
        "surface-container": "#efeded",
        "secondary": "#6f5d00",
        "inverse-surface": "#303030",
        "tertiary-fixed": "#dbe4ea",
        "surface-tint": "#006781"
      },
      "borderRadius": {
        "DEFAULT": "1rem",
        "lg": "2rem",
        "xl": "3rem",
        "full": "9999px"
      },
      "spacing": {
        "margin-desktop": "40px",
        "gutter": "24px",
        "margin-mobile": "16px",
        "unit": "8px",
        "container-max": "1200px"
      },
      "fontFamily": {
        "body-md": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"],
        "label-md": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "body-lg": ["Plus Jakarta Sans"],
        "headline-xl": ["Plus Jakarta Sans"]
      },
      "fontSize": {
        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
        "headline-lg-mobile": ["28px", {"lineHeight": "36px", "fontWeight": "700"}],
        "label-md": ["14px", {"lineHeight": "20px", "fontWeight": "600"}],
        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
        "headline-xl": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}]
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/container-queries"),
  ],
};
export default config;
