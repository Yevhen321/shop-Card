import React, {useContext} from 'react';
import { CounterContext } from "../../context/counter-context";

const styles = {
    mainDiv:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid',
        width: '30%',
        margin: '1rem 1rem',
        padding: '.2rem .1rem',
        borderRadius: '.4rem',
    }
}

const Basket = ()=>{
    const [basketItems, setBasketItems, onAdd, onRemove] = useContext(CounterContext);
    const totalPrice = basketItems.reduce((a,c) => a + c.price * c.qty, 0);
    const disc = basketItems.reduce((a,c) => a + c.qty >= 3 ? totalPrice * 0.83 : 0, 0);

    return(
        <div>
            <span>
                {basketItems.length === 0 && <div>Basket is empty</div>}
            </span>
            {basketItems.map((item, index) =>(
                <div key={index} style={styles.mainDiv}>
                    <div>
                        <strong>{item.name}</strong>
                    </div>
                    <div>
                        {item.qty} x ${item.price.toFixed(2)}
                    </div>
                    <div>
                        <button onClick={() => onAdd(item)}>+</button>
                        <button onClick={() => onRemove(item)}>-</button>
                    </div>
                </div>
            ))}
            <span>
                {totalPrice === 0 ? <div>&nbsp;</div> : <div>Total price: {totalPrice.toFixed(2)} $</div>}
                {disc >= 3 ? <div>Discount price: {disc.toFixed(2)} $</div> : <div>&nbsp;</div>}
            </span>
        </div>
    );
}

export default Basket;