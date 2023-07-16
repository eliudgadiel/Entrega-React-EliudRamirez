/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-undef */
import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../services/config'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query
    (collection(db, "inventario"),where("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
    .then( res => {
      const nuevoProductos = res.docs.map(doc => {
        const data = doc.data();
        return {id: doc.id, ...data}
      })
      setProductos(nuevoProductos)
    })
      .catch((error) => console.log(error));
  }, [idCategoria]);

  return (
    <div className="ItemListContainer">
      <h2> Productos</h2>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
