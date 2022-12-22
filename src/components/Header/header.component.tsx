import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  BasketContext,
  BasketContextProps,
} from "../../context/basket-context";
import styles from "./header.module.css";

export const Header = () => {
  const { basketProducts } = useContext(BasketContext) as BasketContextProps;

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div>
          <Link to="/" className={styles.link}>
            Product Shop
          </Link>
        </div>
        <div className={styles.productBox}>
          <Link to="/products" className={styles.link}>
            Products
          </Link>
          <Link to="/basket" className={styles.link}>
            Basket {basketProducts.length}
          </Link>
        </div>
      </div>
    </header>
  );
};
