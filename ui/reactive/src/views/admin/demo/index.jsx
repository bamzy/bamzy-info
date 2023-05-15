

import {
  Box, Heading,Flex
} from "@chakra-ui/react";
import VariableTicTac from "./components/VariableTicTac";
import React from "react";
import Card from "components/card/Card";
import SearchList from "./components/SearchList";
import TodoList from "./components/TodoList";
import BasicHooks from "./components/BasicHooks";
import CustomHooks from "./components/CustomHooks";
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
     
      <Card my="10px">
        <Heading as='h4' size='lg' w='100%'>Below is a fully virtualized list of 370K words, showing 10 at a time</Heading>
        <SearchList />        
      </Card>
      
       <Card my="10px" height="100%">         
        <Heading as='h4' size='lg' w='100%'>A todo List</Heading>
        <TodoList />        
      </Card>

      <Card my="10px" height="100%">         
        <Heading as='h4' size='lg' py={3} w='100%'>Basic React Hook Examples:</Heading>
        <BasicHooks />        
      </Card>
      
       <Card my="10px" height="100%">         
        <Heading as='h4' size='lg' py={3} w='100%'>Useful Custom React Hook:</Heading>
        <CustomHooks />        
      </Card>
      
    </>
  );
}
