import { useState, useEffect, useRef ,useCallback,createContext, useContext} from "react";
import {Button,Heading,Flex,Box,Divider,Input,List,ListItem,UnorderedList,OrderedList} from "@chakra-ui/react";
import SimpleList from "./SimpleList";
const MyFirstContext = createContext();

function Component1() {
  const [user, setUser] = useState("Jesse Hall");

  return (
    <MyFirstContext.Provider value={{user,setUser}}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </MyFirstContext.Provider>
  );
}

function Component2() {
  return (
    <>
      <h1>Component 2</h1>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h1>Component 3</h1>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h1>Component 4</h1>
      <Component5 />
    </>
  );
}

function Component5() {
  const {user,setUser} = useContext(MyFirstContext);

  return (
    <>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
      <Button onClick = {()=>setUser("Bamdad")}>Change Msg</Button> 
    </>
  );
}
export default function UseContextHookExample() {
  return (
    <div>
      <Divider />
      <Heading size="sm" py={3}><b>useContext: </b> instead of prop drilling, you can use context to pass data the chain of component tree </Heading>  
      <Box size="md"><Component1/></Box>
      
      <Divider />
    </div>
  );
}