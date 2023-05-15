import { Divider,Heading,Box,Button ,Link,Switch} from "@chakra-ui/react";
import useToggle from "../hooks/useToggle";
function UseToggleHookExample(){
    const [toggle,setToggle] = useToggle(false);
    return (<div>
        <Divider />
        
        <Heading size="sm" py={3}><b><Link color="teal.500" href="https://github.com/bamzy/bamzy-info/blob/main/ui/reactive/src/views/admin/demo/hooks/useToggle.js" isExternal>useToggle:</Link> </b> Alternates between two states</Heading>  
        <Heading size="md">
            toggle val is: {toggle.toString()}
            <Switch size="lg" mx={3} isChecked={toggle} />
        </Heading>
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