import { type JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import ProductList from "./features/products/ProductList";
import Sandwich from "./features/sandwich/Sandwich";
import { UsersList } from "./features/users/UsersList";
import Layout from "./features/LayOut/LayOut";
import Home from "./features/Home/Home";


function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="counter" element={<Counter />} />
        <Route path="home" element={<Home />} />
        <Route path="userslist" element={<UsersList />} />
        <Route path="sandwich" element={<Sandwich />} />
      </Route>
    </Routes>
  );
}

export default App;
