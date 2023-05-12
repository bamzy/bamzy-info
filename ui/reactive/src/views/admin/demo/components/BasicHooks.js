import { useState,useMemo } from "react";
import {
    Button,Heading,Flex
 } from "@chakra-ui/react";
import UseMemoHookExample from "./UseMemoHookExample";
export default function(){

    return (
        <Flex>
                <UseMemoHookExample />
        </Flex>
    );
}
