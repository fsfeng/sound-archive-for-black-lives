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

// Theme
import chakraTheme from "./theme/chakraTheme";

export default function App() {
  return (
    <Fragment>
      <ChakraProvider theme={chakraTheme}>
        {/* <HeaderBox /> */}

        <Box
          w="100%"
          pr={{ base: 6, md: 6 }}
          pl={{ base: 6, md: 12 }}
          pt="10"
          pb="2"
          bg="gray.100"
          maxW="3xl"
        >
          <Heading
            textAlign="left"
            fontSize={["4xl", "3xl", "3xl"]}
            fontFamily="heading"
            lineHeight="100%"
            color="custom.orange7"
          >
            {`GET LOUD FOR BLACK LIFE`}
          </Heading>
        </Box>

        <Box display={{ sm: "flex" }} bg="gray.100">
          <Box
            pt={{ base: 4, md: 0 }}
            pr={{ base: 6, md: 6 }}
            pl={{ base: 6, md: 12 }}
            pb={{ base: 6, md: 6 }}
            bg="blue.100"
          >
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
              color="teal.600"
            >
              ABOUT
            </Text>

            <Text mt={2} color="gray.500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
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

          <Box flexShrink={0} width={{ sm: "60" }} bg="red.100">
            <Box
              pt={{ base: 4, md: 0 }}
              pl="6"
              pr={{ base: 6, md: 12 }}
              pb={{ base: 6, md: 6 }}
              bg="yellow.100"
            >
              <Text>ARCHIVE</Text>
            </Box>
          </Box>
        </Box>
      </ChakraProvider>
    </Fragment>
  );
}
