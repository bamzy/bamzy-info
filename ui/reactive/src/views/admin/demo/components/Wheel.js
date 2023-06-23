import { useEffect, useState ,useRef} from "react";
import {Box,Center,Flex,Button} from '@chakra-ui/react'
import Circle from './Circle';
export default function Wheel({items}){
    const [angel,setAngel]  = useState(0);
    const [rotate,setRotate]  = useState(false);
    const ref = useRef(0);
    const step = 10;
    // console.log(ref.current);

    useEffect(()=>{
        if(!rotate) return;
        // console.log('in use effec')
        let tref = setTimeout(()=>{
            if(ref.current<0) {
                console.log(angel%360-270)
                setRotate(false);
                return;
            }
            setAngel(angel+step);

            ref.current=ref.current-1;
            // console.log('callbacked');
        },50)
        return () => clearTimeout(tref)

    },[angel,rotate])
    let slice = 360/items.length;
    let rotAngel = 0
    let circles = items.map((item,key)=>{

        let tmp = <Circle key={key} name={item} initAngel={rotAngel} />;
        rotAngel += slice;
        return tmp;
    })
    const handleRotate = (rotate)=>{
        if(rotate==true){
            setAngel(0);
        } else {
            setAngel(0);
            ref.current = 50+ Math.floor(Math.random() * 200)
        }
        setRotate(!rotate);
    }
    return (
        <>
            
            <Flex w='100%'>
                <Center  w='50%' h='100%'>
                <Button colorScheme='blue' size="lg" onClick={()=>handleRotate(rotate)}>{rotate? 'Stop':'Try'} {angel}</Button>
                </Center>
                <Center w='50%' bg=''>
                    <Box>
                        <div style={{ width: '0', height: '0', borderLeft: '20px solid #f00',borderBottom: '20px solid transparent', borderTop: '20px solid transparent'}}> </div>                   
                    </Box>
                    <Box>
                        <div style={{width: '500px', height: '500px',borderRadius: '50%',border:'5px dashed',borderColor:'black',transform:`rotate(${angel}deg)`,
                            fontSize: '50px',color: '#fff',textAlign: 'center',background: 'gray'}}>{circles}</div>
                    </Box>
                </Center>
            </Flex>    
        </>
    );
}