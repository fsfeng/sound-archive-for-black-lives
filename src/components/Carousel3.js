import React from "react";
import { Carousel, Grid, Box, ResponsiveContext, Text } from "grommet";

function MyCarousel() {
  const size = React.useContext(ResponsiveContext);
  if (size === "small" || size === "xsmall") {
    return (
      <Grid columns={["flex"]} gap="xxsmall" responsive="true">
        <Box background="light-2">Main</Box>

        <Box background="light-2">Main</Box>
      </Grid>
    );
  }

  if (size === "medium" || size === "large" || size === "xlarge") {
    return (
      <Carousel alignSelf="stretch" controls="arrows">
        <Grid rows={["auto"]} columns={["1/2", "1/2"]} gap="xxsmall">
          <Box background="light-2">Main</Box>

          <Box background="light-2">Main</Box>
        </Grid>

        <Grid rows={["auto"]} columns={["1/2", "1/2"]} gap="xxsmall">
          <Box background="light-2">Main2</Box>

          <Box background="light-2">Main2</Box>
        </Grid>
      </Carousel>
    );
  }
}

export default MyCarousel;
