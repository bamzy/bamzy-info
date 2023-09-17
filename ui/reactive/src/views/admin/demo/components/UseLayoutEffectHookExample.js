import { Heading ,Divider,Link,Button} from "@chakra-ui/react";
import { useLayoutEffect,useRef,useState } from "react";
import ButtonWithTooltip from "./ButtonWithTooltip";


export default function UseLayoutEffectHookExample(){
    return (<div >
        <Divider />
        <Heading size="sm" py={3}><b><Link color="teal.500" href="https://github.com/bamzy/bamzy-info/blob/main/ui/reactive/src/views/admin/demo/hooks/useHistory.js" isExternal>
            useLayoutEffect:</Link> </b> 
        This is called before useEffect and any repaint done by browser</Heading>
        <div style={{position:'relative'}}>
            <ButtonWithTooltip
                tooltipContent={
                    <div>
                    This tooltip does not fit above the button.
                    <br />
                    This is why it's displayed below instead!
                </div>
                }>
                Hover over me (tooltip above)
            </ButtonWithTooltip>
            <div style={{ height: 100 }} />
            <ButtonWithTooltip
                tooltipContent={
                    <div>This tooltip fits above the button</div>
                }>
                Hover over me (tooltip below)
            </ButtonWithTooltip>
        </div>  
    </div>);
}