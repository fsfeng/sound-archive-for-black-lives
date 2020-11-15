import { theme } from "@chakra-ui/core";
import { themeValues } from "./themeValues";

// Let's say you want to add custom colors
const chakraTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    custom: {
      orange7: "#d36d24",
      red8: "#d2202f",
      fuschia8: "#bb01cc"
    }
  },
  fonts: {
    heading: "'DM Mono', monospace",
    // text: "'DM Mono', monospace",
    // text: "'Noto Sans JP', sans-serif",
    text: "'Noto Sans', sans-serif",
    nav: "'Space Mono', sans-serif"
  }
};

export default chakraTheme;
