import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";

// Components
import {
  Skeleton,
  Divider,
  Box,
  Heading,
  Grid,
  ThemeProvider
} from "@chakra-ui/core";

import HeaderBox from "./components/HeaderBoxv1";
import NavBar from "./components/NavBar-dev";
import DescriptionBox from "./components/DescriptionBoxv2";
import ArchiveTable from "./components/ArchiveTable-dev";

// Theme
import chakraTheme from "./theme/chakraTheme";

export default function App() {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&family=Assistant:wght@200;300&family=Noto+Sans&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <ThemeProvider theme={chakraTheme}>
        <Grid alignItems="center" justifyContent="center" alignContent="center">
          {/* <HeaderBox /> */}
          <NavBar />

          <Skeleton colorStart="pink" colorEnd="orange" height="2px" />

          <DescriptionBox>
            <Heading
              textAlign="left"
              fontSize={["2xl", "2xl", "3xl"]}
              fontFamily="heading"
              lineHeight="100%"
            >
              {`the 2020 files`}
            </Heading>
            This is the Box, and more of the box, and more words and more words
            and more words. This is the Box, and more of the box, and more words
            and more words and more words. This is the Box, and more of the box,
            and more words and more words and more words.
            {/* <Divider /> */}
            <br />
          </DescriptionBox>
          <Skeleton colorStart="pink" colorEnd="orange" height="2px" />
          <br />

          <ArchiveTable />
        </Grid>
      </ThemeProvider>
    </Fragment>
  );
}
