// app/theme/recipes/button.ts
import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontWeight: "600",
    borderRadius: "0.5rem",
    transitionProperty: "background, color, box-shadow, border-color",
    transitionDuration: "200ms",
    outline: "none",
    "&:focus-visible": { boxShadow: "0 0 0 3px var(--chakra-colors-blue-200)" },
  },

  // 👇 variant GROUPS, not top-level variants
  variants: {
    variant: {
      solid: {
        background: "blue.500",
        color: "white",
        "&:hover": { background: "blue.600" },
        "&:active": { background: "blue.700" },
        "&:disabled": { opacity: 0.6, cursor: "not-allowed" },
      },
      outline: {
        borderWidth: "1px",
        borderColor: "blue.500",
        color: "blue.500",
        "&:hover": { background: "blue.50" },
        "&:active": { background: "blue.100" },
        "&:disabled": { opacity: 0.6, cursor: "not-allowed" },
      },
      ghost: {
        color: "blue.600",
        background: "transparent",
        "&:hover": { background: "blue.50" },
        "&:active": { background: "blue.100" },
      },
      link: {
        color: "blue.600",
        textDecoration: "underline",
        background: "transparent",
        "&:hover": { color: "blue.700" },
        "&:active": { color: "blue.800" },
      },
    },

    size: {
      sm: { paddingInline: "1rem", height: "2.25rem" }, // no font size changes
      md: { paddingInline: "1.5rem", height: "2.5rem" },
      lg: { paddingInline: "1.75rem", height: "3rem" },
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});
