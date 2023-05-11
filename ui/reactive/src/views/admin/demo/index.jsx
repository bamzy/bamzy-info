

import {
  Box, Heading,Flex,CardHeader, CardBody, CardFooter
} from "@chakra-ui/react";
import VariableTicTac from "./components/VariableTicTac";
import React from "react";
import Card from "components/card/Card";
import SearchList from "./components/SearchList";
export default function Demo() {
  
  
  return (
    <>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <Card my='10px'>
          <Flex>
            <Heading as='h4' size='lg' w='100%'>A tictactoe</Heading>
            <VariableTicTac size={5} />
          </Flex>
        </Card>
      </Box>
     
      <Card>        
        <Heading as='h4' size='lg' w='100%'>Below is a fully virtualized list of 370K words, showing 10 at a time</Heading>
        <SearchList />        
      </Card>
      
    </>
  );
}
