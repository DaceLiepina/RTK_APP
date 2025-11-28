import { type JSX } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./features/counter/Counter";
import ProductList from "./features/products/ProductList";
import Sandwich from "./features/sandwich/Sandwich";
import { UsersList } from "./features/users/UsersList";
import LayOut from "./features/LayOut/LayOut";
import Home from "./features/Home/Home";
import Login from "./features/auth/Login";
import ProtectedRoute from "./features/ProtectedRoute/ProtectedRoute";
import WeatherApp from "./features/WeatherApp/WeatherApp";

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<LayOut />}>
        {/* Publiski maršruti */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        {/* Aizsargātie maršruti */}
        <Route
          path="products"
          element={<ProtectedRoute outlet={<ProductList />} />}
        />

        <Route
          path="counter"
          element={<ProtectedRoute outlet={<Counter />} />}
        />

        <Route
          path="userslist"
          element={<ProtectedRoute outlet={<UsersList />} />}
        />
<Route
          path="weather"
          element={<ProtectedRoute outlet={<WeatherApp />} />}
        />
        <Route
          path="sandwich"
          element={<ProtectedRoute outlet={<Sandwich />} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
