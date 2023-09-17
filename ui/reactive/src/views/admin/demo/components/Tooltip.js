import { useRef,useLayoutEffect,useState } from "react";
import { createPortal } from 'react-dom';
import TooltipContainer from './TooltipContainer';

export default function Tooltip({ children, targetRect }){
    const divreference = useRef(null);
    // debugger;
    const [tooltipHeight, setTooltipHeight] = useState(0);

    useLayoutEffect(() => {
        const { height } = divreference.current.getBoundingClientRect();
        setTooltipHeight(height);
    }, []);
    
    let tooltipX = 0;
    let tooltipY = 0;
    if (targetRect !== null) {
        tooltipX = targetRect.left;
        tooltipY = targetRect.top - tooltipHeight+3;
        if (tooltipY < 0) tooltipY = targetRect.bottom;    
    }

    return (
        <TooltipContainer className='container' x={tooltipX} y={tooltipY} mycontentRef={divreference}>
          {children}
        </TooltipContainer>
      );
}