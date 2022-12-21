import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  BasketContext,
  BasketContextProps,
} from "../../context/basket-context";
import { ContentContainer } from "../ContentContainer/content-container.component";
import styles from "./header.module.css";

export const Header = () => {
  const { basketProducts } = useContext(BasketContext) as BasketContextProps;

  return (
    <header className={styles.header}>
      <ContentContainer>
        <div className={styles.text}>Product Shop</div>
        <div>
          <Link to="/product" className={styles.text}>
            Products{" "}
          </Link>
          <Link to="/basket" className={styles.text}>
            Basket {basketProducts.length}
          </Link>
        </div>
      </ContentContainer>
    </header>
  );
};
