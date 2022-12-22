import React, { useContext } from "react";
import {
  BasketContext,
  BasketContextProps,
} from "../../context/basket-context";
import { BasketProductItem } from "../../components";

export const BasketPage = () => {
  const {
    basketProducts,
    addProduct,
    removeProduct,
    price,
    priceDiscount,
    increaseProductQty,
  } = useContext(BasketContext) as BasketContextProps;

  return (
    <div style={{ width: "100%" }}>
      {basketProducts.length === 0 && "Basket is empty"}
      {basketProducts.map((product) => (
        <div key={product.id} style={{ margin: "1rem 0" }}>
          <BasketProductItem
            product={product}
            addProduct={addProduct}
            removeProduct={removeProduct}
            onChangeInput={increaseProductQty}
          />
        </div>
      ))}
      <span>
        <div>Price: {price} $</div>
        {priceDiscount !== price && (
          <div>Price with discount:{priceDiscount} $</div>
        )}
      </span>
    </div>
  );
};
