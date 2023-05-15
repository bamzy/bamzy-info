import { Divider,Heading,Box,Button ,Link,Switch} from "@chakra-ui/react";
import {useState} from 'react';
import useTimeout from "../hooks/useTimeout";
function UseTimeoutHookExample(){
    const [counter,setCounter] = useState(10);
    const [reset,clear] = useTimeout(()=>{setCounter(counter-1);console.log("im callback w "+counter)},5000);
    return (<div>
        <Divider />
        <Heading size="sm" py={3}><b><Link color="teal.500" href="https://github.com/bamzy/bamzy-info/blob/main/ui/reactive/src/views/admin/demo/hooks/useTimeout.js" isExternal>useTimeout:</Link> </b> This one is  very interesting, if you click reset, a 5 sec timer kicks in and decrease your counter by 1, you can clear the counter before it expires using the clear button and increase just increases the counter</Heading>  
        <Heading size="md">
            counter is: {counter}
        </Heading>
        <div>
        <Box>
          
            <Button colorScheme='blue' m={2} onClick={reset}>reset</Button>
            <Button colorScheme='red' m={2} onClick={clear}>clear</Button>
            <Button colorScheme='green' m={2} onClick={()=>{setCounter(counter+1)}}> increment</Button>
          </Box>
        </div>
        <Divider />
      </div>)
}
export default UseTimeoutHookExample;