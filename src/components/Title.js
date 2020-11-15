import React from "react";
import { Heading } from "grommet";
import styled from "styled-components";
import { theme } from "@chakra-ui/core";

const Title = styled(Heading)`
  background-position: left;
  background-size: 0% 100%;
  background-image: linear-gradient(to right, green, yellow);
  padding-bottom: thickness;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
  -webkit-text-stroke: 1px black;
  -webkit-text-fill-color: transparent;
  font-family: "Space Mono", monospace;
  /* font-style: italic; */

  &:hover {
    background-size: 100% 100%;
  }
`;

export default Title;
