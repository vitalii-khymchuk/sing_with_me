import { defineStyleConfig, extendTheme } from "@chakra-ui/react";

const Heading = defineStyleConfig({
  sizes: {
    sm: {
      fontSize: "1.5em",
      p: "0.2em",
    },
    md: {
      fontSize: "1.5em",
      p: "0.3em",
    },
    lg: {
      fontSize: "1.5em",
      p: "0.5em",
    },
  },
  defaultProps: {
    size: {
      base: "sm",
      md: "md",
      lg: "lg",
    },
  },
});

const Button = defineStyleConfig({
  baseStyle: {
    "button&:active, button&[data-active]": {
      background: "transparent",
    },
    "button&:hover, button&[data-hover]": {
      background: "rgba(255, 255, 255, 0.2)",
    },
    "button&:focus, button&[data-focus]": {
      background: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.2)",
    },
  },
});

const theme = extendTheme({
  breakpoints: {
    sm: "360px",
    md: "768px",
    lg: "1200px",
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  styles: {
    global: {
      "body, title": {
        bg: "linear-gradient(135deg, #592159 40%,  #000000)",
        color: "white",
        minHeight: "100vh",
        fontSize: {
          sm: "14px",
          md: "18px",
          lg: "24px",
        },
        overflowX: "hidden",
      },
      "button:hover, button:focus": {
        bg: "rgba(255, 255, 255, 0.2)",
      },
      // "button:active": {
      //   bg: "transparent",
      // },
    },
  },
  components: {
    Heading,
    Button,
  },
});

export { theme };
