import { Link } from "react-router-dom";
import logo from "../utils/logo.jpg"
import style from "../styles/Navbar.module.css"




function Navbar() {
  return (
    <div className={style.navbar}>
      <Link to="/"> <img src={logo} alt="Logo" /> </Link>
      <Link to="/products" > <div> Products</div> </Link>
      <Link to="/categories" > <div> Categories</div> </Link>
      <Link to="/search" > <div> Search</div> </Link>
      <Link to="/register" > <div> Register</div> </Link>
      <Link to="/login" > <div> Login</div> </Link>
      <Link to="/cart" >  <div> Cart</div> </Link>
      <br></br>
    </div>
  )
}
export default Navbar;
