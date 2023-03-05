// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Project from "views/admin/profile/components/Project";

export default function Projects(props) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        All projects
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Here are what I've worked on out my own free will and I'm proud of
      </Text>
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={Project1}
        ranking='1'
        link='https://goqueer.org/go-queer-goes-to-hastac/'
        title='GoQueer App'
      />
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={Project2}
        ranking='2'
        link='https://www.ualberta.ca/folio/2015/10/putting-homelessness-on-the-map.html'
        title='Putting Homeless on the Map'
      />
      <Project
        boxShadow={cardShadow}
        image={Project3}
        ranking='3'
        link='https://github.com/bamzy'
        title='Github code samples'
      />
    </Card>
  );
}
