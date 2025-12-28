"use client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import {
  Box,
  Center,
  VStack,
  Text,
  Container,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { TextBlock } from "@/app/components/TextBlock";
import { BottomButtonGroup } from "@/app/components/BottomButtonGroup";

export type NumberedCardSectionProps =
  SliceComponentProps<Content.NumberedCardSectionSlice>;

const NumberedCardSection = ({
  slice,
}: NumberedCardSectionProps): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <VStack gap="2.5rem" align="center" textAlign="center">
          <Container p={0} maxW="80%" textAlign="center">
            <Box mx="auto" textAlign="center">
              <TextBlock textBlock={slice.primary.heading_text_block} />
            </Box>
          </Container>
          <Flex gap="2.5rem" flexWrap="wrap" justify="center">
            {slice.primary.numbered_cards.map((item, i) => (
              <Box
                key={i}
                width={{
                  sm: "100%",
                  md: "calc(50% - 2.5rem * 1/2)",
                  lg: "calc(25% - 2.5rem * 3/4)",
                }}
              >
                <Stack justify="center" textAlign="center">
                  <Center
                    w={12}
                    h={12}
                    bg="primary.500"
                    color="white"
                    borderRadius="full"
                    mb={4}
                  >
                    <Text as="b" fontSize="2xl">
                      {i + 1}
                    </Text>
                  </Center>
                  <Stack gap="1.25rem" textAlign="center">
                    <CustomHeading as="h4" textAlign="center">
                      {item.card_title}
                    </CustomHeading>
                    <Box mx="auto" maxW="80%" textAlign="center">
                      <PrismicRichText field={item.card_description} />
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Flex>
          <BottomButtonGroup button_group={slice.primary.button_group} />
        </VStack>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default NumberedCardSection;
