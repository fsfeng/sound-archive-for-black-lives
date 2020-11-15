import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import styled from "styled-components/macro";
import { jsx, css } from "@emotion/core";

import { Flex, Grid, Box, Text, Heading, ThemeProvider } from "@chakra-ui/core";

import chakraTheme from "./theme/chakraTheme";
import Title from "./components/Title2";

const randtheme = {
  colors: {
    primary: "hotpink"
  }
};

export default function App() {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;400&family=Work+Sans:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&family=Assistant:wght@200;300&family=Sarala&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <ThemeProvider theme={chakraTheme}>
        <Grid>
          <Box justify="center" bg="orange.500">
            <Text
              css={{
                fontSize: 44,
                fontFamily: "Georgia, serif",
                color: "blue"
              }}
            >
              Just text
            </Text>
          </Box>
          <Flex bg="blue.50" justify="center">
            <Heading color="gray.500">Hyphae</Heading>
          </Flex>

          <div
            css={css`
              font-size: ${chakraTheme.fontSizes.md};
              color: ${chakraTheme.colors.green[500]};
              background-color: ${chakraTheme.colors.pink[100]};
            `}
          >
            some other text
          </div>

          <div
            css={css`
              color: ${chakraTheme.colors.green[500]};
              /* font-family: "Sarala", sans-serif; */
              font-family: ${chakraTheme.fonts.heading}, sans-serif;
              font-size: 24;
            `}
          >
            some other text
          </div>

          <Flex
            css={css`
              background-color: ${chakraTheme.colors.pink[100]};
              background-size: 0% 100%;
              box-shadow: 0 4px 10px 10px ${chakraTheme.colors.custom.fuschia8};
              font-family: "Assistant", sans-serif;
            `}
            justify="center"
          >
            <Heading color="gray.500">Hyphae Again </Heading>
          </Flex>

          <Flex justify="center">
            <Title />
          </Flex>

          <Flex align="center">
            <Flex w="flex" bg="blue.50" />
            <Box width={["full", "md"]} align="center" bg="orange.500">
              <Text textAlign="center">A new box</Text>
            </Box>
            <Flex w="flex" bg="blue.50" />
          </Flex>
        </Grid>
      </ThemeProvider>
    </Fragment>
  );
}
