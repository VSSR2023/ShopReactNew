import React from "react";
import styles from "./Categories.module.scss"

export default function Categories(props){
    
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
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}> {el.name}</div>
            ))}
        </div>
    );
}