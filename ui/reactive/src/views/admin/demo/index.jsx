

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
import FolderTree from "./components/FolderTree";
export default function Demo() {
  
  const folderData  = {
    ukey: "root",
    title:"root",
    children:[
      {ukey:1,title:"a",children:[{ukey:2,title:"a1",children:[]},{ukey:3,title:"a2",children:[{ukey:10,title:"a21"},{ukey:11,title:"a22"}]}]},
      {ukey:4,title:"b",children:[{ukey:5,title:"b1",children:[]},{ukey:6,title:"b2",children:[]},{ukey:7,title:"b3"}]},
      {ukey:8,title:"c",children:[{ukey:9,title:"c1",children:[]}]},
    ]
  }
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
        <Heading as='h4' size='lg' w='100%'>A Dynamic Unlimited Folder Structure</Heading>
        <FolderTree data={folderData} />        
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
