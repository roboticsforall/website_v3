"use client";
import { Stack, StackProps, Text } from "@chakra-ui/react";
import { asText, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { CustomHeading } from "@/app/components/CustomHeading";

export interface ITextBlock {
  textBlock: RichTextField;
}

export const TextBlock = ({
  textBlock,
  ...flexProps
}: ITextBlock & StackProps): JSX.Element => {
  return (
    <>
      {textBlock && asText(textBlock).trim().length != 0 && (
        // <Stack maxW="70ch" {...flexProps} gap={"1.25rem"}>
        <div>
          <PrismicRichText
            field={textBlock}
            components={{
              heading1: ({ children }) => (
                <CustomHeading style={{ marginBottom: "1.25rem" }} as="h1">{children}</CustomHeading>
              ),
              heading2: ({ children }) => (
                <CustomHeading style={{ marginBottom: "1.25rem" }} as="h2">{children}</CustomHeading>
              ),
              heading3: ({ children }) => (
                <CustomHeading style={{ marginBottom: "1.25rem" }} as="h3">{children}</CustomHeading>
              ),
              heading4: ({ children }) => (
                <CustomHeading style={{ marginBottom: "1.25rem" }} as="h4">{children}</CustomHeading>
              ),
              heading5: ({ children }) => (
                <CustomHeading style={{ marginBottom: "1.25rem" }} as="h5">{children}</CustomHeading>
              ),        
              heading6: ({ children }) => (
                <CustomHeading style={{ marginBottom: "1.25rem" }} as="h6">{children}</CustomHeading>
              ),           
              paragraph: ({ children }) => (
                <Text  fontSize="lg">{children}</Text>
              ),
            }}
          />
        {/* // </Stack> */}
        </div>
      )}
    </>
  );
};
