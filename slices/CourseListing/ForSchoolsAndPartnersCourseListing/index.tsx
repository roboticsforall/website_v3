"use client";

import { ContainerWrapper } from "@/app/components/ContainerWrapper";
import { CustomHeading } from "@/app/components/CustomHeading";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Accordion,
  Box,
  Checkbox,
  HStack,
  Text,
  Stack,
  Tag,
  Grid,
  GridItem,
  CloseButton,
  Skeleton,
  Container,
  Flex,
  IconButton,
  Center,
  NumberInput,
} from "@chakra-ui/react";
import { Content, createClient } from "@prismicio/client";
import { PrismicRichText } from "@prismicio/react";
import { useEffect, useState, useMemo, useCallback } from "react";
import { IFilterOptionType, IFilterType } from "..";
import { TextBlock } from "@/app/components/TextBlock";

const client = createClient("rfa-cms");

const filterOptions: IFilterOptionType = {
  subject: {
    filterName: "Subject",
    checkbox: [
      { label: "Programming", value: "Programming" },
      { label: "Kit-based", value: "Kit-based" },
      { label: "CAD", value: "CAD" },
      { label: "Science", value: "Science" },
    ],
  },
  requiredTechnology: {
    filterName: "Minimum Technology Required",
    checkbox: [
      { label: "Computer", value: "Computer" },
      { label: "Mobile", value: "Mobile" },
      { label: "Computer or Mobile", value: "Computer or Mobile" },
    ],
  },
  grade: {
    filterName: "Grade Level",
  },
};

const ITEMS_PER_PAGE = 5;

const ForSchoolsAndPartnersCourseListing = ({
  course_listing,
  heading_text_block,
}: Content.CourseListingSliceDefaultPrimary): JSX.Element => {
  const [data, setData] =
    useState<Content.CourseListingDocument<string> | null>(null);
  const [isLoading, setLoading] = useState(true);

  const [filters, setFilters] = useState<IFilterType>({
    enrollmentStatus: [],
    subject: [],
    requiredTechnology: [],
    grade: -1, // 👈 sentinel stays
  });

  const [currentPage, setCurrentPage] = useState(1);

  async function getCourseData() {
    const data = await client.getByUID(
      "course_listing",
      (course_listing as { uid: string }).uid
    );
    data.data.courses.sort((a, b) => {
      return (a.open_for_enrollment ? 0 : 1) - (b.open_for_enrollment ? 0 : 1);
    });
    setData(data);
    setLoading(false);
  }

  useEffect(() => {
    getCourseData();
  }, []);

  const handleCheckboxChange = useCallback((section: string, value: string) => {
    setCurrentPage(1);
    setFilters((prev) => {
      const updated = { ...prev };
      const list = prev[section] as string[];
      updated[section] = list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value];
      return updated;
    });
  }, []);

  const clearFilter = useCallback((section: string) => {
    setCurrentPage(1);
    setFilters((prev) => ({
      ...prev,
      [section]: section === "grade" ? -1 : [],
    }));
  }, []);

  const handleGradeChange = useCallback((e: { value: string }) => {
    setCurrentPage(1);

    if (e.value === "") {
      // empty input = no grade filter
      setFilters((prev) => ({ ...prev, grade: -1 }));
      return;
    }

    setFilters((prev) => ({
      ...prev,
      grade: Number(e.value),
    }));
  }, []);

  const filteredData = useMemo(() => {
    if (!data) return [];
    return data.data.courses.filter((course) => {
      const grade = filters.grade as number;
      const subject = filters.subject as string[];
      const technology = filters.requiredTechnology as string[];

      const gradeFilter =
        grade === -1 ||
        (grade >= course.minimum_grade! &&
          grade <= course.maximum_grade!);

      const subjectFilter =
        !subject.length || subject.includes(course.subject);

      const technologyFilter =
        !technology.length ||
        technology.includes(course.minimum_technology!);

      return gradeFilter && subjectFilter && technologyFilter;
    });
  }, [data, filters]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCourses = filteredData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <ContainerWrapper>
        <Stack>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} height="100px" />
          ))}
        </Stack>
      </ContainerWrapper>
    );
  }

  if (!data) return <p>No profile data</p>;

  return (
    <ContainerWrapper px={{ base: "4rem", md: "6rem", lg: "8rem" }}>
      <Stack gap="2.5rem">
        <Container p={0} textAlign={{ md: "center" }}>
          <TextBlock textBlock={heading_text_block} />
        </Container>

        <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap="1.5rem">
          {/* FILTERS */}
          <GridItem>
            <Stack py={2}>
              {Object.keys(filterOptions).map((section) => {
                const sectionOptions = filterOptions[section];

                return (
                  <Box key={section}>
                    <HStack gap={1}>
                      <Text fontWeight="bold">
                        {sectionOptions.filterName}
                      </Text>
                      <CloseButton onClick={() => clearFilter(section)} />
                    </HStack>

                    {sectionOptions.checkbox &&
                      sectionOptions.checkbox.map((checkboxInfo) => (
                        <Box key={checkboxInfo.value}>
                          <Checkbox.Root
                            value={checkboxInfo.value}
                            checked={(filters[section] as string[]).includes(
                              checkboxInfo.value
                            )}
                            onCheckedChange={() =>
                              handleCheckboxChange(
                                section,
                                checkboxInfo.value
                              )
                            }
                          >
                            <Checkbox.HiddenInput />
                            <Checkbox.Control>
                              <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Label>
                              {checkboxInfo.label}
                            </Checkbox.Label>
                          </Checkbox.Root>
                        </Box>
                      ))}

                    {section === "grade" && (
                      <HStack mt={2}>
                        <NumberInput.Root
                          min={0}
                          max={12}
                          step={1}
                          clampValueOnBlur={false}
                          value={
                            filters.grade === -1
                              ? ""
                              : String(filters.grade)
                          }
                          onValueChange={handleGradeChange}
                          width="120px"
                        >
                          <NumberInput.Control />
                          <NumberInput.Input placeholder="K–12" />
                        </NumberInput.Root>

                        <Text fontSize="sm" color="gray.600">
                          {filters.grade === -1
                            ? "Any grade"
                            : filters.grade === 0
                            ? "K"
                            : `Grade ${filters.grade}`}
                        </Text>
                      </HStack>
                    )}
                  </Box>
                );
              })}
            </Stack>
          </GridItem>

          {/* COURSES */}
          <GridItem>
            <Accordion.Root multiple>
              <Stack mb="1.25rem">
                {currentCourses.length > 0 ? (
                  currentCourses.map((item) => (
                    <Accordion.Item
                      key={item.course_name}
                      value={item.subject}
                      borderWidth={1}
                      p={5}
                    >
                      <Accordion.ItemTrigger>
                        <Stack flex={1} textAlign="start">
                          <CustomHeading as="h4">
                            {item.course_name}
                          </CustomHeading>
                          <Flex gap={2}>
                            <Tag.Root>
                              <Tag.Label>
                                Grades {item.minimum_grade} –{" "}
                                {item.maximum_grade}
                              </Tag.Label>
                            </Tag.Root>
                            <Tag.Root>
                              <Tag.Label>
                                {item.minimum_technology} Required
                              </Tag.Label>
                            </Tag.Root>
                          </Flex>
                          <PrismicRichText
                            field={item.course_description}
                          />
                        </Stack>
                        <Accordion.ItemIndicator />
                      </Accordion.ItemTrigger>

                      <Accordion.ItemContent>
                        <Accordion.ItemBody>
                          <PrismicRichText
                            field={item.course_syllabi}
                          />
                        </Accordion.ItemBody>
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ))
                ) : (
                  <Center>
                    <Text>No courses found.</Text>
                  </Center>
                )}
              </Stack>
            </Accordion.Root>

            {/* PAGINATION */}
            <HStack justifyContent="end" gap={4}>
              <IconButton
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Previous Page"
              >
                <ChevronLeftIcon />
              </IconButton>

              <IconButton
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Next Page"
              >
                <ChevronRightIcon />
              </IconButton>
            </HStack>
          </GridItem>
        </Grid>
      </Stack>
    </ContainerWrapper>
  );
};

export default ForSchoolsAndPartnersCourseListing;
