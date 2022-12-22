import React, { useContext } from "react";
import { ProductItem } from "../../components";
import {
  BasketContext,
  BasketContextProps,
} from "../../context/basket-context";
import Product from "../../mock/products";
import styles from "./products-page.module.css";

export const ProductsPage = () => {
  const { addProduct } = useContext(BasketContext) as BasketContextProps;

  return (
    <div className={styles.wrapper}>
      {Product.map((product) => (
        <ProductItem key={product.id} product={product} onAdd={addProduct} />
      ))}
    </div>
  );
};
