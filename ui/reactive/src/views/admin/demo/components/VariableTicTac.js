import {useState} from "react";

export default function VariableTicTac({size}){
    let len = size*size;
    let [moves,setMoves] = useState(Array(len).fill(null))
    let [turn,setTurn] = useState(0);
    let [result,setResult] = useState('player x should start...');
    let [won,setWon] = useState(false);

    function clickHandler(index){
        if(moves[index]!=null) return;
        if(won) return;
        let thisVal = 'x';
        if(turn%2===1) thisVal = 'o'
        let newMoves = [...moves.slice(0,index),thisVal,...moves.slice(index+1)];
        if(isWinner(newMoves,index,size)) {
            setResult('Player '+ thisVal + " is the winner")
            setWon(true);
        } else setResult("game continues...")
        setMoves(newMoves);
        setTurn(turn+1);

    }
    function isWinner(moves,index,size){
        let y = index/size;
        let x = index%size;
        const thisVal = moves[index];
        let rowBingo = true,columnBingo=true;
        for(let i=0;i<size;i++){
            if(moves[y*size+i] !== thisVal ) rowBingo = false;
        }
        for(let i=0;i<size;i++){
            if(moves[i*size+x] !== thisVal ) columnBingo = false;
        }
        if(rowBingo||columnBingo) return true;
        return false;
    }
    function refresh(){
        setMoves(Array(len).fill(null))
        setWon(false);
        setTurn(0);
    }
    let blocks = moves.map((move,index) => <Block val={move} index={index} key={index} clickHandler={()=>clickHandler(index)} />);
    return (
        <div>
            <div>{result} {won && <RefreshButton handler={()=>refresh()}/>}</div>
            <div style={{display:"grid",gridTemplateColumns: "repeat("+size+",1fr)",gridTemplateRows:"repeat("+size+",1fr)",width:size*40+"px"}}>
                {blocks}
            </div>
        </div>
    )
}
function Block({val,index,clickHandler}){
    let dispVal = '';
    if(val==='x') dispVal = '❌'; else if(val==='o') dispVal = '⭕'; else dispVal = '-';
    return (
        <div style={{background:'white',border:"1px solid black",width:'40px',height:'40px',display:"flex",alignItems:"center",justifyContent:"center"}} onClick={clickHandler}>{dispVal}</div>
    )
}
function RefreshButton({handler}){
    return <button  onClick={handler}>🔃</button>
}