import React from "react";
import ReactDOM from "react-dom";
import { Box, Grid, ResponsiveContext, Heading, Grommet } from "grommet";
import ResponsiveGrid from "./components/ResponsiveGrid";

// columns, rows and areas are for Grid with a known number of contents / boxes.

// if size if small, we only 1 column
// if size if medium, we only 2 column
// if size if large or xlarge, we 3 three columns
const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"]
};

// if size if small, we have 3 rows
// if size if medium, we have 2 rows
// if size if large or xlarge, we have 1 row
// const rows = {
//   small: ["xsmall", "xsmall", "xsmall"],
//   medium: ["xsmall", "xsmall"],
//   large: ["xsmall"],
//   xlarge: ["xsmall"]
// };

const rows = {
  small: ["fill", "fill", "fill"],
  medium: ["fill", "fill"],
  large: ["fill"],
  xlarge: ["fill"]
};

// set the different areas you need for every size
const areas = {
  small: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [0, 2], end: [0, 2] }
  ],
  medium: [
    { name: "header", start: [0, 0], end: [1, 0] },
    { name: "test", start: [0, 1], end: [0, 1] },
    { name: "test1", start: [1, 1], end: [1, 1] }
  ],
  large: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [1, 0], end: [1, 0] },
    { name: "test1", start: [2, 0], end: [2, 0] }
  ],
  xlarge: [
    { name: "header", start: [0, 0], end: [0, 0] },
    { name: "test", start: [1, 0], end: [1, 0] },
    { name: "test1", start: [2, 0], end: [2, 0] }
  ]
};

// let's say this is returned from an API
const animals = [
  "some text a lot of text a lot of text text text",
  "cat",
  "pig",
  "cow",
  "giraffe",
  "elephant",
  "dinosaur",
  "chicken",
  "duck",
  "tiger",
  "lion",
  "cheetah"
];

const listAnimalsBoxes = animals.map(animalName => (
  // <Box
  //   elevation="large"
  //   key={animalName}
  //   background="light-3"
  //   flex={false}
  //   justify="center"
  //   align="center"
  // >

  <Box align="center">
    <Heading level={2}>{animalName}</Heading>
    {/* <Heading level={2}>some text a lot of text a lot of text text text</Heading> */}
  </Box>
));

// this is an example for a responsive Grid.
// with this example, you can either have a fixed Grid (with a known number content)
// or generic one (with unkown number of contents like a list that renders)
function MyResponsiveGrid() {
  return (
    // <Grommet theme={customBreakpoints}>
    <Box>
      <Heading level={2}>Resize me.</Heading>
      <ResponsiveGrid
        rows={rows}
        columns={columns}
        gap="small"
        areas={areas}
        margin="medium"
      >
        <Box
          gridArea="header"
          background="neutral-2"
          justify="center"
          align="center"
        >
          <strong>Box 1</strong>
        </Box>
        <Box
          gridArea="test"
          background="neutral-3"
          justify="center"
          align="center"
        >
          <strong>Box 2</strong>
        </Box>
        <Box
          gridArea="test1"
          background="neutral-4"
          justify="center"
          align="center"
        >
          <strong>Box 3</strong>
        </Box>
      </ResponsiveGrid>
      <ResponsiveGrid
        gap="small"
        margin="medium"
        columns="medium"
        // rows="xsmall"
      >
        {listAnimalsBoxes}
      </ResponsiveGrid>
    </Box>
    // </Grommet>
  );
}

export default MyResponsiveGrid;
