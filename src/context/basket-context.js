import React, { useState, useEffect, createContext } from "react";

export const BasketContext = createContext();

export const BasketContextProvider = ({children}) => {
    const [basketProducts, setBasketProducts] = useState([]);
    const [price, setPrice] = useState(0);
    const [priceDiscount, setPriceDiscount] = useState(0);


    useEffect(() => {
        let priceWithoutDiscount = 0;
        let priceWithDiscount = 0;

        basketProducts.forEach(prod => {
            priceWithoutDiscount +=  prod.price * prod.qty
            priceWithDiscount +=
                prod.discount && prod.discount.active && prod.qty >= 3
                    ? (prod.price * prod.qty) * (100 - prod.discount.percent ) / 100
                    : prod.price * prod.qty;
        })
        setPrice(priceWithoutDiscount);
        setPriceDiscount(priceWithDiscount);
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

    const increaseProductQty = (qty, id) => {
        const updatedProducts = basketProducts.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    qty: qty
                }
            } return product;
        })
        setBasketProducts(updatedProducts);
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
        <BasketContext.Provider
            value={[
                basketProducts,
                addProduct,
                removeProduct,
                price,
                priceDiscount,
                increaseProductQty
            ]}>
            {children}
        </BasketContext.Provider>
    );
};