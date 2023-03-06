// Chakra imports
import {Box, Flex, Icon, Progress, Text, Badge, useColorModeValue,} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import IconBox from "components/icons/IconBox";
import Menu from "components/menu/MainMenu";
import Constants from "utils/constants";
import React, {useState} from "react";
// Assets
import { MdQueryStats } from "react-icons/md";
import axios from "axios";

export default class CodeAnalysis extends React.Component{

    constructor(props){
        super(props);
        this.state = {badges:[]};


    }
    componentDidMount() {
        console.log('did mount')
         this.loadBadges();

    }
    loadBadges(){
        console.log("url:"+this.props.url)
        axios.get(Constants.codestatsAPIUrl).then((resp)=>{
            debugger;
            let badges = resp.data.map((item)=>{
                return (<Badge>{item['Language']}</Badge>);
            });
            // this.setState({badges:badges})
        });
    }
    // textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    // brandColor = useColorModeValue("brand.500", "white");
    render(){
         const   textColorSecondary = "gray.400";

          const { used, total } = this.props;
          // Chakra Color Mode
          // const box = useColorModeValue(, "whiteAlpha.100");
          return (
            <Card mb={{ base: "0px", lg: "20px" }} align='center'>
              <Flex w='100%'>
                <Menu ms='auto' />
              </Flex>
              <IconBox
                mx='auto'
                h='100px'
                w='100px'
                icon={
                  <Icon as={MdQueryStats} color={this.brandColor} h='46px' w='46px' />
                }
                bg={"secondaryGray.300"}
              />
              <Text color={"secondaryGray.900"} fontWeight='bold' fontSize='2xl' mt='10px'>
                Project Analysis
              </Text>
                <Flex>
                   analyzing...
                </Flex>
              <Text
                color={"secondaryGray.600"}
                fontSize='md'
                maxW={{ base: "100%", xl: "80%", "3xl": "60%" }}
                mx='auto'>
                total amount of data stored in the system
              </Text>
              <Box w='100%' mt='auto'>
                <Flex w='100%' justify='space-between' mb='10px'>
                  <Text color={"secondaryGray.900"} fontSize='sm' maxW='40%'>
                    {used} MB
                  </Text>
                  <Text color={"secondaryGray.900"} fontSize='sm' maxW='40%'>
                    {total} MB
                  </Text>
                </Flex>
                <Progress
                  align='start'
                  colorScheme='brandScheme'
                  value={(used / total) * 100}
                  w='100%'
                />
              </Box>
            </Card>
          );
    }
}
