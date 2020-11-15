import React from "react";
import { Box, Flex } from "@chakra-ui/core";

function DescriptionBox({ children }) {
  // const chakraTheme = useTheme();
  return (
    <Box
      p={5}
      // bg="orange.50"
      // borderWidth="1px"
      color="orange.500"
      width={["full", "xl"]}
      fontFamily="text"
      lineHeight="200%"
      fontSize={["sm", "md", "lg"]}
    >
      {children}
    </Box>
    // </Box>
  );
}

export default DescriptionBox;
