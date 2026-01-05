"use client";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface CustomHeadingProps extends HeadingProps {
  children: React.ReactNode;
}

export const CustomHeading = ({
  children,
  ...headingProps
}: CustomHeadingProps): JSX.Element => {
  switch (headingProps.as) {
    case "h1": {
      return (
        <Heading textAlign={"left"} width={"100%"} {...headingProps} size={{ base: "2xl", lg: "3xl" }}>
          {children}
        </Heading>
      );
    }
    case "h2": {
      return (
        // <h2 {...headingProps}>{children}</h2>
        <Heading fontSize={"30px"}  {...headingProps} size="xl">
          {children}
        </Heading>
      );
    }
    case "h3":
      return (
        <Heading textAlign={"left"} width={"100%"} {...headingProps} size="lg">
          {children}
        </Heading>
      );
    case "h4":
      return (
        // might have to do textAlign="center"
        <Heading textAlign={"left"} width={"100%"}{...headingProps} size="md">
          {children}
        </Heading>
      );
    case "h5":
      return (
        // might have to do textAlign="center"
        <Heading textAlign={"left"} width={"100%"} {...headingProps} size="md">
          {children}
        </Heading>
      );
    case "h6":
      return (
        <Heading textAlign={"left"} width={"100%"} {...headingProps} size="sm">
          {children}
        </Heading>
      );
    default:
      return <Heading textAlign={"left"} width={"100%"} {...headingProps}>{children}</Heading>;
  }
};
