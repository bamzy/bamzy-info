import { useState,useMemo } from "react";
import {
    Button,Heading,Flex
 } from "@chakra-ui/react";
import UseToggleHookExample from "./UseToggleHookExample";
import UseTimeoutHookExample from "./UseTimeoutHookExample";
import UseHistoryHookExample from "./UseHistoryHookExample";
import UseStorageHookExample from "./UseStorageHookExample";
export default function CustomHooks(){

    return (
        <>
            <Flex p={2} pt={3}>
                    <UseToggleHookExample />
            </Flex>
            <Flex p={2} pt={3}>
                    <UseTimeoutHookExample />
            </Flex>
            <Flex p={2} pt={3}>
                    <UseHistoryHookExample />
            </Flex>
            <Flex p={2} pt={3}>
                    <UseStorageHookExample />
            </Flex>
            
        </>
    );
}
