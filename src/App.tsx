import React from "react";
import { Route, Routes } from "react-router-dom";
import { BasketContextProvider } from "./context/basket-context";
import { ProductsPage, BasketPage } from "./pages";
import { Header } from "./components";

const App = () => (
  <BasketContextProvider>
    <Header />
    <Routes>
      <Route path="/product" element={<ProductsPage />} />
      <Route path="/basket" element={<BasketPage />} />
    </Routes>
  </BasketContextProvider>
);

export default App;
