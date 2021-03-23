import React, { useState, createContext } from "react";

export const CounterContext = createContext();

export const CounterContextProvider = props => {
    const [basketItems, setBasketItems] = useState([]);

    const onAdd = (product) => {
        const exist = basketItems.find((x) => x.id === product.id);
        if (exist){
            setBasketItems(basketItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x));
        }else  {
            setBasketItems([...basketItems, {...product, qty: 1}]);
        }
    }
    const onRemove = (product) =>{
        const exist = basketItems.find((x)=> x.id === product.id);
        if (exist.qty === 1){
            setBasketItems(basketItems.filter((x) => x.id !== product.id));
        }else{
            setBasketItems(basketItems.map((x) => x.id === product.id ? {...exist, qty: exist.qty - 1} : x));
        }
    };
    return (
        <CounterContext.Provider value={[basketItems, setBasketItems, onAdd, onRemove]}>
            {props.children}
        </CounterContext.Provider>
    );
};