import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projetos">Projetos</NavLink>
      <NavLink to="/sobre">Sobre</NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </nav>
  );
}