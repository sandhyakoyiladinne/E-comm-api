import { Link } from "react-router-dom";
import "../css/Navbar.css"
import useCartStore from "../zustand/store";

const Navbar = () => {

  const cartItemsCount = useCartStore((state) => state.items.length)

  return (
    <div>
      <nav>
        <ul>
          <li ><Link to="/" style={{ textDecoration: "none" }}>Home</Link>{" "}</li>
          <li ><Link to="/about" style={{ textDecoration: "none" }}>About Us</Link>{" "}</li>
          <li ><Link to="/contactUs" style={{ textDecoration: "none" }} >Contact Us</Link>{" "}</li>
          <li ><Link to="/cartPage" style={{ textDecoration: "none" }} >Cart ({cartItemsCount})</Link>{" "}</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar