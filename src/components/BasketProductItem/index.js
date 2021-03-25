import React, {useState, useEffect} from 'react';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 800
    },
    box: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid',
        width: '70%',
        padding: '1rem 1rem',
        borderRadius: '.4rem',
    },
}

const BasketProductItem = ({product, addProduct, removeProduct, onChangeInput}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(product.qty)
    }, [product.qty])

    return (
        <div  style={styles.root}>
            <div style={styles.box}>
                <div>
                    <strong>{product.name}</strong>
                </div>
                <div>{count} x ${product.price.toFixed(2)}</div>
                <div>
                    <button onClick={() => addProduct(product)}>+</button>
                    <button onClick={() => removeProduct(product)}>-</button>
                    <input
                        type="number"
                        value={count}
                        onChange={
                            (e) =>
                                onChangeInput(Number(e.target.value), product.id)
                        }
                    />
                </div>
            </div>
            {product.discount.active && product.qty >= 3 && `Discount: ${product.discount.percent} %`}
        </div>
    )
};

export default BasketProductItem;