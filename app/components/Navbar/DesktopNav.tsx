"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  HoverCard,
} from "@chakra-ui/react";
import { GlobalNavigationDocument } from "@/prismicio-types";
import { TriangleDownIcon } from "@chakra-ui/icons";

export function DesktopNav(navigation: GlobalNavigationDocument<string>) {
  return (
    <Flex justifyContent={"space-between"} alignItems="center">
      <Flex flex={1} justifyContent={"space-between"}>
        <HStack gap={"1.5rem"}>
          <PrismicNextLink href={"/"}>
            <PrismicNextImage field={navigation.data.logo} />
          </PrismicNextLink>

          {navigation.data.slices.map((navItem, i) =>
            navItem.variation == "default" ? (
              <HoverCard.Root key={i}>
                <HoverCard.Trigger>
                  <Flex
                    borderWidth={3}
                    borderColor={"transparent"}
                    padding={1}
                    _hover={{
                      borderTopColor: "primary.900",
                    }}
                    alignItems={"center"}
                  >
                    <Text>{navItem.primary.name}</Text>
                    <TriangleDownIcon ml={1} color={"primary.900"} />
                  </Flex>
                </HoverCard.Trigger>

                <HoverCard.Positioner>
                  <HoverCard.Content border="none" padding={2}>
                    {/* Optional arrow */}
                    <HoverCard.Arrow>
                      <HoverCard.ArrowTip />
                    </HoverCard.Arrow>

                    {navItem.primary.child_navigation.map((childNavItem, j) => (
                      <PrismicNextLink key={j} field={childNavItem.link}>
                        <Box
                          p={4}
                          // borderTopRadius={j === 0 ? "md" : undefined}
                          // borderBottomRadius={
                          //   j === navItem.primary.child_navigation.length - 1
                          //     ? "md"
                          //     : undefined
                          // }
                          _hover={{
                            bg: "primary.900",
                            color: "white",
                          }}
                        >
                          <Text>{childNavItem.name}</Text>
                        </Box>
                      </PrismicNextLink>
                    ))}
                  </HoverCard.Content>
                </HoverCard.Positioner>
              </HoverCard.Root>
            ) : (
              <Box
                key={i}
                borderWidth={3}
                borderColor={"transparent"}
                padding={1}
                _hover={{
                  borderTopColor: "primary.900",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                alignItems={"center"}
              >
                <PrismicNextLink field={navItem.primary.link}>
                  {navItem.primary.name}
                </PrismicNextLink>
              </Box>
            )
          )}
        </HStack>
      </Flex>

      <Flex justifyContent="end">
        <Button size="lg">
          <PrismicNextLink field={navigation.data.donate_link}>
            Donate
          </PrismicNextLink>
        </Button>
      </Flex>
    </Flex>
  );
}
