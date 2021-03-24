import React, { useState, useEffect, createContext } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = ({children}) => {
    const [basketProducts, setBasketProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        const price = basketProducts.reduce((a,c) => a + c.price * c.qty, 0);
        const disc = basketProducts.reduce((a,c) => a + c.qty >= 3 ? price * 0.83 : 0, 0);
        setTotalPrice(price);
        setDiscount(disc);
    }, [basketProducts])

    const addProduct = (product) => {
        const exist = basketProducts.find(x => x.id === product.id);

        if (exist) {
            setBasketProducts(basketProducts.map(
                x => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
            ));
        } else  {
            setBasketProducts([...basketProducts, {...product, qty: 1}]);
        }
    }
    const removeProduct = (product) => {
        const exist = basketProducts.find(x => x.id === product.id);
        if (exist.qty === 1) {
            setBasketProducts(basketProducts.filter(x => x.id !== product.id));
        } else {
            setBasketProducts(basketProducts.map(
                x => x.id === product.id ? {...exist, qty: exist.qty - 1} : x
            ));
        }
    };
    return (
        <BasketContext.Provider value={[basketProducts, addProduct, removeProduct, totalPrice, discount]}>
            {children}
        </BasketContext.Provider>
    );
};