"use client";

import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { FooterNavigationDocument } from "@/prismicio-types";
import { CustomHeading } from "../CustomHeading";
import { PrismicRichText } from "@prismicio/react";
import { ContainerWrapper } from "../ContainerWrapper";
import { ExternalLinkIcon } from "@chakra-ui/icons";

interface FooterProps {
  footer: FooterNavigationDocument<string>;
}

export function Footer({ footer }: FooterProps) {
  return (
    <Box bg="primary.900" color="white">
      <ContainerWrapper>
        <Grid templateColumns={{ base: "1fr", lg: "2fr 2.5fr" }} gap={"1.5rem"}>
          <GridItem>
            <Stack gap={"2.5rem"}>
              <Flex align="center">
                <Box width="51px" height="51px">

                  <PrismicNextLink href={"/"}>
                    <PrismicNextImage field={footer.data.company_logo} />
                  </PrismicNextLink>
                    
                </Box>
                <CustomHeading as="h4" ml={2}>
                  {footer.data.name}
                </CustomHeading>
              </Flex>
              <Box maxW="50ch">
                <PrismicRichText field={footer.data.description} />
                <Button
                  mt={"1.5rem"}
                  variant="solid"
                  size="lg"
                  fontSize={"1.25rem"}
                  color="white"
                >
                  <PrismicNextLink field={footer.data.donate_link}>
                    Donate <ExternalLinkIcon ml="1px" />
                  </PrismicNextLink>
                  
                </Button>
              </Box>
              <Stack direction="row" gap={"2.5rem"}>
                {footer.data.social_links.map((item, s) => (
                  
                    <PrismicNextLink field={item.link}>
                    <PrismicNextImage field={item.icon} />
                    </PrismicNextLink>
                  
                ))}
              </Stack>
            </Stack>
          </GridItem>
          <GridItem>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={"2.5rem"}>
              {footer.data.slices.map(
                (navItem, i) =>
                  navItem.variation == "default" && (
                    <Stack key={navItem.primary.name} align={"flex-start"}>
                      <CustomHeading as="h5" mb={4} textTransform={"uppercase"}>
                        {navItem.primary.name}
                      </CustomHeading>
                      {navItem.primary.child_navigation.map(
                        (childNavItem, j) => (
                          
                            <PrismicNextLink key={j} field={childNavItem.link}>
                            {childNavItem.name}
                            </PrismicNextLink>
                        )
                      )}
                    </Stack>
                  )
              )}
            </SimpleGrid>
          </GridItem>
        </Grid>
      </ContainerWrapper>
    </Box>
  );
}
