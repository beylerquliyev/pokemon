import {Card} from "../Card/Card"
import Style from "../Section1/Section1.module.css"


export function Section2({secondArr,total,total2}){
    return(
        <div>
        <div>
            
            <h1 className={Style.vs}>VS</h1>
            <h1 style={total > total2 ? {color: "green"} : {color: "red"}} className={Style.result} >Winner</h1>
            <h1 className={Style.score}>
              Score: {total}
            </h1>
        </div>
        
    <div className={Style.fullDiv}>
               
    {secondArr.map((i,index)=>{
        return(
            <div key={index}>
                   
           <Card id={i.id} name={i.name} type={i.type} score={i.base_experience} total={total} total2={total2} />

            </div>
        )
    })}    
    
           </div>
    </div>
        )
    
}