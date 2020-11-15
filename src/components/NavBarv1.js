import React, { Fragment } from "react";
import { Box, Grid, Link, useTheme } from "@chakra-ui/core";
import styled from "@emotion/styled";

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

function NavBar() {
  const chakraTheme = useTheme();
  const StyledLink = styled(Link)`
    color: ${chakraTheme.colors.gray[700]};
    font-style: italic;
    &:hover {
      color: ${chakraTheme.colors.gray[500]};
      text-decoration: none !important;
      box-shadow: 0px 1px 5px 5px ${chakraTheme.colors.yellow[100]};
    }
  `;
  return (
    <Box
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontFamily="nav"
      pb={5}
    >
      <Grid templateColumns="repeat(2, 1fr)" gap={5}>
        <StyledLink href="#"> > about </StyledLink>
        {/* <StyledLink href="#">about</StyledLink> */}
        <StyledLink href="#" fontStyle="bold">
          > submit
        </StyledLink>
      </Grid>
    </Box>
  );
}

export default NavBar;
