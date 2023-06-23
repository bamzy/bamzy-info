import './Circle.css' ;
export default function Circle({name,initAngel}) {
    return (
        <div style={{position:'absolute',padding:'10px',width: '500px', height: '500px',borderRadius: '50%',transform:`rotate(${initAngel}deg)`,
        fontSize: '30px',color: '#fff',textAlign: 'center'}}>
             <div className="hold slice"><div className="pie">{name}</div></div>
            
        </div>
    );

}