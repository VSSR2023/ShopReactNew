import React, {useContext} from "react";
import styles from "./Categories.module.scss"
import { useAppContext } from "../../useAppContext";

export default function Categories(){

    const {chooseCategory}=useAppContext();
    
    const categories =[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"Корма",
            name:"Корма"
        },
        {
            key:"Одежда",
            name:"Одежда"
        },
        {
            key:"Посуда",
            name:"Посуда"
        },
        {
            key:"Уход",
            name:"Уход"
        },
        {
            key:"Ошейники",
            name:"Ошейники"
        },
        {
            key:"Поводки",
            name:"Поводки"
        }
    ];

    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>chooseCategory(el.key)}> {el.name}</div>
            ))}
        </div>
    );
}