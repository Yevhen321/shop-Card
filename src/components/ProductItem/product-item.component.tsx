import React from "react";
import { ProductProps } from "../../mock/products";
import styles from "./product-item.module.css";

type ProductItemProps = {
  product: ProductProps;
  onAdd: (product: ProductProps) => void;
};

export const ProductItem = ({ product, onAdd }: ProductItemProps) => {
  return (
    <div className={styles.box}>
      <img src={product.image} className={styles.image} alt={product.name} />
      <h3>{product.name}</h3>$ {product.price}
      <button
        type="button"
        className={styles.button}
        onClick={() => onAdd(product)}
      >
        Add to Basket
      </button>
      {product.discount && product.discount.active && (
        <div className={styles.saleBox}>
          <div>from {product.discount.from}</div>
          <div>{product.discount.percent} %</div>
        </div>
      )}
    </div>
  );
};
