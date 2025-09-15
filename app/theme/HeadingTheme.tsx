import { defineRecipe } from "@chakra-ui/react";

export const headingRecipe = defineRecipe({
  base: {
    textAlign: "center",
    marginInline: "auto",
    width: "fit-content",
  },
  variants: {
    align: {
      center: { textAlign: "center", marginInline: "auto", width: "fit-content" },
      left:   { textAlign: "left", marginInline: 0, width: "auto" },
    },
  },
  defaultVariants: {
    align: "center",
  },
});
