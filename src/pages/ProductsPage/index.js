import React, {useContext} from "react";
import ProductItem from "../../components/ProductItem";
import { CounterContext } from "../../context/counter-context";
import Data from "../../pages/ProductsPage/Data";

const styles = {
    div:{
        display: "flex",
        justifyContent: "space-around",
        marginTop: '3rem',
    }
}

const ProductPage = () => {
    const [basketItems, setBasketItems, onAdd] = useContext(CounterContext);

    return (
        <div>
            <div style={styles.div}>
                {Data.map((product, index)=>{
                    return (
                        <ProductItem key={index} product={product} onAdd={onAdd} />
                    );
                })}
            </div>
        </div>
    );
};


export default ProductPage;

