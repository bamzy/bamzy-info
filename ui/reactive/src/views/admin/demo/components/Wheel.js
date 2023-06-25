import { useEffect, useState ,useRef} from "react";
import {Box,Center,Flex,Button} from '@chakra-ui/react'
import Circle from './Circle';
export default function Wheel({items}){
    const [angel,setAngel]  = useState(0);
    const [rotate,setRotate]  = useState(false);
    const ref = useRef(0);
    const step = 10;
    const initialStep = useRef(50);
    // console.log(ref.current);

    useEffect(()=>{
        if(!rotate) return;
        // console.log('in use effec')
        let tref = setTimeout(()=>{
            if(ref.current<0) {
                // console.log(angel%360-270)
                setRotate(false);
                return;
            }
            if(initialStep.current>1) initialStep.current = initialStep.current-1;
            setAngel(angel+initialStep.current);

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
            ref.current = 50+ Math.floor(Math.random() * 100)
            initialStep.current = ref.current;
        }
        setRotate(!rotate);
    }
    return (
        <div>
            <Flex w='100%'>   
                <Center  bg=''>
                    <Box>
                        <div style={{ width: '0', height: '0', borderLeft: '20px solid rgb(19 0 255)',borderBottom: '20px solid transparent', borderTop: '20px solid transparent'}}> </div>                   
                    </Box>
                    <Box>
                        <div style={{position:'relative'}}>
                            <Button colorScheme='blue' size="lg" style={{transform: 'translate(-50%, -50%)',position:'absolute',top:'50%',left:'50%',zIndex:'2',width:'50px'}} onClick={()=>handleRotate(rotate)}>{rotate? 'Stop':'Try'} </Button>
                            <div style={{width: '500px', height: '500px',borderRadius: '50%',border:'5px dashed',borderColor:'black',transform:`rotate(${angel}deg)`,
                                fontSize: '50px',color: '#fff', background: 'radial-gradient(circle, rgba(131,58,180,1) 0%, rgba(253,29,52,1) 50%, rgba(252,176,69,1) 100%)'}}>
                                    {circles}
                            </div>
                        </div>
                    </Box>
                </Center>
            </Flex>    
        </div>
    );
}