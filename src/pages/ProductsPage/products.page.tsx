import React, { useContext } from "react";
import { ProductItem, ContentContainer } from "../../components";
import {
  BasketContext,
  BasketContextProps,
} from "../../context/basket-context";

export const ProductsPage = () => {
  const { basketProducts, addProduct } = useContext(
    BasketContext
  ) as BasketContextProps;

  return (
    <ContentContainer>
      {basketProducts.map((product) => (
        <ProductItem key={product.id} product={product} onAdd={addProduct} />
      ))}
    </ContentContainer>
  );
};
