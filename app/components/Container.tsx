import { defineRecipe } from "@chakra-ui/react";

export const containerRecipe = defineRecipe({
  base: {
    px: "1.5rem",
  },
  variants: {
    size: {
      sm: { maxW: "container.sm" },
      md: { maxW: "container.md" },
      lg: { maxW: "container.lg" },
      xl: { maxW: "container.xl" },
      "2xl": { maxW: "90em" },
    },
  },
  defaultVariants: {
    size: "md",
  },
});
// import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

// // define the base component styles
// const baseStyle = {
//   px: "1.5rem",
// };

// const sizes = {
//   sm: defineStyle({
//     maxW: "container.sm",
//   }),
//   md: defineStyle({
//     maxW: "container.md",
//   }),
//   lg: defineStyle({
//     maxW: "container.lg",
//   }),
//   xl: defineStyle({
//     maxW: "container.xl",
//   }),
//   "2xl": defineStyle({
//     maxW: "90em",
//   }),
// };

// // export the component theme
// export const containerTheme = defineStyleConfig({ baseStyle, sizes });
