

// Chakra imports
import {
  Box, Heading,Flex,
} from "@chakra-ui/react";
import VariableTicTac from "./components/VariableTicTac";
import React from "react";
import Card from "components/card/Card";
export default function Demo() {
  // Chakra Color Mode
  // const brandColor = useColorModeValue("brand.500", "white");
  // const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <Card my='10px'>
        <Flex>
          <Heading as='h4' size='lg' w='100%'>A tictactoe</Heading>
          <VariableTicTac size={5} />
        </Flex>
      </Card>
    </Box>
  );
}
