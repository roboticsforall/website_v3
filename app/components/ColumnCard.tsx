"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import {
  ImageField,
  KeyTextField,
  LinkField,
  RichTextField,
} from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { CustomHeading } from "@/app/components/CustomHeading";

export interface IColumnCardProps {
  image: ImageField;
  title: KeyTextField;
  description: RichTextField;
  button_text: KeyTextField;
  button_link: LinkField;
  link_text: KeyTextField;
  link: LinkField;
  has_link: boolean;
  has_image: boolean;
  has_button: boolean;
}

export const ColumnCard = (props: IColumnCardProps): JSX.Element => {
  return (
    <Card.Root h="100%" variant={"outline"} borderWidth={1.5}>
      {props.has_image && (
        <Card.Header>
          <Flex justify="center">
            <Box borderRadius={"md"}>
              <PrismicNextImage field={props.image} />
            </Box>
          </Flex>
        </Card.Header>
      )}
      <Card.Body>
        <Flex direction="column" align="center" textAlign="center">
          <CustomHeading as="h4" mb={5}>
            {props.title}
          </CustomHeading>
          <Box mx="auto" maxW="80%">
            <PrismicRichText field={props.description} />
          </Box>
        </Flex>
      </Card.Body>
      {(props.has_link || props.has_button) && (
        <Card.Footer justifyContent="center">
          <ButtonGroup gap="1rem">
            {props.has_button && (
              <Button variant="solid">
                <PrismicNextLink field={props.button_link}>
                  {props.button_text}
                </PrismicNextLink>
              </Button>
            )}
            {props.has_link && (
              <Button variant="solid">
                <PrismicNextLink field={props.link}>
                  {props.link_text}
                </PrismicNextLink>
              </Button>
            )}
          </ButtonGroup>
        </Card.Footer>
      )}
    </Card.Root>
  );
};
