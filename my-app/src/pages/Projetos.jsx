import projetos from "../data/projetos";
import ProjetoCard from "../components/ProjetoCard";

export default function Projetos() {
  return (
    <section className="page">
      <h1>Projetos</h1>
      <div className="projetos-lista">
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} {...projeto} />
        ))}
      </div>
    </section>
  );
}