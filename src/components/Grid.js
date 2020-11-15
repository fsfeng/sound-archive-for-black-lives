import React from "react";
import { Grommet, Box, Grid, Text } from "grommet";
// import { styled, css } from "styled-components";
import styled from "styled-components/macro";

const MyGrid = () => {
  return (
    <Grid
      rows={["xsmall", "fill", "xsmall"]}
      columns={["1/2", "1/2"]}
      areas={[["header", "header"], ["main1", "main2"], ["footer", "footer"]]}
      gap="small"
    >
      <Box background="brand" gridArea="header">
        <h1 css="color: blue;">Header</h1>
      </Box>

      <Box background="light-2" gridArea="main1">
        <p
          css={css`
            font-family: "Barlow", sans-serif;
            color: red;
          `}
        >
          Main and cool stuff
        </p>
      </Box>

      <Box background="light-2" gridArea="main2">
        <Text color="custom1">Main and something else</Text>
      </Box>

      <Box background="dark-2" gridArea="footer">
        <Text css="color: green;">Footer</Text>
      </Box>
    </Grid>
  );
};

export default MyGrid;
