import React, { Fragment } from "react";
import { Box, Heading, Grid, Link, useTheme } from "@chakra-ui/react";
import styled from "@emotion/react";

// function HeaderBox({ children }) {
//   const chakraTheme = useTheme();
//   const StyledBox = styled(Box)`
//     background-color: ${chakraTheme.colors.yellow[100]};
//     background-size: 0% 100%;
//     box-shadow: 0 5px 15px 20px ${chakraTheme.colors.yellow[100]};
//     font-family: ${chakraTheme.fonts.title};
//     color: ${chakraTheme.colors.red[800]};
//     opacity: 0.5;
//     display: block;
//   `;
//   return <StyledBox>{children}</StyledBox>;
// }

function HeaderBox() {
  const chakraTheme = useTheme();

  return (
    <Heading
      textAlign="center"
      fontSize={["2xl", "2xl", "3xl"]}
      fontFamily="heading"
      lineHeight="120%"
    >
      {`MN4BL AUDIO ARCHIVE`}
    </Heading>
  );
}

export default HeaderBox;
