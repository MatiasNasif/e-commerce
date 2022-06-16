import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import Finish from "./components/Finish";
import HistoryClient from "./components/HistoryClient";
import ItemProduct from "./components/ItemProduct";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Register from "./components/Register";
import Login from "./components/Login"
import Search from "./components/Search";

import { useDispatch } from 'react-redux'
import { userPersistence } from './store/user'


function App() {

  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* Rutas de Navbar */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ItemProduct />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/historyclient" element={<HistoryClient />} />

          {/* 404 */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
