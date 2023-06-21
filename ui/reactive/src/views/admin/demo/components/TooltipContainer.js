export default function TooltipContainer({ children, x, y, mycontentRef }) {
    return (
      <div
        style={{backgroundColor:'gray',color:'white',padding:'5px',borderRadius:'10px',
          position: 'absolute',
          pointerEvents: 'none',
          left: {x},
          top: {y},
          zIndex:999,
        
        }}
      >
        <div ref={mycontentRef} className="tooltip">
          {children} 
        </div>
      </div>
    );
  }
  