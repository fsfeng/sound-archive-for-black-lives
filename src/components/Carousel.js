import React from "react";
import { Grommet, Box, Grid, Carousel } from "grommet";

const MyCarousel = () => {
  return (
    <Carousel alignSelf="stretch" controls="arrows">
      <Grid
        rows={["flex"]}
        columns={["flex", "flex"]}
        areas={[["main1", "main2"]]}
        gap="xxsmall"
        responsive="true"
      >
        <Box background="light-2" gridArea="main1">
          Main
        </Box>

        <Box background="light-2" gridArea="main2">
          Main
        </Box>
      </Grid>

      <Grid
        rows={["flex"]}
        columns={["1/2", "1/2"]}
        areas={[["main1", "main2"]]}
        gap="xxsmall"
      >
        <Box background="light-2" gridArea="main1">
          Main2
        </Box>

        <Box background="light-2" gridArea="main2">
          Main2
        </Box>
      </Grid>
    </Carousel>
  );
};

export default MyCarousel;
