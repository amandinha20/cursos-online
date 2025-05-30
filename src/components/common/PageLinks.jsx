import { Link } from "react-router-dom";
import React from "react";

export default function PageLinks({ dark }) {
  return (
    <section className={`breadcrumbs ${dark ? "bg-dark-1" : ""} `}>
      <div className="container">
        <div className="row">
          <div className="col-auto">
            <div className="breadcrumbs__content">
              <div
                className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} `}
              >
                <Link to="/">Início</Link>
              </div>

              <div
                className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} `}
              >
                <Link to="/courses-list-3">Todos os cursos</Link>
              </div>

              <div
                className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} `}
              >
                <Link to="/courses-list-5">Design de Experiência do Usuário</Link>
              </div>

              <div
                className={`breadcrumbs__item ${dark ? "text-dark-3" : ""} `}
              >
                <Link to="/courses-list-6">Interface do Usuário</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
