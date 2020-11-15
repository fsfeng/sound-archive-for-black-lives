import React, { Fragment } from "react";
import { Box, Grid, Link, useTheme } from "@chakra-ui/core";
import styled from "@emotion/styled";

function NavBar() {
  const chakraTheme = useTheme();
  const StyledLink = styled(Link)`
    color: ${chakraTheme.colors.orange[500]};
    /* font-style: italic; */
    /* &:hover {
      color: ${chakraTheme.colors.gray[500]};
      text-decoration: none !important;
      box-shadow: 0px 1px 5px 5px ${chakraTheme.colors.yellow[100]};
    } */
  `;
  return (
    <Box
      width="full"
      display="flex"
      alignItems="left"
      justifyContent="left"
      fontFamily="nav"
      pb={5}
    >
      <Grid templateColumns="repeat(3, 1fr)">
        <StyledLink href="#"> > ABOUT </StyledLink>
        <StyledLink href="#">
          <b> > ARCHIVE </b>
        </StyledLink>
        <StyledLink href="#">> SUBMIT A FILE </StyledLink>
      </Grid>
    </Box>
  );
}

export default NavBar;
