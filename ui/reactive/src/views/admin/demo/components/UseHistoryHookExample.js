import { Divider,Heading,Box,Button ,Link,Switch} from "@chakra-ui/react";
import {useState} from 'react';
import useHistory from "../hooks/useHistory";
function UseHistoryHookExample(){
    const [counter,setCounter] = useState(10);
    const [val,set,getHistory,undo] = useHistory();
    return (<div>
        <Divider />
        <Heading size="sm" py={3}><b><Link color="teal.500" href="https://github.com/bamzy/bamzy-info/blob/main/ui/reactive/src/views/admin/demo/hooks/useHistory.js" isExternal>useHistory:</Link> </b> This is like useState except it stores a history of recent changes which is good for undo and a bunch more things</Heading>  
        <Heading size="lg">
            current val is: {val}
        </Heading>
        <Heading size="md">
            history is: [{getHistory().toString()}]
        </Heading>
        <div>
        <Box>
          
            <Button colorScheme='blue' m={2} onClick={()=>{set(4)}}>add 4</Button>
            <Button colorScheme='blue' m={2} onClick={()=>{set(2)}}>add 2</Button>
            <Button colorScheme='blue' m={2} onClick={()=>{set(Math.ceil(Math.random()*100))}}>add random</Button>
            <Button colorScheme='red' m={2} onClick={()=>{undo()}}> undo</Button>
          </Box>
        </div>
        <Divider />
      </div>)
}
export default UseHistoryHookExample;