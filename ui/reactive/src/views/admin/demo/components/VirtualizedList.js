import {useState} from 'react';
import {
     Heading,
  } from "@chakra-ui/react";
export default function VirtualizedList({ items, itemHeight, containerHeight }) {
  const [scrollTop, setScrollTop] = useState(0);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + Math.ceil(containerHeight / itemHeight),items.length);
  const visibleItems = items.slice(startIndex, endIndex);
  
  const handleScroll = (event) => {
    setScrollTop(event.target.scrollTop);
  };
  return (
    <div style={{ height: `${containerHeight}px`, overflowY: "scroll",backgroundColor:"#e69f1d", marginLeft: "50px",marginRight:"50px" }} onScroll={handleScroll}>
      <div style={{ height: `${items.length * itemHeight}px` }}>
        <div
          style={{
            position: "relative",
            height: `${visibleItems.length * itemHeight}px`,
            top: `${startIndex * itemHeight}px`,
          }}>
          {visibleItems.map((item) => (
            <div key={item} style={{ height: `${itemHeight}px`,border: "2px solid black", padding:"5px" }}>
                <Heading as='h5' size='sm' w='100%'>{item}</Heading>
              
            </div>
          ))}
        </div>        
      </div>
    </div>
  );
}