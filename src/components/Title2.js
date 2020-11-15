import React, { Fragment } from "react";
import { useContext } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Flex, Heading } from "@chakra-ui/core";
// import { Box, Heading } from "grommet";

import chakraTheme from "../theme/chakraTheme";

const shadowcolor = "black";

const TitleBar = styled(Flex)`
  background-color: ${props => props.bgcolor};
  background-size: 0% 100%;
  box-shadow: 0 4px 20px 10px ${props => props.bgcolor};
`;

// const TitleText = styled.h1`
const TitleText = styled(Heading)`
  background-position: left;
  background-size: 0% 100%;
  background-image: linear-gradient(to right, green, yellow);
  padding-bottom: thickness;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  -webkit-text-stroke: 1px ${props => props.strokecolor};
  -webkit-text-fill-color: transparent;
  font-family: "Space Mono", monospace;
  font-style: italic;
`;

const Title = () => {
  return (
    <Fragment>
      <TitleBar bgcolor={chakraTheme.colors.pink[100]} w="flex">
        <TitleText strokecolor={chakraTheme.colors.custom.orange7}>
          HYPHAE
        </TitleText>
      </TitleBar>
    </Fragment>
  );
};

export default Title;
