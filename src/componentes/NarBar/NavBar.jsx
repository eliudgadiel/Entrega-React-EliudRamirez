import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
      <h1>LOOK <br /> <span className="fashion">FASHION </span> </h1>
      <p className="tienda-online">Tienda Online</p>
      <nav>
        <ul>
          <li>INICIO</li>
          <li>HOMBRE</li>
          <li>MUJER</li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  );
};

export default NavBar;
