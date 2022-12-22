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
      <div className={styles.productDescBox}>
        <h3 className={styles.text}>{product.name}</h3>
        <p className={styles.price}>$ {product.price}</p>
      </div>
      <div className={styles.buttonBox}>
        <button
          type="button"
          className={styles.button}
          onClick={() => onAdd(product)}
        >
          Add to Basket
        </button>
      </div>
      {product.discount && product.discount.active && (
        <div className={styles.saleBox}>
          <p>from {product.discount.from}</p>
          <p>{product.discount.percent} %</p>
        </div>
      )}
    </div>
  );
};
