import { Link } from "react-router-dom";
import './ProjetoCard.css'

function ProjetoCard({ id, nome, descricao, categoria, imagem }) {
  return (
    <Link to={`/projetos/${id}`} className="projeto-card">
      <div className="card-image">
        <img src={imagem}/>
      </div>
      <div className="card-content">
        <span className="tag">{categoria}</span>
        <h3>{nome}</h3>
        <p>{descricao}</p>
      </div>
    </Link>
  );
}

export default ProjetoCard;