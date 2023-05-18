import { Divider,Heading,Box,Button ,Link,Switch} from "@chakra-ui/react";
import {useState} from 'react';
import useStorage from "../hooks/useStorage";
function UseStorageHookExample(){
    const [obj,setObj,delObj] = useStorage('mykey',{name:'bamdad',age:40});
    console.log(obj);
    return (<div>
        <Divider />
        <Heading size="sm" py={3}><b><Link color="teal.500" href="https://github.com/bamzy/bamzy-info/blob/main/ui/reactive/src/views/admin/demo/hooks/useHistory.js" isExternal>useStorage:</Link> </b> its like useState but it persists</Heading>  
        
        <Heading size="md">
            obj is:  {JSON.stringify(obj)}
        </Heading>
        <div>
        <Box>
          
            <Button colorScheme='blue' m={2} onClick={()=>{setObj({...obj,age:obj.age+1})}}>increase age</Button>
            <Button colorScheme='blue' m={2} onClick={()=>{setObj({...obj,name:'bamzy'})}}>change name to bamzy</Button>
            <Button colorScheme='red' m={2} onClick={()=>{delObj()}}>clear memory</Button>
          </Box>
        </div>
        <Divider />
      </div>)
}
export default UseStorageHookExample;