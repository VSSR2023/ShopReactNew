import React,{useState,useEffect,useContext} from "react";
import axios from "axios";

const AppContext= React.createContext<any>(null);

export const useAppContext = () =>{
    const context = useContext(AppContext);

    if(!context){
        throw new Error("Ошибка при получении в useAppContext");
    }
    return context;
}

const AppProvider:React.FC<{children:React.ReactNode}> = ({children}) =>{
  const [items,setItems]=useState<any[]>([
 
    
  ]);
      const [orders,setOrders]=useState<any[]>([]);
      const [currentItems,setCurrentItems]=useState<any[]>([]);
      const [showFullItem,setShowFullItem]=useState<boolean>(false);
      const [fullItem,setFullItem]=useState<any>({});

      useEffect(()=>{
        axios
          .get("http://localhost:3001/items")
          .then((response)=>{
            setItems(response.data)
            chooseCategory("all");
            setCurrentItems(response.data);
          })
          .catch((error)=>{
            console.log("ошибка при загрузке данных",error)
          });
      },[]);
    
      const deleteOrder = (id:number) =>{
        setOrders(orders.filter((el)=> el.id!==id));
      }
    
      const addToOrder=(item:any)=>{
        if(!orders.some((el)=>el.id===item.id)){
          setOrders([...orders,item]);
        }//добавление товара, но одного типа
    
        //setOrders([...orders,item]); без if неограниченное количество товаров одного типа
      }
    
      const chooseCategory = (category:string)=>{
        if(category==="all"){
          setCurrentItems(items);
        }
        else{
          setCurrentItems(items.filter((el)=>el.category===category));
        }
      }
    
      const onShowItem = (item:any) =>{
        setFullItem(item);
        setShowFullItem(!showFullItem);
        console.log("ok")
      }


      const contextValue={
        items,
        setItems,
        orders,
        setOrders,
        currentItems,
        setCurrentItems,
        showFullItem,
        setShowFullItem,
        fullItem,
        setFullItem,
        deleteOrder,
        addToOrder,
        chooseCategory,
        onShowItem,
      };


      return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export default AppProvider;