// Chakra imports
import {Stat,StatLabel,StatNumber,StatHelpText,Spinner,Box, Flex, Icon, Progress, Text, Badge,Tooltip, useColorModeValue,} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import IconBox from "components/icons/IconBox";
import Menu from "components/menu/MainMenu";
import Constants from "utils/constants";
import React, {useState} from "react";
// Assets
import { MdQueryStats } from "react-icons/md";
import axios from "axios";
import {parse} from "stylis";

export default class CodeAnalysis extends React.Component{

    constructor(props){
        super(props);
        this.state = {badges:<Spinner />};

        this.colors = [ "gray" , "red" , "orange" , "yellow" , "green" , "teal" , "blue" , "cyan" , "purple" , "pink" , "#1dce52" , "#ce1da9" , "messenger" , "whatsapp" , "twitter" , "telegram"]

    }
    componentDidMount() {
        console.log('did mount')
         this.loadBadges();

    }
    loadBadges(){
        axios.get(Constants.codestatsAPIUrl).then((resp)=>{
            // debugger;
            let badges = resp.data.items.map((item,index)=>{
                // return (<Tooltip label={item['Language']}>line of code: {item['code']}</Tooltip>);
                // let index = parseInt(Math.random()*this.colors.length);
                let color = this.colors[index];
                // if
                console.log(index);
                if(item['code']==0) return null;
                return (
                    <Stat bg={color} color='black' style={{borderRadius:'25%',fontSize:'7px',padding:'5px'}} >
                        <StatLabel >{item['Language']}</StatLabel>
                        <StatNumber style={{fontSize:'10px'}}>{item['code']}</StatNumber>
                    </Stat>
                )
            });
            // debugger;
            this.setState({badges:badges})
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
                  <Icon as={MdQueryStats} color={"brand.500"} h='46px' w='46px' />
                }
                bg={"secondaryGray.300"}
              />
              <Text color={"secondaryGray.900"} fontWeight='bold' fontSize='2xl' mt='10px'>
                    Repo Breakdown
              </Text>
                <Box class="p-3">
                    <Flex>
                    {this.state.badges}
                    </Flex>
                </Box>
              <Text
                color={"secondaryGray.600"}
                fontSize='md'
                maxW={{ base: "100%", xl: "80%", "3xl": "60%" }}
                mx='auto' className='mt-2'>
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
