import { Divider,Heading,Box,Button } from "@chakra-ui/react";
import useToggle from "../hooks/useToggle";
function UseToggleHookExample(){
    const [toggle,setToggle] = useToggle(false);
    return (<div>
        <Divider />
        <Heading size="sm" py={3}><b>useToggle: </b> Alternates between two states</Heading>  
        <Heading size="md">toggle val is: {toggle.toString()}</Heading>
        <div>
        <Box>
          
            <Button colorScheme='blue' m={2} onClick={setToggle}>Toggle Value</Button>
            <Button colorScheme='red' m={2} onClick={()=>setToggle(false)}> off</Button>
            <Button colorScheme='green' m={2} onClick={()=>setToggle(true)}> On</Button>
          </Box>
        </div>
        <Divider />
      </div>)
}
export default UseToggleHookExample;