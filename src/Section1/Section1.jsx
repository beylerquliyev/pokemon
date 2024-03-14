import { Card } from "../Card/Card"
import Style from "../Section1/Section1.module.css"

export function Section1({firstArr,total,total2}){

    return(
<div>
    <div>
        <h1 style={total > total2 ? {color: "green"} : {color: "red"}} className={Style.result} >Lose</h1>
        <h1 className={Style.score}>
          Score: {total}
        </h1>
    </div>
    
<div className={Style.fullDiv}>
    
    {firstArr.map((i,index)=>{
        return(
            <div key={index}>
                   
           <Card id={i.id} name={i.name} type={i.type} score={i.base_experience}  />

            </div>
        )
    })}       
          

       </div>
</div>
    )
}