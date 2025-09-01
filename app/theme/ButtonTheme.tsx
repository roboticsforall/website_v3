import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      outline: {
        borderWidth: "2px",
      },
    },
  },
  // defaultVariants: {
  //   variant: "solid", // same default as Chakra's Button
  // },
});