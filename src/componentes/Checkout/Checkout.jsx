/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import CartItem from "../CartItem/CartItem";
import "./Checkout.css";

const Checkout = () => {
  const { carrito, vaciarCarrito, cantidadTotal } = useContext(CarritoContext);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmacion, setEmailConfirmacion] = useState("");
  const [error, setError] = useState("");
  const [orderId, setOrdenId] = useState("");

  const manejadorFormulario = (e) => {
    e.preventDefault();
    

    if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
      setError("Porfavor Complete Todos Los Campos");
      return;
    }

    if(email !== emailConfirmacion) {
        setError("Los Camposo Del Email No Coinciden, Por Favor Verifique Bien Los Datos")
        return;
    }

    const orden = {
      items: carrito.map(producto => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: cantidadTotal,
      nombre,
      apellido,
      telefono,
      email,
      fecha: new Date(),
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "inventario", productoOrden.id);
        const prodctoDoc = await getDoc(productoRef);
        const stockActual = prodctoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )

      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
          });
      })
      .catch((error) => {
        console.log("error al actualizar el stock", error);
      });
  };


  return (
   
   <div>
    <h2>Checkout</h2>
     <div className="checkout">
        
       <form onSubmit={manejadorFormulario}>
         {carrito.map((producto) => (
          
           <div key={producto.id}>
              <CartItem item={producto.item} cantidad={producto.cantidad} img={producto.img} />
            
           </div>
         ))}
    
         <div>
           <label htmlFor="nombre">Nombre</label>
           <input
             type="text"
             value={nombre}
             onChange={(e) => setNombre(e.target.value)}
           />
         </div>
    
         <div>
           <label htmlFor="">Apellido</label>
           <input
             type="text"
             value={apellido}
             onChange={(e) => setApellido(e.target.value)}
           />
         </div>
    
         <div>
           <label htmlFor="">Telefono</label>
           <input
             type="text"
             value={telefono}
             onChange={(e) => setTelefono(e.target.value)}
           />
         </div>
    
         <div>
           <label htmlFor="">Email</label>
           <input
             type="text"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
           />
         </div>
    
         <div>
           <label htmlFor="">Email</label>
           <input
             type="text"
             value={emailConfirmacion}
             onChange={(e) => setEmailConfirmacion(e.target.value)}
           />
         </div>
    
         {error && <p style={{ color: "red" }}> {error} </p>}
         <button type="submit"> Finalizar Compra </button>
       </form>
    
       {orderId && (
         <strong className="orden">
           Gracias Por Su Compra. Su Numero De Orden Es {orderId}
         </strong>
       )}
     </div>
   </div>
  );
};

export default Checkout;
