/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/config";




const CartItem = ({ item, cantidad}) => {
    const { eliminarProducto } = useContext(CarritoContext);
    const [img, setImg] = useState("");
    const [precioTotal, setPrecioTotal] = useState(0);

    useEffect(() => {
      const obtenerImg = async () => {
        try {
          const productoRef = doc(db, "inventario", item.id);
          const productoDoc = await getDoc(productoRef);
          const Img = productoDoc.data().img;
          setImg(Img);
        } catch (error) {
          console.log("Error al obtener la URL de la imagen", error);
        }
      };
    
       obtenerImg();
    }, [item.id]);

    useEffect(() => {
      setPrecioTotal(item.precio * cantidad);
    }, [item.precio, cantidad]);
   
  return (
  
    <div className="carritoCompra__item">
      <img className="carritoCompra__itemImg" src={img} alt={item.nombre} />
      <div className="carritoCompra__itemInfo">
        <h4 className="carritoCompra__itemNombre">{item.nombre}</h4>
        <p className="carritoCompra__itemPrecio">Precio: {item.precio}</p>
        <p className="carritoCompra__itemCantidad">Cantidad: {cantidad}</p>
        <p className="carritoCompra__itemCantidadTotal">Cantidad Total: ${ precioTotal }</p>
        
        <button className="carritoCompra__itemEliminar" onClick={() => eliminarProducto(item.id)}>Eliminar Producto</button>
      </div>
    </div>

  )
}

export default CartItem