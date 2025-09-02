"use client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Box, Button, Flex, IconButton, Link, Text, useDisclosure, CloseButton } from "@chakra-ui/react";

// import * as Drawer from "@chakra-ui/react/drawer";
// import * as Accordion from "@chakra-ui/react/accordion";
import { Accordion } from "@chakra-ui/react/accordion";
// import { Accordion } from "@chakra-ui/react/accordion";
import { GlobalNavigationDocument } from "@/prismicio-types";
import {
  HamburgerIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import { Drawer } from "@chakra-ui/react/drawer";
export function MobileNav(navigation: GlobalNavigationDocument<string>) {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Top Bar */}
      <Flex justifyContent="space-between" alignItems="center">
          <PrismicNextLink href={"/"}>
            <PrismicNextImage field={navigation.data.logo} />
          </PrismicNextLink>
        <IconButton
          onClick={onOpen}
          variant="ghost"
          aria-label="Open menu"
        >
          <HamburgerIcon boxSize={6} />
        </IconButton>
      </Flex>

      {/* Drawer */}
      <Drawer.Root open={open} onOpenChange={(isOpen) => {
    if (!isOpen) {
      onClose(); // only run close logic when it's closing
    }
  }} placement="end" size="full">
        <Drawer.Backdrop />
        <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Header>

          <Drawer.Body>
            {/* Donate button */}
            <Button
              my={6}
              w="full"
              size="lg"
              onClick={onClose}
            >
              <PrismicNextLink field={navigation.data.donate_link}></PrismicNextLink>
              Donate
            </Button>

            {/* Navigation Accordion */}
            <Accordion.Root multiple>
              {navigation.data.slices.map((navItem, i) =>
                navItem.variation === "default" ? (
              <Accordion.Item value={i.toString()} key={i}>
                      <Accordion.ItemTrigger
                        _expanded={{ fontWeight: "bold" }}
                        asChild
                      >
                        <Flex
                          justify="space-between"
                          align="center"
                          w="full"
                          textAlign="left"
                        >
                          <Text>{navItem.primary.name}</Text>

                            <TriangleDownIcon ml={1} color="primary.900" />

                          {/* <Accordion.Icon
                            as={TriangleDownIcon}
                            _expanded={{ as: TriangleUpIcon }}
                            ml={1}
                            color="primary.900"
                          /> */}
                        </Flex>
                      </Accordion.ItemTrigger>

                      <Accordion.ItemContent>
                        {navItem.primary.child_navigation.map(
                          (childNavItem, j) => (
                            // <Link
                            //   key={j}
                            //   onClick={onClose}
                            //   textAlign="left"
                            //   display="block"
                            //   py={2}
                            // >
                              <PrismicNextLink key={j} style={{textAlign: "left", display: "block"}} onClick={onClose} field={childNavItem.link}>
                                {childNavItem.name}
                              </PrismicNextLink>
                            // </Link>
                          )
                        )}
                      </Accordion.ItemContent>
                    </Accordion.Item>
                  ) : (
                  <Accordion.Item value={i.toString()} key={i}>
                    <Accordion.ItemTrigger>
                      {/* <Link
                        w="100%"
                      > */}
                        <Flex justify="space-between" alignItems="center">
                          <PrismicNextLink field={navItem.primary.link} >
                            {navItem.primary.name}
                          </PrismicNextLink>
                        </Flex>
                      {/* </Link> */}
                    </Accordion.ItemTrigger>
                  </Accordion.Item>
                )
              )}
            </Accordion.Root>
          </Drawer.Body>
        </Drawer.Content>
        </Drawer.Positioner>
      </Drawer.Root>
    </>
  );
}
// "use client";
// import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
// import {
//   Accordion,
//   AccordionButton,
//   AccordionIcon,
//   AccordionItem,
//   AccordionPanel,
//   Box,
//   Button,
//   Drawer,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerHeader,
//   DrawerOverlay,
//   Flex,
//   IconButton,
//   Link,
//   Text,
//   useDisclosure,
// } from "@chakra-ui/react";
// import { GlobalNavigationDocument } from "@/prismicio-types";
// import {
//   ArrowForwardIcon,
//   ChevronRightIcon,
//   HamburgerIcon,
//   TriangleDownIcon,
//   TriangleUpIcon,
// } from "@chakra-ui/icons";

// export function MobileNav(navigation: GlobalNavigationDocument<string>) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <>
//       <Flex justifyContent={"space-between"} alignItems="center">
//         <Link>
//           <PrismicNextLink href={"/"}>
//             <PrismicNextImage field={navigation.data.logo} />
//           </PrismicNextLink>
//         </Link>
//         <IconButton
//           onClick={onOpen}
//           variant="ghost"
//           aria-label="Options"
//         >
//           <HamburgerIcon boxSize={6} />
//         </IconButton>
//       </Flex>
//       <Drawer.Root
//         size={"full"}
//         placement={"end"}
//         onClose={onClose}
//         isOpen={isOpen}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerHeader>
//             <DrawerCloseButton />
//           </DrawerHeader>
//           <DrawerBody>
//             <Button
//               my={6}
//               w="full"
//               size={"lg"}
//               onClick={onClose}
//               as={PrismicNextLink}
//               field={navigation.data.donate_link}
//             >
//               Donate
//             </Button>
//             <Accordion.Root multiple>
//               {navigation.data.slices.map((navItem, i) =>
//                 navItem.variation == "default" ? (
//                   <Accordion.Item key={i}>
//                     {({ isExpanded }: { isExpanded: Boolean }) => (
//                       <>
//                         <Accordion.ItemTrigger _expanded={{ fontWeight: "bold" }}>
//                           <Box flex="1" textAlign={"left"}>
//                             <Text>{navItem.primary.name}</Text>
//                           </Box>
//                           {isExpanded ? (
//                             <TriangleUpIcon ml={1} color={"primary.900"} />
//                           ) : (
//                             <TriangleDownIcon ml={1} color={"primary.900"} />
//                           )}
//                         </Accordion.ItemTrigger>

//                         {navItem.primary.child_navigation.map(
//                           (childNavItem, j) => (
//                             <Accordion.ItemContent p={4} key={j}>
//                               <Accordion.ItemBody>
//                                 <Box>
//                                     <Link
//                                       onClick={onClose}
//                                       textAlign={"left"}
//                                     >
//                                       <PrismicNextLink field={childNavItem.link}>
//                                         <Box>
//                                           <Text>{childNavItem.name}</Text>
//                                         </Box>
//                                       </PrismicNextLink>
                                      
//                                     </Link>
//                                 </Box>
//                               </Accordion.ItemBody>
//                             </Accordion.ItemContent>
//                           )
//                         )}
//                       </>
//                     )}

                    

//                   </Accordion.Item>
//                 ) : (
//                   <Accordion.Item key={i}>
//                     <Accordion.ItemTrigger>
//                       <Link
//                         w="100%"
//                         as={PrismicNextLink}
//                         field={navItem.primary.link}
//                       >
//                         <PrismicNextLink 
//                         <Flex justify={"space-between"} alignItems={"center"}>
//                           <Text>{navItem.primary.name}</Text>
//                         </Flex>
//                       </Link>
//                     </Accordion.ItemTrigger>
//                   </Accordion.Item>
//                 )
//               )}
//             </Accordion>
//           </DrawerBody>
//         </DrawerContent>
//       </Drawer>
//     </>
//   );
// }
