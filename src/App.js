import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AboutUs from "./components/AboutUs";
import Cart from "./components/Cart";
import Categories from "./components/Categories";
import CheckOut from "./components/CheckOut";
import Finish from "./components/Finish";
import HistoryClient from "./components/HistoryClient";
import ItemProduct from "./components/ItemProduct";
import NotFound from "./components/NotFound";
import Products from "./components/Products";
import Register from "./components/Register";
import Login from "./components/Login"
import Search from "./components/Search";
import Admin from "./components/SoloAdmin/Admin";
import AddProduct from "./components/SoloAdmin/AddProduct";
import DeleteProduct from "./components/SoloAdmin/DeleteProduct";
import HistoryAdmin from "./components/SoloAdmin/HistoryAdmin";
import ModifyProduct from "./components/SoloAdmin/ModifyProduct";
import UsersAdmin from "./components/SoloAdmin/UsersAdmin";
import CategoryProduct from "./components/SoloAdmin/CategoryProduct"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/aboutus" element={<AboutUs />} />

          {/* Rutas de Navbar */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/search" element={<Search />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />

          
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/finish" element={<Finish />} />
          <Route path="/historyclient" element={<HistoryClient />} />
          <Route path="/itemproduct" element={<ItemProduct />} />
          <Route path="/notfound" element={<NotFound />} />

          {/* Rutas Solo Admin */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/deleteproduct" element={<DeleteProduct />} />
          <Route path="/historyAdmin" element={<HistoryAdmin />} />
          <Route path="/modifyproduct" element={<ModifyProduct />} />
          <Route path="/usersadmin" element={<UsersAdmin />} />
          <Route path="/categoriesAdmin" element={<CategoryProduct />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
