
import { Section1 } from "./Section1/Section1";
import { Section2 } from "./Section2/Section2";
import Stye from "../src/app.module.css"
import { useState } from "react";

function App() {
const[btn,setBtn]=useState(false)
const[firstArr,SetfirstArr]=useState([])
const[secondArr,SetsecondArr]=useState([])
const[score1,Setscore1]=useState(null)
const[score2,Setscore2]=useState(null)
function SortRandomArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
function random(){
let pokemonArr=[ {id:"004", name: 'Charmander', type: 'fire', base_experience: 62}, {id: "007", name: 'Squirtle', type: 'water', base_experience: 63}, {id: "011", name: 'Metapod', type: 'bug', base_experience: 72}, {id: "012", name: 'Butterfree', type: 'flying', base_experience: 178}, {id: "025", name: 'Pikachu', type: 'electric', base_experience: 112}, {id: "039", name: 'Jigglypuff', type: 'normal', base_experience: 95}, {id: "094", name: 'Gengar', type: 'poison', base_experience: 225}, {id: 133, name: 'Eevee', type: 'normal', base_experience: 65} ]
 
  let newArr=SortRandomArray(pokemonArr)
  let firstArr1 = pokemonArr.slice(0, 4);
  let reduc1 = firstArr1.reduce((acc, pokemon) => {
      return acc + pokemon.base_experience;
  }, 0);
  console.log(reduc1);
  let seconArr2=newArr.slice(4,8)
  let reduc2=seconArr2.reduce((acc,pokemon)=>{
    return acc+pokemon.base_experience
  },0)
  

  SetfirstArr(firstArr1)
  SetsecondArr(seconArr2)
  Setscore1(reduc1)
  Setscore2(reduc2)


  

}
function PlayGame(){
  if(firstArr.length===0){
    setBtn((prev)=>true)
    random()
    
  }
  else{
    random()
    
    
  

  }
}

  return (
    <div className={Stye.fullDiv} >
 <div className={Stye.BtnDiv}>
 <button onClick={PlayGame} className={Stye.btn}>
        Play Game
      </button>
 </div>
     {btn&& <Section1 firstArr={firstArr} total={score1} total2={score2}  />}
     {btn&& <Section2 secondArr={secondArr} total={score2} total2={score1} />}
  
    </div>
  );
}

export default App;
