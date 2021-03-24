import React from 'react';

const styles = {
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid',
        width: '30%',
        padding: '.2rem .1rem',
        borderRadius: '.4rem',
    },
}

const BasketProductItem = ({product, addProduct, removeProduct}) => {
    return (
        <div style={styles.box}>
            <div>
                <strong>{product.name}</strong>
            </div>
            <div>{product.qty} x ${product.price.toFixed(2)}</div>
            <div>
                <button onClick={() => addProduct(product)}>+</button>
                <button onClick={() => removeProduct(product)}>-</button>
            </div>
        </div>
    )
};

export default BasketProductItem;