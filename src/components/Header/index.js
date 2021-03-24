import React, {useContext} from 'react';
import {Link } from "react-router-dom";
import {BasketContext} from "../../context/basket-context";
import ContentContainer from "../ContentContainer";

const styles = {
    header: {
        backgroundColor: 'blue',
        paddingTop: 20,
        paddingBottom: 20,
    },
    text: {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 10px',
    }
}

const Header = () => {
    const [basketItems] = useContext(BasketContext);

    return (
        <header style={styles.header}>
            <ContentContainer>
                <div style={styles.text}>Product Shop</div>
                <div>
                    <Link to="/product" style={styles.text}>Products </Link>
                    <Link to="/basket" style={styles.text}>
                        Basket {basketItems.length > 0 && basketItems.length}
                    </Link>
                </div>
            </ContentContainer>
        </header>
    )
};

export default Header;