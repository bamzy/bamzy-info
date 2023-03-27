import React from "react";

// Chakra imports
import { Flex,Image } from "@chakra-ui/react";

// Assets
import IranNewsMonitor from "assets/img/gallery/banner.png";

export default function IranNewsMonitorBanner() {
  // Chakra Color Mode
  return (
    <Flex
      direction='column'

      // bgSize='cover'
      width='100%'
      height='auto'
      py={{ base: "5px", md: "5px" }}
      px={{ base: "5px", md: "5px" }}
      borderRadius='30px'>

      <Image src={IranNewsMonitor} alt='Iran News Monitor' />

    </Flex>
  );
}
