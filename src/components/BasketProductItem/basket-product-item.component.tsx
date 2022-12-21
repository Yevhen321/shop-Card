import React, { useState, useEffect } from "react";
import { ProductProps } from "../../mock/products";
import styles from "./basket-product-item.module.css";

type BasketProductItemProps = {
  product: ProductProps;
  addProduct: (product: ProductProps) => void;
  removeProduct: (product: ProductProps) => void;
  onChangeInput: (e: number, id: number) => void;
};

export const BasketProductItem = ({
  product,
  addProduct,
  removeProduct,
  onChangeInput,
}: BasketProductItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(product.qty);
  }, [product.qty]);

  return (
    <div className={styles.root}>
      <div className={styles.box}>
        <div>
          <strong>{product.name}</strong>
        </div>
        <div>
          {count} x ${product.price.toFixed(2)}
        </div>
        <div>
          <button type="button" onClick={() => addProduct(product)}>
            +
          </button>
          <button type="button" onClick={() => removeProduct(product)}>
            -
          </button>
          <input
            type="number"
            value={count}
            onChange={(e) => onChangeInput(Number(e.target.value), product.id)}
          />
        </div>
      </div>
      {product.discount.active &&
        product.qty >= 3 &&
        `Discount: ${product.discount.percent} %`}
    </div>
  );
};
