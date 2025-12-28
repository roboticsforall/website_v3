"use client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { TextBlock } from "@/app/components/TextBlock";
import { Accordion, Box, Container, Stack, Flex } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type FaqSliceProps = SliceComponentProps<Content.FaqSliceSlice>;

const FaqSlice = ({ slice }: FaqSliceProps): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <Stack gap="2.5rem">
          <Container p={0} textAlign={{ md: "center" }}>
            <TextBlock textBlock={slice.primary.heading_text_block} />
          </Container>
          <Container p={0}>
            <Accordion.Root defaultValue={[]}>
              {slice.primary.accordion.map((item, index) => (
                <Accordion.Item key={index} value={`item-${index}`}>
                  <Accordion.ItemTrigger position="relative" minH="3rem">
                    <Box
                      position="absolute"
                      left="50%"
                      transform="translateX(-50%)"
                      display="flex"
                      alignItems="center"
                      pointerEvents="none"
                    >
                      <CustomHeading as="h4">{item.heading}</CustomHeading>
                    </Box>
                    <Accordion.ItemIndicator ml="auto" />
                  </Accordion.ItemTrigger>
                  <Accordion.ItemContent>
                    <Box pb={4} textAlign="center">{item.description}</Box>
                  </Accordion.ItemContent>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Container>
        </Stack>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default FaqSlice;
