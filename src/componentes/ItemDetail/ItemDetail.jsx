/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarProducto } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  };

  return (
    <div className="itemDetailCart">
      <div className="imgDetailCart">
        <img className="imgDetail" src={img} alt={nombre} />
      </div>
      <div className="itemDetail">
        <h3>Nombre:{nombre} </h3>
        <p> Precio: ${precio} </p>
        <h4>ID:{id}</h4>
        <p>Stock: {stock} </p>
        <p>Descripcion: {descripcion} </p>
        {agregarCantidad > 0 ? (
         <div className="terminarCompra2">
           <Link className="terminarCompra" to="/cart"> Terminar Compra</Link>
         </div>
        ) : (
          <ItemCount
            inicial={1}
            stock={stock}
            funcionAgregar={manejadorCantidad}
          />
        )}
        <div className="seguirComprando2">
           <Link className="seguirComprando" to="/"> Quieres Seguir Comprando </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
