import { Link } from "react-router-dom";

export default function PageLinksTwo() {
  return (
    <div className="breadcrumbs mt-10 pt-0 pb-0">
      <div className="breadcrumbs__content">
        <div className="breadcrumbs__item">
          <Link to="/">Início</Link>
        </div>
        <div className="breadcrumbs__item">
          <Link to="/courses-list-3">Todos os cursos</Link>
        </div>
        <div className="breadcrumbs__item">
          <Link to={`/courses/${5}`}>Design de Experiência do Usuário</Link>
        </div>
        <div className="breadcrumbs__item">
          <Link to={`/courses/${3}`}>Interface do Usuário</Link>
        </div>
      </div>
    </div>
  );
}
