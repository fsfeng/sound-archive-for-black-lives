import React from "react";
import { Carousel } from "grommet";
import { Flex, Box } from "rebass";

const MyCarousel = () => {
  return (
    <Carousel alignSelf="stretch" controls="arrows">
      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} p={30}>
          Reflex
        </Box>
        <Box width={[1, 1 / 2]} p={30}>
          Box
        </Box>
      </Flex>

      <Flex flexWrap="wrap">
        <Box width={[1, 1 / 2]} p={30}>
          Reflex2
        </Box>
        <Box width={[1, 1 / 2]} p={30}>
          Box2
        </Box>
      </Flex>
    </Carousel>
  );
};

export default MyCarousel;
