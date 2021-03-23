import React, {useContext} from 'react';
import {Link } from "react-router-dom";
import {CounterContext} from "../../context/counter-context";

const styles = {
    header: {
        backgroundColor: 'blue',
        paddingTop: 20,
        paddingBottom: 20,
    },
    container: {
        maxWidth: 1200,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

        margin: '0 auto'
    },
    text: {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 10px',
    }
}

const Header = () => {

    const [basketItems] = useContext(CounterContext);
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                <div style={styles.text}>Product Shop</div>
                <div>
                    <Link to="/product" style={styles.text}>Products </Link>
                    <Link to="/info" style={styles.text}> Info</Link>
                    <Link to="/basket" style={styles.text}> Products in Basket {basketItems.length === 0 ? <span>&nbsp;</span> : basketItems.length} </Link>
                </div>
            </div>
        </header>
    )
};

export default Header;