import { useState,useMemo } from "react";
import {
    Button,Heading,Flex
 } from "@chakra-ui/react";
import UseMemoHookExample from "./UseMemoHookExample";
import UseRefHookExample from "./UseRefHookExample";
import UseCallbackHookExample from "./UseCallbackHooExample";
import UseContextHookExample from "./UseContextHookExample";
import UseLayoutEffectHookExample from "./UseLayoutEffectHookExample";
export default function BasicHooks(){

    return (
        <>
            <Flex p={2} pt={3}>
                    <UseMemoHookExample />
            </Flex>
            <Flex p={2} pt={3}>
                    <UseRefHookExample />
            </Flex>
            <Flex p={2} pt={3}>
                    <UseCallbackHookExample />
            </Flex>
            <Flex p={2} pt={3}>
                    <UseContextHookExample />
            </Flex>
            <Flex p={2} pt={3}>
                    <UseLayoutEffectHookExample />
            </Flex>
        </>
    );
}
