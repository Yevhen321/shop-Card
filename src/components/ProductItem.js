import React from 'react';

const styles = {
    img:{
        maxHeight: '10rem',
    },
    button:{
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

const ProductItem = ( {product, onAdd } )=> {
    return(
        <div>
            <img src={product.image} style={styles.img} alt={product.name}/>
            <h3>{product.name}</h3>
            $ {product.price}
            <button style={styles.button} onClick={() => onAdd(product) }>Add to Basket</button>
        </div>
    );
}

export default ProductItem;