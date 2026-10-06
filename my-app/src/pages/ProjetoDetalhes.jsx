import { useParams, Link } from "react-router-dom";
import projetos from "../data/projetos";

export default function ProjetoDetalhes() {
  const { id } = useParams();
  const projeto = projetos.find((p) => p.id === Number(id));

  if (!projeto) {
    return (
      <section className="page">
        <h1>Projeto não encontrado</h1>
        <Link to="/projetos" className="back">← Voltar para projetos</Link>
      </section>
    );
  }

  return (
    <section className="page">
      <Link to="/projetos" className="back">← Voltar</Link>
      <img className="detalhe-img" src={projeto.imagem} alt={projeto.nome} />
      <span className="tag">{projeto.categoria}</span>
      <h1>{projeto.nome}</h1>
      <p className="lead">{projeto.descricao}</p>
    </section>
  );
}