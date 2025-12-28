"use client";
import { BackgroundColor } from "@/app/components/BackgroundColor";
import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { TextBlock } from "@/app/components/TextBlock";
import { Box, Flex, Grid, Card } from "@chakra-ui/react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

export type ThreeColumnExplainerProps =
  SliceComponentProps<Content.ThreeColumnExplainerSlice>;

const ThreeColumnExplainer = ({
  slice,
}: ThreeColumnExplainerProps): JSX.Element => {
  return (
    <BackgroundColor backgroundColor={slice.primary.backgroundcolor}>
      <ContainerWrapper>
        <Grid
          templateColumns={{
            base: "1fr",
            lg: "1fr 2fr",
          }}
          gap="1.5rem"
        >
          <Flex justify="center" align="center">
            <Box
              width={{
                sm: "100%",
                lg: "calc(100% - 1.5rem * 2/3)",
              }}
              textAlign="left"
            >
              <TextBlock textBlock={slice.primary.heading_text_block} />
            </Box>
          </Flex>

          <Flex gap="6" flexWrap="wrap" justify="center">
            {slice.primary.multi_column_explainer.map((item, i) => (
              <Box
                width={{
                  md: "calc(50% - 1.5rem * 2/3)",
                }}
                key={i}
              >
                <Card.Root backgroundColor="gray.gray2" height="100%">
                  <Card.Body textAlign="left">
                    <TextBlock textBlock={item.card_text_block} />
                  </Card.Body>
                </Card.Root>
              </Box>
            ))}
          </Flex>
        </Grid>
      </ContainerWrapper>
    </BackgroundColor>
  );
};

export default ThreeColumnExplainer;
