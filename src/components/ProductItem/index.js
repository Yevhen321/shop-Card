import React from 'react';

const styles = {
    box: {
        position: 'relative'
    },
    saleBox: {
        position: 'absolute',
        top: 1,
        right: 2,
        width: 70,
        height: 70,
        backgroundColor: '#ff0000bd',
        borderRadius: '50%',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    img: {
        maxHeight: '10rem',
    },
    button: {
        fontSize: '1rem',
        padding: '.2rem',
        margin: '.1rem',
        borderRadius: '.5rem',
        border: '.1rem solid blue',
        backgroundColor: 'green',
        width: '100%',
        cursor: 'pointer',
    },
}

const Index = ({product, onAdd })=> {
    return (
        <div style={styles.box}>
            <img
                src={product.image}
                style={styles.img}
                alt={product.name}
            />
            <h3>{product.name}</h3>
            $ {product.price}
            <button
                style={styles.button}
                onClick={() => onAdd(product)}
            >
                Add to Basket
            </button>
            {product.discount && product.discount.active && (
                <div  style={styles.saleBox}>
                    <div>from {product.discount.from}</div>
                    <div>{product.discount.percent} %</div>
                </div>
            )}
        </div>
    );
}

export default Index;