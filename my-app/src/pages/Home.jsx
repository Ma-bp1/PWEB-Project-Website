import { Link } from "react-router-dom";
import './Home.css'

export default function Home() {
  return (
    <section className="hero"> 
      <h1>Arquitetura e cultura; diversos projetos.</h1>
      <Link to="/projetos" className="btn">Ver projetos</Link>
    </section>
  );
}