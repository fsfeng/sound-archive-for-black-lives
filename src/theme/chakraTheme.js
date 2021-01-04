import { theme } from "@chakra-ui/react";
// import { themeValues } from "./themeValues";
import { Fonts } from "./Fonts";

// Let's say you want to add custom colors
const chakraTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    custom: {
      orange7: "#fc6400",
      red8: "#d2202f",
      fuschia8: "#bb01cc"
    }
  },
  fonts: {
    heading: "'DM Mono', monospace",
    // heading: "DM Mono",
    // text: "'DM Mono', monospace",
    // text: "'Space Grotesk', sans-serif",
    text: "'Hind', sans-serif",
    nav: "'Space Grotesk', sans-serif"
  }
};

export default chakraTheme;
