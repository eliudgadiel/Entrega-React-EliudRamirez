/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Item.css";


const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardContainer">
      <img className="img" src={img} alt={nombre} />
      <h3>Nombre: {nombre} </h3>
      <p>Precio: {precio} </p>
      <p>ID: {id} </p>
      <Link className="verProducto" to={`/item/${id}`} > 
      Ver Producto
      </Link> 
   
      <button className="comprar">COMPRAR</button>
    </div>
  );
};

export default Item;
