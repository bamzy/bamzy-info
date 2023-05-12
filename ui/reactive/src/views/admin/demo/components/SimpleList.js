import { memo } from "react";
import {
    Button,Heading,Box,Flex,Divider,Input,List,ListItem,UnorderedList,OrderedList
 } from "@chakra-ui/react";
function SimpleList ({todos,addTodo}){
    console.log("child rendered")
      const list =  todos.map((item,index)=>{
        return <ListItem key={index} bg="teal" m={1}>item</ListItem>
      })
  
      return (
        <Box w="100%" p={2}>
          <OrderedList>
            {list}
          </OrderedList>
          <Box p={4}> 
            <Button colorScheme='green' onClick={addTodo}>add</Button>
          </Box>
        </Box>
      );
  
   }

export default memo(SimpleList);