import Style from "../Card/Card.module.css"


export function Card({id,name,type,score}){
    



    return(
    
   
           <div className={Style.FullDiv}>
            <h1 className={Style.pokeName}>{name}</h1>
            <img className={Style.img} src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`} alt="" />
            <h1 className={Style.text}>Type:{type}</h1>
            <h1 className={Style.text}>EXP:{score}</h1>
        </div>

    
     
    )
}