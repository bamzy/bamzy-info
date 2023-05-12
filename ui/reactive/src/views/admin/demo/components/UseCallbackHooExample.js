import { useState, useEffect, useRef ,useCallback} from "react";
import {Button,Heading,Flex,Box,Divider,Input,List,ListItem,UnorderedList,OrderedList} from "@chakra-ui/react";
import SimpleList from "./SimpleList";

export default function UseCallbackHookExample() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  let renderCounter = useRef(0);

  const increment = () => {
    setCount((c) => c + 1);
  };
 
  const addTodoNew = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  renderCounter.current++;
  console.log("parent render called");
  return (
    <div>
      <Divider />
      <Heading size="sm" py={3}><b>useCallback: </b> so even if you use useMemo to cache values, functions needs to be cached separately using this so they don't get called when they don't have to</Heading>  
      <Heading size="md">rendered {renderCounter.current} times</Heading>
      <div>
        <SimpleList todos={todos} addTodo={addTodoNew}  />
        <Box>
          Count: {count}
          <Button colorScheme='green' mx={2} onClick={increment}>+</Button>
        </Box>
      </div>
      <Divider />
    </div>
  );
}