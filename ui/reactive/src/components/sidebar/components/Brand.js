import React from "react";
import BamzyLogo from '../../../assets/img/logo.jpg';
// Chakra imports
import { Flex, useColorModeValue} from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode

  return (
    <Flex align='center' direction='column'>
        <img src={BamzyLogo} alt="Logo" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
