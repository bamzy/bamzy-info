// Chakra imports
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    Spinner,
    Box,
    Flex,
    Icon,
    Progress,
    Text,
    Badge,
    Tooltip,
    useColorModeValue,
    SimpleGrid,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import IconBox from "components/icons/IconBox";
import Menu from "components/menu/MainMenu";
import Constants from "utils/constants";
import React, {useState} from "react";
// Assets
import { MdQueryStats } from "react-icons/md";
import axios from "axios";
import randomColor from "randomcolor";
import {parse} from "stylis";

export default class CodeAnalysis extends React.Component{

    constructor(props){
        super(props);
        this.state = {badges:<Spinner />};


    }
    componentDidMount() {
        console.log('did mount')
         this.loadBadges();

    }
    loadBadges(){
        axios.get(Constants.codestatsAPIUrl).then((resp)=>{
            let badges = resp.data.items.map((item,index)=>{
                let color = randomColor();
                if(item['code']===0) return null;
                return (
                    <span  key={index} color='black' style={{backgroundColor:color,borderRadius:'30%',fontSize:'10px',fontWeight:"bold",padding:'5px'}} >
                        <div >{item['Language']}</div>
                        <div style={{fontSize:'10px'}}>LOC: {item['code']}</div>
                    </span>
                )
            });
            this.setState({badges:badges})
        });
    }
    render(){

          const { used, total } = this.props;
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

                <SimpleGrid columns={{ base: 5, md: 5, lg: 5, "2xl": 3 }} gap='5px' className='my-2'>
                {this.state.badges}
                </SimpleGrid>

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
