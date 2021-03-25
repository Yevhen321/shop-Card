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
    const [
        basketProducts,
        addProduct,
        removeProduct,
        price,
        priceDiscount,
        increaseProductQty
    ] = useContext(BasketContext);

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
                            onChangeInput={increaseProductQty}
                        />
                    </div>
                ))}
                <span>
                <div>Price: {price} $</div>
                { priceDiscount !== price && <div>Price with discount:{priceDiscount} $</div>}
            </span>
            </div>
        </ContentContainer>
    );
}

export default Basket;