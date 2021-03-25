import React, {useContext} from "react";
import ProductItem from "../../components/ProductItem";
import { BasketContext } from "../../context/basket-context";
import Products from "../../mock/products";
import ContentContainer from "../../components/ContentContainer";

const ProductPage = () => {
    const [, addProduct] = useContext(BasketContext);

    return (
        <ContentContainer>
            {Products.map((product, index) =>
                <ProductItem
                    key={index}
                    product={product}
                    onAdd={addProduct}

                />
            )}
        </ContentContainer>
    );
};


export default ProductPage;

