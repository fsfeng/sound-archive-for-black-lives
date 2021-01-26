import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

// Components
import {
  Skeleton,
  Divider,
  Box,
  Container,
  Center,
  Heading,
  Grid,
  GridItem,
  ChakraProvider,
  Text,
  Flex,
  Image,
  Link
} from "@chakra-ui/react";

import HeaderBox from "./components/HeaderBoxv1";
import NavBar from "./components/NavBar-dev";
import DescriptionBox from "./components/DescriptionBox-dev";
import ArchiveTable from "./components/ArchiveTable-dev";

import ArchiveList from "./components/ArchiveList-dev.js";

// Fonts
import { Fonts } from "./theme/Fonts";

// Theme
import chakraTheme from "./theme/chakraTheme";

export default function App() {
  return (
    <Fragment>
      <ChakraProvider theme={chakraTheme}>
        <Fonts />
        {/* <HeaderBox /> */}
        <Container maxW="5xl" centerContent>
          <Box
            w="100%"
            pr={{ base: 6, md: 6 }}
            pl={{ base: 6, md: 12 }}
            pt="10"
            pb="2"
            // bg="gray.100"
          >
            <Heading textStyle="title">{`GET LOUD FOR BLACK LIFE`}</Heading>
          </Box>

          <Box
            display={{ sm: "flex" }}
            // bg="gray.100"
          >
            <Box
              pt={{ base: 4, md: 4 }}
              pr={{ base: 6, md: 6 }}
              pl={{ base: 6, md: 12 }}
              pb={{ base: 6, md: 6 }}
              // bg="blue.100"
              border="dotted"
              borderColor="orange.200"
            >
              <Text textStyle="heading1">
                Something here about this is who we are
              </Text>

              <Text textStyle="text">
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </Text>
            </Box>

            {/* <Box flexShrink={0}>
            <Image
              borderRadius="lg"
              width={{ md: "80" }}
              src="https://bit.ly/2jYM25F"
              alt="Woman paying for a purchase"
            />
          </Box> */}

            <Box
              flexShrink={0}
              width={{ sm: "60" }}
              bg="orange.100"
              border="dotted"
              borderColor="orange.200"
            >
              <Box
                pt={{ base: 4, md: 4 }}
                pl="6"
                pr={{ base: 6, md: 12 }}
                pb={{ base: 6, md: 6 }}
                // bg="yellow.100"
              >
                <Text textStyle="heading1">Archive</Text>
                <ArchiveList />
              </Box>
            </Box>
          </Box>
        </Container>
      </ChakraProvider>
    </Fragment>
  );
}
