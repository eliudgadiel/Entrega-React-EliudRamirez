/* eslint-disable react/prop-types */
import "./ItemDetail.css"


const ItemDetail = ( {id, nombre, precio, img} ) => {
  return (
    <div className="itemDetailCart">
      <div className="imgDetailCart">
         <img className="imgDetail" src={img} alt= {nombre} />
         </div>
         <div className="itemDetail">
        <h3>Nombre:{nombre} </h3>
        <p> Precio: {precio} </p>
        <h4>ID:{id}</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
    </div>
  )
}

export default ItemDetail