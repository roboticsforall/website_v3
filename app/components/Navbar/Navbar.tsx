//done
"use client";
import { Container,  Show } from "@chakra-ui/react";
import { GlobalNavigationDocument } from "@/prismicio-types";
import { BackgroundColor } from "../BackgroundColor";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { Box } from "@chakra-ui/react";
interface NavbarProps {
  navbar_color?: string;
  navigation: GlobalNavigationDocument<string>;
}

export function Navbar({ navbar_color, navigation }: NavbarProps) {
  return (
    <nav style={{ borderBottomColor: "lightgray", borderBottomWidth: 1 }}>
      <BackgroundColor backgroundColor={navbar_color || "white"}>
        <Container py={3} >
        <Box hideBelow="md">
          <DesktopNav {...navigation} />
        </Box>

        <Box hideFrom="md">
          <MobileNav {...navigation} />
        </Box>
        </Container>
      </BackgroundColor>
    </nav>
  );
}
