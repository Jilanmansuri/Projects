import { NavLink } from "react-router-dom"
import "./navbar.css"
function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <NavLink to="/first" >Assignment-01</NavLink>
      <NavLink to="/second">Assignment-02</NavLink>
      <NavLink to="/third" >Assignment-03</NavLink>
      <NavLink to="/fourth">Assignment-04</NavLink>
      <NavLink to="/fifth" >Assignment-05</NavLink>
    </nav>
  )
}

export default Navbar
