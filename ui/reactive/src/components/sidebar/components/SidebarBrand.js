import React from "react";
import BamzyLogo from '../../../assets/img/logo.jpg';
// Chakra imports
import { Flex} from "@chakra-ui/react";

// Custom components
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode

  return (
    <Flex align='center' direction='column'>
        <a href='/' target='' className='p-1 m-0' style={{width:'90%'}}>
            <img src={BamzyLogo} alt="Logo" onClick="" style={{width:'100%',borderRadius:'10px',height:'70%'}} className='pb-1' />
        </a>
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
