"use client";
import { Box, BoxProps } from "@chakra-ui/react";
import { backgroundColorOptions } from "./background_options";
import BlueSwoosh from "../media/blue_swoosh.svg";

import { Text } from "@chakra-ui/react";
interface BackgroundColorProps extends BoxProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export const BackgroundColor = ({
  children,
  backgroundColor,
  ...boxProps
}: BackgroundColorProps) => {
  switch (backgroundColor) {
    case "primary": {
      return (
        <Box {...boxProps} bg={backgroundColorOptions.PRIMARY}>
          {children}
        </Box>
      );
    }
    case "secondary": {
      return (
        <Box
          {...boxProps}
          bg={backgroundColorOptions.SECONDARY}
        >
          <Text color="white"> {children} </Text>
          
        </Box>
      );
    }
    case "gradient":
      return (
        <Box {...boxProps} bgGradient={backgroundColorOptions.GRADIENT}>
          {children}
        </Box>
      );
    case "swoosh":      return (
        <Box {...boxProps} bg={backgroundColorOptions.PRIMARY}>
          <BlueSwoosh style={{ position: "absolute", bottom: 0, width: "100%" }} />
          {children}
        </Box>
      );
    default:
      return <Box {...boxProps}>{children}</Box>;
  }
};
