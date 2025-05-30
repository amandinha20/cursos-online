import { reviews } from "@/data/reviews";
import React from "react";
import Star from "../common/Star";

import { Link } from "react-router-dom";

export default function Reviews() {
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Avaliações</h1>
            <div className="mt-10">
              Veja o que os alunos estão dizendo sobre nossos cursos.
            </div>
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Todas as Avaliações</h2>
              </div>

              <div className="py-30 px-30">
                <div className="row y-gap-30">
                  {reviews.map((elm, i) => (
                    <div key={i} className="md:direction-column">
                      <div
                        className={`d-flex ${
                          i != 0 ? "border-top-light" : ""
                        }  pt-30`}
                      >
                        <div className="mr-20">
                          <img src={elm.avatarSrc} alt="image" />
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              {elm.name}
                              <span className="text-13 text-light-1 fw-400 ml-5">
                                {elm.date}
                              </span>
                            </h4>

                            <div className="d-flex x-gap-5 items-center mt-15">
                              <Star star={elm.rating} />
                            </div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">{elm.title}</h5>
                          <div className="comments__text mt-10">
                            <p>{elm.comment}</p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <button className="button text-13 -sm -light-7 -dark-button-dark-2 text-purple-1">
                              Responder
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer -dashboard py-30">
        <div className="row items-center justify-between">
          <div className="col-auto">
            <div className="text-13 lh-1">
              © 2022 Instituto Saber+. Todos os direitos reservados.
            </div>
          </div>

          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="d-flex items-center flex-wrap x-gap-20">
                <div>
                  <Link to="/help-center" className="text-13 lh-1">
                    Ajuda
                  </Link>
                </div>
                <div>
                  <Link to="/terms" className="text-13 lh-1">
                    Política de Privacidade
                  </Link>
                </div>
                <div>
                  <a href="#" className="text-13 lh-1">
                    Aviso de Cookies
                  </a>
                </div>
                <div>
                  <a href="#" className="text-13 lh-1">
                    Segurança
                  </a>
                </div>
                <div>
                  <Link to="/terms" className="text-13 lh-1">
                    Termos de Uso
                  </Link>
                </div>
              </div>

              <button className="button -md -rounded bg-light-4 text-light-1 ml-30">
                Português
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
