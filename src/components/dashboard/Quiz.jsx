import React from "react";
import FooterNine from "../layout/footers/FooterNine";
import PageLinksTwo from "../common/PageLinksTwo";

export default function Quiz() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Quiz</h1>

            <PageLinksTwo />
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-xl-9">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Quiz</h2>
              </div>

              <div className="py-30 px-30">
                <div className="border-light overflow-hidden rounded-8">
                  <div className="py-40 px-40 bg-dark-5">
                    <div className="d-flex justify-between">
                      <h4 className="text-18 lh-1 fw-500 text-white">
                        Pergunta 1
                      </h4>
                      <div className="d-flex x-gap-50">
                        <div className="d-flex items-center text-white">
                          <div className="icon-flag mr-10"></div>
                          <div>Bandeirar Pergunta</div>
                        </div>
                        <div className="d-flex items-center text-white">
                          <div className="icon-edit mr-10"></div>
                          <div>Editar Pergunta</div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex pt-15">
                      <div className="text-white">Ainda não respondida</div>
                      <div className="text-white ml-50">Pontuado em 1,00</div>
                    </div>

                    <div className="text-20 lh-1 text-white mt-15">
                      Você está assistindo ao noticiário de TV e vê isso aparecer na tela:
                    </div>
                  </div>

                  <div className="px-40 py-40">
                    <div className="mb-30">Selecione uma opção:</div>

                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="fw-500 ml-12">a. Um tweet</div>
                    </div>

                    <div className="form-radio d-flex items-center mt-20">
                      <div className="radio">
                        <input type="radio" defaultChecked />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="fw-500 ml-12">b. Uma hashtag</div>
                    </div>

                    <div className="form-radio d-flex items-center mt-20">
                      <div className="radio">
                        <input type="radio" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="fw-500 ml-12">c. Uma tag</div>
                    </div>
                  </div>
                </div>

                <div className="border-light overflow-hidden rounded-8 mt-30">
                  <div className="py-40 px-40 bg-dark-5">
                    <div className="d-flex justify-between">
                      <h4 className="text-18 lh-1 fw-500 text-white">
                        Pergunta 2
                      </h4>
                      <div className="d-flex x-gap-50">
                        <div className="d-flex items-center text-white">
                          <div className="icon-flag mr-10"></div>
                          <div>Bandeirar Pergunta</div>
                        </div>
                        <div className="d-flex items-center text-white">
                          <div className="icon-edit mr-10"></div>
                          <div>Editar Pergunta</div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex pt-15">
                      <div className="text-white">Ainda não respondida</div>
                      <div className="text-white ml-50">Pontuado em 1,00</div>
                    </div>

                    <div className="text-20 lh-1 text-white mt-15">
                      Complete as frases:
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="contact-form px-40 py-40"
                  >
                    <div className="d-flex items-center">
                      <div>
                        Se eu quiser enviar mensagens curtas de até 140 caracteres, eu uso
                      </div>

                      <div className="col-auto ml-12">
                        <input required type="text" placeholder="Texto..." />
                      </div>
                    </div>
                    <div className="d-flex items-center mt-20">
                      <div>Se eu quiser compartilhar fotos rapidamente, posso usar</div>

                      <div className="col-auto ml-12">
                        <input required type="text" placeholder="Texto..." />
                      </div>
                    </div>
                    <div className="d-flex items-center mt-20">
                      <div>Se eu quiser fazer uma videochamada no meu iPhone, posso usar</div>

                      <div className="col-auto ml-12">
                        <input required type="text" placeholder="Texto..." />
                      </div>
                    </div>

                    <div className="mt-40">
                      <div className="d-flex x-gap-20 y-gap-10">
                        <div>
                          <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                            Twitter
                          </button>
                        </div>

                        <div>
                          <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                            Instagram
                          </button>
                        </div>

                        <div>
                          <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                            Facetime
                          </button>
                        </div>

                        <div>
                          <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                            Pinterest
                          </button>
                        </div>

                        <div>
                          <button className="button -light-3 -dark-button-dark-2 -dark-text-white px-25 py-15 rounded-8">
                            Youtube
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

                <div className="border-light overflow-hidden rounded-8 mt-30">
                  <div className="py-40 px-40 bg-dark-5">
                    <div className="d-flex justify-between">
                      <h4 className="text-18 lh-1 fw-500 text-white">
                        Pergunta 3
                      </h4>
                      <div className="d-flex x-gap-50">
                        <div className="d-flex items-center text-white">
                          <div className="icon-flag mr-10"></div>
                          <div>Bandeirar Pergunta</div>
                        </div>
                        <div className="d-flex items-center text-white">
                          <div className="icon-edit mr-10"></div>
                          <div>Editar Pergunta</div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex pt-15">
                      <div className="text-white">Ainda não respondida</div>
                      <div className="text-white ml-50">Pontuado em 1,00</div>
                    </div>

                    <div className="text-20 lh-1 text-white mt-15">
                      Uma mensagem curta no Twitter é chamada de ?????
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="contact-form px-40 py-40"
                  >
                    <div className="d-flex items-center">
                      <div>Resposta</div>

                      <div className="col-lg-7 ml-12">
                        <input required type="text" placeholder="Texto..." />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="border-light overflow-hidden rounded-8 mt-30">
                  <div className="py-40 px-40 bg-dark-5">
                    <div className="d-flex justify-between">
                      <h4 className="text-18 lh-1 fw-500 text-white">
                        Pergunta 4
                      </h4>
                      <div className="d-flex x-gap-50">
                        <div className="d-flex items-center text-white">
                          <div className="icon-flag mr-10"></div>
                          <div>Bandeirar Pergunta</div>
                        </div>
                        <div className="d-flex items-center text-white">
                          <div className="icon-edit mr-10"></div>
                          <div>Editar Pergunta</div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex pt-15">
                      <div className="text-white">Ainda não respondida</div>
                      <div className="text-white ml-50">Pontuado em 1,00</div>
                    </div>

                    <div className="text-20 lh-1 text-white mt-15">
                      Relacione os ícones aos seus sites.
                    </div>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="contact-form px-40 py-40"
                  >
                    <div className="d-flex items-center">
                      <div>Resposta</div>

                      <div className="col-lg-7 ml-12">
                        <input required type="text" placeholder="Texto..." />
                      </div>
                    </div>
                  </form>
                </div>

                <div className="border-light overflow-hidden rounded-8 mt-30">
                  <div className="py-40 px-40 bg-dark-5">
                    <div className="d-flex justify-between">
                      <h4 className="text-18 lh-1 fw-500 text-white">
                        Pergunta 5
                      </h4>
                      <div className="d-flex x-gap-50">
                        <div className="d-flex items-center text-white">
                          <div className="icon-flag mr-10"></div>
                          <div>Bandeirar Pergunta</div>
                        </div>
                        <div className="d-flex items-center text-white">
                          <div className="icon-edit mr-10"></div>
                          <div>Editar Pergunta</div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex pt-15">
                      <div className="text-white">Ainda não respondida</div>
                      <div className="text-white ml-50">Pontuado em 1,00</div>
                    </div>

                    <div className="text-20 lh-1 text-white mt-15">
                      O Facebook foi fundado em 2005.
                    </div>
                  </div>

                  <div className="px-40 py-40">
                    <div className="mb-20">Selecione uma opção:</div>

                    <div className="form-radio d-flex items-center ">
                      <div className="radio">
                        <input type="radio" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="fw-500 ml-12">Verdadeiro</div>
                    </div>

                    <div className="form-radio d-flex items-center mt-20">
                      <div className="radio">
                        <input type="radio" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <div className="fw-500 ml-12">Falso</div>
                    </div>

                    <a
                      href="#"
                      className="d-block fw-500 text-purple-1 underline mt-20"
                    >
                      Limpar minha escolha
                    </a>
                  </div>
                </div>

                <div className="d-flex justify-end">
                  <button className="button -md -dark-1 text-white -dark-button-white mt-40">
                    Finalizar
                  </button>
                </div>

                <div className="d-flex justify-between items-center mt-40">
                  <a
                    href="#"
                    className="button -icon -purple-3 h-50 text-purple-1"
                  >
                    Netiqueta do Fórum
                    <i className="icon-arrow-top-right text-13 ml-10"></i>
                  </a>

                  <div
                    id="dd21button"
                    onClick={() => {
                      document
                        .getElementById("dd21button")
                        .classList.toggle("-is-dd-active");
                      document
                        .getElementById("dd21content")
                        .classList.toggle("-is-el-visible");
                    }}
                    className="dropdown js-dropdown js-category-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 bg-white -dark-bg-dark-2 -dark-border-white-10 border-light rounded-8 px-20 py-10 "
                      data-el-toggle=".js-category-toggle"
                      data-el-toggle-active=".js-category-active"
                    >
                      <span className="js-dropdown-title">Ir para...</span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd21content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Animação
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Design
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Ilustração
                          </a>
                        </div>

                        <div>
                          <a href="#" className="d-block js-dropdown-link">
                            Negócios
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="button -icon -purple-3 h-50 text-purple-1"
                  >
                    Compartilhar Exemplos de Digital
                    <i className="icon-arrow-top-right text-13 ml-10"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-lg-3">
            <div className="row y-gap-30">
              <div className="col-12">
                <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <h5 className="text-17 fw-500 mb-30">Quiz Completo</h5>

                  <div className="d-flex items-center">
                    <div className="progress-bar w-1/1">
                      <div className="progress-bar__bg bg-light-3"></div>
                      <div className="progress-bar__bar bg-purple-1 w-1/4"></div>
                    </div>

                    <div className="d-flex y-gap-10 justify-between items-center ml-15">
                      <div>25%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="pt-20 pb-30 px-30 rounded-16 bg-white -dark-bg-dark-1 shadow-4">
                  <h5 className="text-17 fw-500 mb-30">Navegação do Quiz</h5>

                  <div className="row x-gap-10 y-gap-10">
                    <div className="col-auto">
                      <a
                        href="#"
                        className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                      >
                        <div className="text-15 lh-1 fw-500">1</div>
                      </a>
                    </div>

                    <div className="col-auto">
                      <a
                        href="#"
                        className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                      >
                        <div className="text-15 lh-1 fw-500">2</div>
                      </a>
                    </div>

                    <div className="col-auto">
                      <a
                        href="#"
                        className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                      >
                        <div className="text-15 lh-1 fw-500">3</div>
                      </a>
                    </div>

                    <div className="col-auto">
                      <a
                        href="#"
                        className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                      >
                        <div className="text-15 lh-1 fw-500">4</div>
                      </a>
                    </div>

                    <div className="col-auto">
                      <a
                        href="#"
                        className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                      >
                        <div className="text-15 lh-1 fw-500">5</div>
                      </a>
                    </div>

                    <div className="col-auto">
                      <a
                        href="#"
                        className="button -single-icon -light-3 text-dark-1 size-35 rounded-8"
                      >
                        <div className="text-15 lh-1 fw-500">6</div>
                      </a>
                    </div>
                  </div>

                  <button className="button -md -dark-1 text-white -dark-button-white mt-30">
                    Finalizar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterNine />
    </div>
  );
}
