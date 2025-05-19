import React from "react";

export default function PageHeading() {
  return (
    <section className="page-header -type-1">
      <div className="container">
        <div className="page-header__content">
          <div className="row">
            <div className="col-auto">
              <div>
                <h1 className="page-header__title">Cursos Disponíveis</h1>
              </div>
              <div>
                <p className="page-header__text">
                  Explore nossa ampla variedade de cursos e encontre o que é ideal para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
