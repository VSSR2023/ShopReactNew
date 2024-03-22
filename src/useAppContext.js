import React,{useState,useEffect,useContext} from "react";

const AppContext= React.createContext();

export const useAppContext = () =>{
    const context = useContext(AppContext);

    if(!context){
        throw new Error("Ошибка при получении в useAppContext");
    }
    return context;
}

const AppProvider = ({children}) =>{
  const [items,setItems]=useState([
    {
      id:1,
      title:'Корм Brit для собак',
      img:'13468452.jpg',
      desc:'Brit Premium Dog Adult Medium. Полнорационный сухой корм премиум-класса с индейкой и телятиной для взрослых собак средних пород (10-25 кг), 8 кг. Ингредиенты со сниженной аллергенной нагрузкой — низкий риск пищевой аллергии и непереносимости. Продукт подходит питомцам с чувствительным пищеварением.',
      category:'Корма',
      price:'2000'
    },
    {
      id:2,
      title:'Комбинезон зимний для собак',
      img:'kombez.jpg',
      desc:'Одежда для собак - это не предмет роскоши , как думают многие, она даёт защиту от холода, помогает соблюдать гигиену и санитарию, увеличивает комфортность пребывания на природе и позволяет улучшить внешний вид любимца.',
      category:'Одежда',
      price:'5000'
    },
    {
      id:3,
      title:'Корм Whiskas для кошек',
      img:'whiskas.jpg',
      desc:'Это сбалансированный рацион для здоровой и счастливой жизни Вашей кошки. Хрустящие подушечки с нежным паштетом внутри обязательно придутся по вкусу Вашей любимице. Кроме того, Whiskas® содержит все необходимое, чтобы еда Вашей кошки была не только вкусной, но и полезной.',
      category:'Корма',
      price:'500'
    },
    {
      id:4,
      title:'Миска для кошек',
      img:'miska.jpg',
      desc:'Миска для кошек керамическая, керамическая миска для кошки подходит так же для кроликов, хорька, для собак мелких пород и других домашних животных. Данная миска очень удобна для питания питомца, изготовлена из яркой и прочной глазированной керамики с устойчивыми красками. Имеет оригинальное изображение. Предмет посуды очень удобен для питания питомца и его легко мыть.',
      category:'Посуда',
      price:'250'
    },
    {
      id:5,
      title:'Средство от блох',
      img:'otbloh.jpg',
      desc:'Оберегайте своего пушистого друга от назойливых блох, вшей и клещей с нашим уникальным зоогигиеническим средством - спреем. Этот мощный препарат не только предупреждает развитие болезней, вызванных эктопаразитами, но и создает непроницаемый щит, защищая вашего питомца до 4 недель после всего лишь одной обработки.',
      category:'Уход',
      price:'700'
    },
    {
      id:6,
      title:'Ошейник для собак',
      img:'osheynik.jpg',
      desc:'Ошейник из натуральной шорно-седельной кожи - это идеальный выбор для собак крупных пород. С его помощью вы сможете обеспечить комфорт и безопасность вашему питомцу.',
      category:'Ошейники',
      price:'450'
    },
    {
      id:7,
      title:'Поводок для собак',
      img:'povodok.jpg',
      desc:'Поводок брезентовый предназначен для малых и средних пород собак.',
      category:'Поводки',
      price:'700'
    },
    {
      id:8,
      title:'Повдок-рулетка для собак',
      img:'ruletka.jpg',
      desc:' Рулетка созданная с заботой о вашем питомце, она станет вашим надежным спутником в каждой прогулке. Приобретайте качество и уверенность для вашего любимца уже сейчас!',
      category:'Поводки',
      price:'1000'
    },
    {
      id:9,
      title:'Шампунь для собак',
      img:'shampoo.jpg',
      desc:'Шампунь мягко и эффективно очищает шерсть, кожу и лапки питомцев. Оптимальный уровень pH этого средства подходит для естественной кислотной среды кожи собак и кошек. Органические ПАВ из кокосового масла избирательно воздействуют на загрязненные участки, не нарушая целостность природного липидного покрова. Аромат манго-мята подарит вам хорошее настроение во время купания питомца. Шампунь хорошо вспенивается и легко смывается.',
      category:'Уход',
      price:'850'
    },
    {
      id:10,
      title:'Шлейка для кошек',
      img:'shleyka.jpg',
      desc:'Шлейка для кошки с поводком удобна в носке и обеспечивает вашему питомцу комфорт во время прогулок. Конструкция легко регулируется и равномерно распределяет нагрузку на теле животного, что позволяет обезопасить питомца во время повышенной активности. Изделие изготовлено из мягкого и дышащего материала, который не повреждает шерсть и не вредит коже.',
      category:'Поводки',
      price:'750'
    },
    
  ]);
      const [orders,setOrders]=useState([]);
      const [currentItems,setCurrentItems]=useState([]);
      const [showFullItem,setShowFullItem]=useState(false);
      const [fullItem,setFullItem]=useState({});

      useEffect(()=>{
        setCurrentItems(items);
      },[items]);
    
      const deleteOrder = (id) =>{
        setOrders(orders.filter((el)=> el.id!==id));
      }
    
      const addToOrder=(item)=>{
        if(!orders.some((el)=>el.id===item.id)){
          setOrders([...orders,item]);
        }//добавление товара, но одного типа
    
        //setOrders([...orders,item]); без if неограниченное количество товаров одного типа
      }
    
      const chooseCategory = (category)=>{
        if(category==="all"){
          setCurrentItems(items);
        }
        else{
          setCurrentItems(items.filter((el)=>el.category===category));
        }
      }
    
      const onShowItem = (item) =>{
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