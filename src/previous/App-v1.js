import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Button, Heading, Text } from "rebass";
import { ThemeProvider } from "theme-ui";
import { Helmet } from "react-helmet";

import styled from "styled-components";
import theme from "./theme/theme";

import MyGrid from "../components/Grid";

export default function App() {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;400&family=Work+Sans:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&family=Assistant:wght@200;300&family=Sarala&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <ThemeProvider theme={theme}>
        <Heading>Hello</Heading>
        <Text> Some text </Text>
      </ThemeProvider>
      <MyGrid />
    </Fragment>
  );
}
