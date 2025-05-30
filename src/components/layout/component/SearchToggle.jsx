import React, { useState } from "react";

import { Link } from "react-router-dom";
const SearchToggle = ({ allClasses, color }) => {
  const [activeSearch, setActiveSearch] = useState(false);
  return (
    <>
      <div className={allClasses ? allClasses : ""}>
        <button
          onClick={() => setActiveSearch((pre) => !pre)}
          className={`d-flex items-center ${color ? color : "text-white"} `}
          data-el-toggle=".js-search-toggle"
        >
          <i className="text-20 icon icon-search"></i>
        </button>

        <div
          className={`toggle-element js-search-toggle ${
            activeSearch ? "-is-el-visible" : ""
          }`}
        >
          <div
            className="header-search pt-90 bg-white shadow-4 "
            style={{ height: "650px" }}
          >
            <div className="container">
              <div className="header-search__field">
                <div className="icon icon-search text-dark-1"></div>
                <input
                  required
                  type="text"
                  className="col-12 text-18 lh-12 text-dark-1 fw-500"
                  placeholder="O que você quer aprender?"
                />

                <button
                  onClick={() => setActiveSearch(false)}
                  className="d-flex items-center justify-center size-40 rounded-full bg-purple-3"
                  data-el-toggle=".js-search-toggle"
                >
                  <img src="/assets/img/menus/close.svg" alt="ícone fechar" />
                </button>
              </div>

              <div className="header-search__content mt-30">
                <div className="text-17 text-dark-1 fw-500">
                  Populares agora
                </div>

                <div className="d-flex y-gap-5 flex-column mt-20">
                  <Link to={`/courses/${5}`} className="text-dark-1">
                    Curso Definitivo de Desenho - Do Iniciante ao Avançado
                  </Link>
                  <Link to="/courses-single-2/3" className="text-dark-1">
                    Escola de Arte de Personagem: Curso Completo de Desenho de Personagem
                  </Link>
                  <Link to="/courses-single-3/3" className="text-dark-1">
                    Blender Completo: Aprenda Modelagem 3D para Iniciantes
                  </Link>
                  <Link to="/courses-single-4/3" className="text-dark-1">
                    Essenciais de Design de Experiência do Usuário - Adobe XD UI UX Design
                  </Link>
                  <Link to="/courses-single-5/3" className="text-dark-1">
                    Masterclass de Design Gráfico - Aprenda EXCELENTE Design
                  </Link>
                  <Link to="/courses-single-6/3" className="text-dark-1">
                    Adobe Photoshop CC – Curso Essencial de Treinamento
                  </Link>
                </div>

                <div className="mt-30">
                  <button className="uppercase underline">
                    PRESSIONE ENTER PARA VER TODOS OS RESULTADOS DA PESQUISA
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            className="header-search__bg"
            data-el-toggle=".js-search-toggle"
          ></div>
        </div>
      </div>
    </>
  );
};

export default SearchToggle;
