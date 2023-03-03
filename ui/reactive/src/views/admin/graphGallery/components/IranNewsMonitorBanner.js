import React from "react";

// Chakra imports
import { Button, Flex, Link, Text } from "@chakra-ui/react";

// Assets
import banner from "assets/img/gallery/banner.png";

export default function IranNewsMonitorBanner() {
  // Chakra Color Mode
  return (
    <Flex
      direction='column'
      bgImage={banner}
      // bgSize='cover'
      width='100%'
      height='auto'
      py={{ base: "30px", md: "56px" }}
      px={{ base: "30px", md: "64px" }}
      borderRadius='30px'>



    </Flex>
  );
}
