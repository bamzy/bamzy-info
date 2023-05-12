import { useState, useEffect, useRef } from "react";
import {
    Button,Heading,Flex,Divider,Input
 } from "@chakra-ui/react";

export default function UseRefHookExample() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
        <div>
            <Divider />
                
            <Heading size="sm" py={3}><b>useRef: </b> Its similar to an static variable that exists only once per the function and not its instances  
            </Heading>  
            <div>
                <Input
                    placeholder="Start Typing Here"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Heading size="md">Render Count: {count.current}</Heading>
            </div>
            <Divider />
      </div>
    </>
  );
}