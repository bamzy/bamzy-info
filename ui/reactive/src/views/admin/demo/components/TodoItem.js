
import {
    GridItem,Heading,Checkbox,Flex,Center,IconButton,Box,Input
  } from "@chakra-ui/react";
import {EditIcon,CheckIcon,MinusIcon} from '@chakra-ui/icons'
import { useState,useRef } from "react";
export default function TodoItem({item,handleDelete,setItem,index}) {
    const headerTextElem = useRef();
    
    const [editHeader,setEditHeader] = useState(false);
    const chkbxElement = useRef();
    const handleCheck = ()=>{        
        // setCompleted(!chkbxElement.current.checked);
        item.completed=!chkbxElement.current.checked;
        setItem(item);

    }
   
    const handleEditHeader = (event)=>{
        event.preventDefault();
        if(editHeader){
            
        }
        setEditHeader(!editHeader)
    }
    
    const chkbx =  <Checkbox iconSize='3rem' isChecked={item.completed} ref={chkbxElement}>Done</Checkbox>;
    let header = <Flex>
                    <Box flex='1' bg=''>
                        <Heading as='h2' size='2xl' isTruncated px={5} ref={headerTextElem}>
                        {index} - {item.title}
                        </Heading>
                    </Box>
                    <Center w='100px' bg=''>
                        <IconButton onClick={handleEditHeader}
                            variant='outline'
                            colorScheme='green.500'
                            aria-label='Send email'
                            icon={<EditIcon />}
                            />
                    </Center>
                    <Center w='100px' bg=''>
                        <IconButton onClick={()=>handleDelete(item.id)}
                            variant='outline'
                            colorScheme='red.500'
                            aria-label='Send email'
                            icon={<MinusIcon />}
                            />
                    </Center>
             </Flex>
    if(editHeader) header = <Flex>
                                <Box flex='1' bg='tomato'>
                                    <Input variant='outline' placeholder='large size' size='lg' value={item.title} />
                                    
                                </Box>
                                <Center w='100px' bg='green.500'>
                                    <IconButton onClick={handleEditHeader}
                                        variant='outline'
                                        colorScheme='teal'
                                        aria-label='Send email'
                                        icon={<CheckIcon />}
                                        />
                                </Center>
                            </Flex>
    return (
        <GridItem colSpan={2} bg='papayawhip'  p={5} onClick={handleCheck}>
            {chkbx}
            {header}            
            <Heading as='h5' size='1xl' isTruncated px={10}>{item.body}</Heading>
        </GridItem>
    );
    

}