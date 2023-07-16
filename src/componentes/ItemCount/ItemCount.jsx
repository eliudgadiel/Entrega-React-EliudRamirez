/* eslint-disable react/prop-types */
import "./ItemCount.css";
import { useState } from "react";


const ItemCount = ({ inicial, stock, funcionAgregar }) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const decrementar = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };
  const agregarAlCarrito = () => {
    if (stock === 0) {
      return;
    }

    funcionAgregar(contador);
  };

  if (stock === 0) {
    return <p  style={{color:'red'}}>Agotado</p>;
  }

  return (
    <>
      <div className="contador">
        <button className="restar" onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button className="sumar" onClick={incrementar}> + </button>
      </div>
    <div className="botonCompra2">
        <button className="botonCompra" onClick={() => agregarAlCarrito(contador)}>
          Agragar al Carrito
        </button>
    </div>
    </>
  );
};

export default ItemCount;
