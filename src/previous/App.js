import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { Box, Heading, Grommet, Paragraph, defaultProps } from "grommet";

import styled from "styled-components";
import grommettheme from "./theme/grommettheme";

import MyGrid from "./components/Grid";
import MyCarousel from "./components/Carousel3";
import Title from "./components/Title";

import MyResponsiveGrid from "./RGTest";

export default function App() {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@200;400&family=Work+Sans:ital,wght@0,200;0,300;0,400;1,200;1,300;1,400&family=Assistant:wght@200;300&family=Sarala&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Grommet theme={grommettheme}>
        <Title>Hyphae</Title>
        <Heading>Hello</Heading>
        <Paragraph> Some text </Paragraph>
        <MyGrid />
        <Paragraph>I am a sample carousel</Paragraph>
        <MyCarousel />
        {/* <MyResponsiveGrid /> */}
      </Grommet>
    </Fragment>
  );
}
