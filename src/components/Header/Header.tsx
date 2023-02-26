import React from "react";

import { Box, Stack, Container } from "@chakra-ui/react";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <Stack>
      <Box backgroundColor="primary.500" boxShadow="sm" paddingTop={2} paddingBottom={3}>
      <Container maxWidth="container.xl">
        {<Navbar />}    
      </ Container>
      </Box>
    </Stack>
  );
};
