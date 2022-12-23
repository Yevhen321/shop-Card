import React, { useState, useEffect } from "react";
import { ProductProps } from "../mock/products";

export type BasketContextProps = {
  basketProducts: ProductProps[];
  addProduct: (product: ProductProps) => void;
  removeProduct: (product: ProductProps) => void;
  price: number;
  priceDiscount: number;
  increaseProductQty: (qty: number, id: number) => void;
};

export const BasketContext = React.createContext<BasketContextProps | null>(
  null
);

export const BasketContextProvider = ({ children }: any) => {
  const [basketProducts, setBasketProducts] = useState<ProductProps[]>([]);
  const [price, setPrice] = useState<number>(0);
  const [priceDiscount, setPriceDiscount] = useState<number>(0);

  useEffect(() => {
    let priceWithoutDiscount = 0;
    let priceWithDiscount = 0;

    if (Array.isArray(basketProducts)) {
      basketProducts.forEach((prod: ProductProps) => {
        priceWithoutDiscount += prod.price * prod.qty!;
        priceWithDiscount +=
          prod.discount && prod.discount.active && prod.qty! >= 3
            ? (prod.price * prod.qty! * (100 - prod.discount.percent)) / 100
            : prod.price * prod.qty!;
      });
    }
    setPrice(priceWithoutDiscount);
    setPriceDiscount(priceWithDiscount);
  }, [basketProducts]);

  const addProduct = (product: ProductProps) => {
    const exist = basketProducts.find(
      (prod: ProductProps) => prod.id === product.id
    );
    if (exist) {
      setBasketProducts(
        basketProducts.map((prod: ProductProps) =>
          prod.id === product.id ? { ...exist, qty: exist.qty! + 1 } : prod
        )
      );
    } else {
      setBasketProducts([...basketProducts, { ...product, qty: 1 }]);
    }
  };

  const increaseProductQty = (qty: number, id: number) => {
    const updatedProducts = basketProducts.map((product: ProductProps) => {
      if (product.id === id) {
        return {
          ...product,
          qty: qty,
        };
      }
      return product;
    });
    setBasketProducts(updatedProducts);
  };

  const removeProduct = (product: ProductProps) => {
    const exist = basketProducts.find((x: ProductProps) => x.id === product.id);
    if (!exist) return;
    if (exist.qty === 1) {
      setBasketProducts(basketProducts.filter((x) => x.id !== product.id));
    } else {
      setBasketProducts(
        basketProducts.map((prod) =>
          prod.id === product.id ? { ...exist, qty: exist.qty! - 1 } : prod
        )
      );
    }
  };

  return (
    <BasketContext.Provider
      value={{
        basketProducts,
        addProduct,
        removeProduct,
        price,
        priceDiscount,
        increaseProductQty,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
