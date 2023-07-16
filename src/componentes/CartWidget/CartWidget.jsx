import { useContext } from "react";
import { CarritoContext} from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png?w=740&t=st=1685820976~exp=1685821576~hmac=ffa7eeb17db6d97f6e7bb1908a9312365e218a317b1460e27c93c068d97f3649";
  return (

    <div className="carrito">
  <Link to="/cart"> 
    <img className="imgCarrito" src={imgCarrito} alt="carrito" />
    {cantidadTotal > 0 && <strong>{cantidadTotal}</strong>}
  </Link>
</div>
  );
};

export default CartWidget;
