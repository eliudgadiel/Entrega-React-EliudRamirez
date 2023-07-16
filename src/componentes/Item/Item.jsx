/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Item.css";


const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardContainer">
      <img className="img" src={img} alt={nombre} />
      <div className="detalles">
        <h3>Nombre: {nombre} </h3>
        <p>Precio: ${precio} </p>
        {stock === 0 ? (
          <p style={{ color: 'red' }}>Sin stock</p>
        ) : (
          <p>Stock: {stock} </p>
        )}
        <p>ID: {id} </p>
        <Link className="verProducto" to={`/item/${id}`} > 
        Ver Producto
        </Link> 
      </div>
    </div>
  );
};

export default Item;
