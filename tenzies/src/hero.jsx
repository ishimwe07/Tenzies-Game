import React from "react";
import Confetti from "react-confetti";
import DieComponent from "./dieComponent"
export default function Hero(){
    
    

    const allDicesNumbers = () =>{
        const numbersHolder = [];
        for(let i=0; i<10;i++){
            numbersHolder.push({value : Math.floor(Math.random()*6)+ 1 , isHeld:false, id:i})
        }
        return numbersHolder;
    }
    const [dice, setDices] = React.useState(allDicesNumbers())

    const holdDice = (id)=> {
        setDices((prevDice)=> prevDice.map((element)=> element.id === id? {...element,isHeld: !element["isHeld"] } : element))
    }
  

    function rollHandler(){
        setDices((prevDice)=> prevDice.map(el => el.isHeld?el: {...el, value:Math.floor(Math.random()*6)+ 1}))
    }    
    const allDicesComponents = dice.map((el, index)=> 
                                    <DieComponent key={index} value={el.value} isHeld={el.isHeld} onClick={()=> holdDice(index)}/>)
   
    
    const [tenzies, setTenzies] = React.useState(false);

    React.useEffect(()=>{
        if(dice.every(el => el.isHeld)
                         && dice.every(el=> el.value === dice[0].value)){
                         setTenzies(true);
                        } else{
                            setTenzies(false);
                        }
        
    },[dice])
    return(
        <div className="flex justify-center m-20">
            {tenzies &&  <Confetti/>}
            <div className="bg-slate-100 w-3/4 h-3/4 rounded-md grid justify-items-center">
                <h1 className="text-4xl text-center font-black py-10">Tenzies</h1>
                <p className="text-center w-2/3 mx-16 text-2xl">
                       {tenzies? "You have won the Game" : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
                </p>
                <div className="mx-3 my-10 grid grid-cols-5 gap-2">
                       {allDicesComponents}
                </div>
                <button 
                        className="bg-blue-600 hover:bg-blue-500 active:bg-blue-950 px-6 py-2 rounded-xl mb-11"
                        onClick={tenzies? ()=>{
                            setDices(allDicesNumbers());
                            setTenzies(false);
                        } : rollHandler}
                        >{tenzies? "New Game" : "Roll"}</button>
            </div>
        </div>
    )
}