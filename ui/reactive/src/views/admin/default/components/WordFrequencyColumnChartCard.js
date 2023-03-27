import React from "react";
// Chakra imports
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import ColumnChart from "components/charts/ColumnChart";

// Custom components
import Card from "components/card/Card.js";

// Assets


export default function WordFrequencyColumnChartCard(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue("brand.1000", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Flex w='100%'>
            <Text
              me='auto'
              color='secondaryGray.1000'
              fontSize='40px'
              fontWeight='800'>
              {props.title}
            </Text>
          </Flex>
          <Flex align='end'>
            <Text
              color={textColor}
              fontSize='sm'
              fontWeight='700'
              lineHeight='100%'>
              {props.total}
            </Text>
            <Text
              ms='6px'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              Word Frequency
            </Text>

          </Flex>
        </Flex>
        <Flex align='center'>
          <Text color='green.500' fontSize='36px' fontWeight='400' fontFamily='Lalezar'>
            {props.altName}
          </Text>
        </Flex>
      </Flex>
      <Box h='240px' mt='auto'>
        <ColumnChart url={props.url} size={props.size}
          chartData={null}
          chartOptions={null}
        />
      </Box>
    </Card>
  );
}
