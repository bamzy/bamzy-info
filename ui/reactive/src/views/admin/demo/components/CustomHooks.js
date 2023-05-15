import { useState,useMemo } from "react";
import {
    Button,Heading,Flex
 } from "@chakra-ui/react";
import UseToggleHookExample from "./UseToggleHookExample";
export default function CustomHooks(){

    return (
        <>
            <Flex p={2} pt={3}>
                    <UseToggleHookExample />
            </Flex>
            
        </>
    );
}
