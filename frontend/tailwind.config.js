/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // * INFO: Primary Colors
        primary: {
          salmon: "#E27469",
          vermilion: "#D74634",
        },
        // * INFO: Secondary Colors
        hash: {
          dark: "#1E2128",
          light: "#FBFBFB",
        },
        // * INFO: Neutral Colors
        "dark-gray": {
          100: "#444649",
          50: "#A1A2A3",
        },
        gray: {
          100: "#979EB5",
          50: "#CACED9",
        },
        "light-gray": {
          100: "#E1E3EB",
          50: "#EFF0F4",
          25: "#F7F8FA",
        },
        // * INFO: Success Colors
        success: {
          seafoam: "#86E19F",
        },
        // * INFO: Warning Colors
        warning: {
          jonquil: "#F5C400",
        },
        // * INFO: Error Colors
        error: {
          firetruck: "#E71500",
        },
        // * INFO: Limited Use Colors
        limited: {
          charcoal: "#282B33",
          ivory: "#FFF1EE",
          tangerine: "#F5841F",
          sky: "#50ABF1",
        },
      },
      boxShadow: {
        solid: "0 0 0 2px black",
        dropdown: "0px 0px 14px rgba(0, 0, 0, 0.25)",
      },
      borderWidth: {
        1: "1px",
      },
      width: {
        104: "26rem",
        124: "31rem",
      },
      height: {
        104: "26rem",
        124: "31rem",
      },
      fontSize: {
        xxs: "0.625rem",
        "2.6xl": "1.75rem",
        "3.3xl": "2rem",
        "4.75xl": "2.75rem",

        "display-large": [
          "3.75rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "5.25rem",
          },
        ],
        "display-medium": [
          "2.75rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "4rem",
          },
        ],
        "display-small": [
          "2.25rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "3.25rem",
          },
        ],
        "headline-large": [
          "2rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "3rem",
          },
        ],
        "headline-medium": [
          "1.75rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "2.5rem",
          },
        ],
        "headline-small": [
          "1.5rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "2.5rem",
          },
        ],
        "title-large": [
          "1.25rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "2rem",
          },
        ],
        "title-medium": [
          "1.125rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "1.75rem",
          },
        ],
        "title-small": [
          "1rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "1.5rem",
          },
        ],
        "label-large": [
          "0.875rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "1.25rem",
          },
        ],
        "label-medium": [
          "0.75rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "1rem",
          },
        ],
        "label-small": [
          "0.625rem",
          {
            fontWeight: 600,
            letterSpacing: "0em",
            lineHeight: "1rem",
          },
        ],
        "body-large": [
          "1rem",
          {
            fontWeight: 400,
            letterSpacing: "0em",
            lineHeight: "1.5rem",
          },
        ],
        "body-medium": [
          "0.875rem",
          {
            fontWeight: 400,
            letterSpacing: "0.025em",
            lineHeight: "1.25rem",
          },
        ],
        "body-small": [
          "0.75rem",
          {
            fontWeight: 400,
            letterSpacing: "0.025em",
            lineHeight: "1rem",
          },
        ],
        "body-xs": [
          "0.75rem",
          {
            fontWeight: 400,
            letterSpacing: "0.025em",
            lineHeight: "1rem",
          },
        ],
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        20: "5rem",
        21: "5.25rem",
      },
      maxWidth: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
        22: "5.5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        32: "8rem",
        64: "16rem",
        96: "24rem",
        112: "28rem",
        128: "32rem",
      },
      minWidth: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
        22: "5.5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        32: "8rem",
        48: "12rem",
        64: "16rem",
        72: "18rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
      },
      maxHeight: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
        22: "5.5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        32: "8rem",
        64: "16rem",
      },
      minHeight: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        7: "1.75rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        14: "3.5rem",
        16: "4rem",
        18: "4.5rem",
        20: "5rem",
        22: "5.5rem",
        24: "6rem",
        26: "6.5rem",
        28: "7rem",
        30: "7.5rem",
        32: "8rem",
        64: "16rem",
        xs: "20rem",
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
        "2xl": "42rem",
        "3xl": "48rem",
        "4xl": "56rem",
        "5xl": "64rem",
        "6xl": "72rem",
        "7xl": "80rem",
        "7/10-screen": "70vh",
        "8/10-screen": "80vh",
        "6/10-screen": "60vh",
      },
      backgroundImage: {
        "hash-red": "linear-gradient(89.42deg, #E27469 5.16%, #D74634 93.17%);",
      },
      zIndex: {
        100: 100,
      },
      fontFamily: {
        poppins: [
          "Poppins",
          "Montserrat",
          "BlinkMacSystemFont",
          "Roboto",
          "sans-serif",
        ],
      },
      transitionProperty: {
        width: "width",
      },
      inset: {
        "1/10": "10%",
        "9/10": "90%",
      },
      screens: {
        "3xl": "1792px",
        "4xl": "2048px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    require("prettier-plugin-tailwindcss"),
  ],
};
