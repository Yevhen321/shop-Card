import React, {useContext} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ProductPage from "./pages/ProductsPage";
import InfoPage from "./pages/InfoPage";
import Header from "./components/Header/index";
import {CounterContext, CounterContextProvider} from "./context/counter-context";
import Basket from "./pages/BasketPage";

const App = () => {

    return(
      <CounterContextProvider>
              <Router>
                <Header />
                  <Switch>
                      <Route path="/product">
                          <ProductPage   />
                      </Route>
                      <Route path="/info">
                          <InfoPage />
                      </Route>
                      <Route path="/basket">
                          <Basket />
                      </Route>
                  </Switch>
              </Router>
      </CounterContextProvider>
  )
}

export default App;
