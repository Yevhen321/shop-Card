import React, {useContext} from 'react';
import { BasketContext } from "../../context/basket-context";
import ContentContainer from "../../components/ContentContainer";
import BasketProductItem from "../../components/BasketProductItem";

const styles = {
    productBox: {
        margin: '1rem 0',
    },
    page: {
        width: '100%'
    }
}

const Basket = () =>{
    const [basketProducts, addProduct, removeProduct, totalPrice, discount] = useContext(BasketContext);

    return (
        <ContentContainer>
            <div style={styles.page}>
                {basketProducts.length === 0 && 'Basket is empty'}
                {basketProducts.map((product, index) => (
                    <div key={index} style={styles.productBox}>
                        <BasketProductItem
                            product={product}
                            addProduct={addProduct}
                            removeProduct={removeProduct}
                        />
                    </div>
                ))}
                <span>
                <div>Total price: {totalPrice && totalPrice.toFixed(2)} $</div>
                <div>{discount ? `Discount price: ${discount.toFixed(2)} $` : ''}</div>
            </span>
            </div>
        </ContentContainer>
    );
}

export default Basket;