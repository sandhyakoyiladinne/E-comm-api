import {Link }from "react-router-dom";
import "../css/Navbar.css"

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li ><Link to= "/"  style={{textDecoration:"none"}}>Home</Link></li>
                <li ><Link to= "/about" style={{textDecoration:"none"}}>About Us</Link></li>
                <li ><Link to= "/contactUs" style={{textDecoration:"none"}} >Contact Us</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar