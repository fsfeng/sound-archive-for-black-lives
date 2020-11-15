import React from "react";
import ReactDOM from "react-dom";
import { Box, Grid, ResponsiveContext, Heading, Grommet } from "grommet";
import { deepMerge } from "grommet/utils";

// // set custom breakpoints so we can see the changes
// const customBreakpoints = deepMerge(grommet, {
//   global: {
//     breakpoints: {
//       small: {
//         value: 600
//       },
//       medium: {
//         value: 900
//       },
//       large: 3000
//     }
//   }
// });

// if size if small, we only 1 column
// if size if medium, we only 2 column
// if size if large or xlarge, we 3 three columns
const columns = {
  small: ["auto"],
  medium: ["1/2", "1/2"],
  large: ["1/2", "1/2"],
  xlarge: ["1/2", "1/2"]
};

// if size if small, we have 3 rows
// if size if medium, we have 2 rows
// if size if large or xlarge, we have 1 row
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

const ResponsiveGrid = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // take into consideration if not array is sent but a simple string
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      // also if areas is a simple array not an object of arrays for different sizes
      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

export default ResponsiveGrid;
