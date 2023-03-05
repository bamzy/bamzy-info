// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Personal Credo
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        <i>Whatever does not spring from a man's free choice, or is only the result of instruction and guidance, does not enter into his very being, but still remains alien to his true nature; he does not perform it with truly human energies, but merely with mechanical exactness. <br/>
        </i> - Wilhelm von Humboldt
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Education'
          value='University of Alberta'
        />
        <Information
          boxShadow={cardShadow}
          title='Languages'
          value='English, Persian, Arabic'
        />
        <Information
          boxShadow={cardShadow}
          title='Department'
          value='Software Enginner'
        />
        <Information
          boxShadow={cardShadow}
          title='Work History'
          value='UofA, MA, '
        />
        <Information
          boxShadow={cardShadow}
          title='Organization'
          value='bamzy.info'
        />
        <Information
          boxShadow={cardShadow}
          title='Birthday'
          value='1989'
        />
      </SimpleGrid>
    </Card>
  );
}
