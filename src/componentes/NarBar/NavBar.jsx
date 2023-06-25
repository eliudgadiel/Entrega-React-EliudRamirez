import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1 className="look">
          LOOK <br /> <span className="fashion">FASHION </span>
        </h1>
      </Link>
      <p className="tienda-online">Tienda Online</p>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>INICIO</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/1"}>HOMBRE</NavLink>
          </li>
          <li>
            <NavLink to={"/categoria/2"}>MUJER</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
