import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {BasketContextProvider} from "./context/basket-context";

import ProductPage from "./pages/ProductsPage";
import Header from "./components/Header/index";
import Basket from "./pages/BasketPage";

const App = () => (
    <BasketContextProvider>
        <Router>
            <Header />
            <Switch>
                <Route path="/product">
                    <ProductPage   />
                </Route>
                <Route path="/basket">
                    <Basket />
                </Route>
                <Redirect to='/product' />
            </Switch>
        </Router>
    </BasketContextProvider>
);

export default App;
