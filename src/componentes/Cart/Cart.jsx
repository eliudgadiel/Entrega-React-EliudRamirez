import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"


const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if(cantidadTotal === 0) {
        return (
            <div className="carritoCompra">
        <h2 className="carritoCompra__mensaje">No se encontraron productos en el carrito</h2>
        <Link className="carritoCompra__link" to="/">Ver productos</Link>
      </div>
    );
  }

  return (
    <div className="carritoCompra">
      <div className="carritoCompra__items">
        {carrito.map((producto) => (
          <CartItem key={producto.id} {...producto} />
        ))}
      </div>
      <div className="carritoCompra__resumen">
        <h3 className="carritoCompra__total">Total: $ {total}</h3>
        <h4 className="carritoCompra__cantidadTotal">Cantidad Total: {cantidadTotal}</h4>
        <div className="carritoCompra__botones">
          <button className="carritoCompra__vaciarCarrito" onClick={vaciarCarrito}>Vaciar Carrito</button>
          <Link className="carritoCompra__finalizarCompra" to="/checkout">Finalizar Compra</Link>
        </div>
      </div>
    </div>
  )
}

export default Cart