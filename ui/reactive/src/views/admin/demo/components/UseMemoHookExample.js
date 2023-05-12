import {useState,useMemo} from 'react';
import {
    Button,Heading,Flex
 } from "@chakra-ui/react";

const expensiveCalculation = (num) => {
    console.log("Calculating the expensive operation...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    return num;
  };
export default function UseMemoHookExample(){
    const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(()=>expensiveCalculation(count),[count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  return (
    <div>
        <hr />
      <p><b>useMemo: </b>This is a basic example of why we need useMemo to prevent expensive calculations when we don't have to. In this case adding items does not depend on the expensiveCalculation but each re-render is going to call it, unless we put it inside useMemo(()=>expensiveCalculation,[count]) </p>  
      <div>
        <Heading size="md" p={5}>My List </Heading>
        {todos.map((todo, index) => {
          return <Heading bg="teal" size="sm" p={2} key={index}>{todo}</Heading>;
        })}
        <Button colorScheme='green' onClick={addTodo}>Add Item</Button>
      </div>
      <div>
        
        <Heading size="md" p={5}>
            Count: {count}
            <Button colorScheme='blue' mx={2} onClick={increment}>+</Button> 
        </Heading>
        
        <Heading size="md" p={5}>Expensive Calc: {calculation} </Heading>
        
      </div>
      <hr />
    </div>
  );
}