import React from "react";
import { blogs, tags } from "@/data/blog";

export default function BlogDetails({ id }) {
  const data = blogs.filter((elm) => elm.id == id)[0] || blogs[0];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <div className="text-14 text-purple-1 uppercase fw-500 mb-8">
                    {data.category.toUpperCase()}
                  </div>

                  <h1 className="page-header__title lh-14">
                    {data.title.split(" ").slice(0, 4).join(" ")}
                    <br />
                    {data.title.split(" ").slice(4, -1).join(" ")}
                  </h1>

                  <p className="page-header__text">{data.date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md">
        <div className="container">
          <div
            className="ratio ratio-16:9 rounded-8 bg-image js-lazy"
            style={{ backgroundImage: `url(${data.imageSrc})` }}
            data-bg="img/blog/blog-single/images.png"
          ></div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="blogSection">
            <div className="blogCard">
              <div className="row justify-center">
                <div className="col-xl-8 col-lg-9 col-md-11">
                  <div className="blogCard__content">
                    <h4 className="text-18 fw-500">
                      A importância da educação ambiental para a saúde
                    </h4>
                    <p className="mt-30">
                      A educação ambiental é fundamental para promover a
                      conscientização sobre o impacto das nossas ações no meio
                      ambiente e, consequentemente, na saúde coletiva. Compreender
                      como a poluição, o descarte inadequado de resíduos e o uso
                      excessivo de recursos naturais afetam o nosso bem-estar é
                      essencial para adotar hábitos mais sustentáveis.
                    </p>
                    <p className="mt-20">
                      Além disso, a educação ambiental contribui para a prevenção de doenças, pois incentiva práticas que evitam a contaminação do solo, da água e do ar. Ao aprender sobre a importância da reciclagem, do consumo consciente e da preservação das florestas, desenvolvemos uma relação mais saudável com o planeta e com a nossa própria saúde.
                    </p>
                    <p className="mt-20">
                      A integração entre saúde e meio ambiente é cada vez mais reconhecida por profissionais das áreas médicas e ambientais. Investir em educação ambiental é investir em qualidade de vida, bem-estar e longevidade para toda a sociedade.
                    </p>
                    <ul className="ul-list y-gap-10 mt-30">
                      <li>
                        A educação ambiental incentiva práticas que reduzem a
                        poluição do ar e da água, prevenindo doenças respiratórias
                        e infecciosas.
                      </li>
                      <li>
                        Promove o consumo consciente e a preservação dos recursos
                        naturais, garantindo qualidade de vida para as próximas
                        gerações.
                      </li>
                      <li>
                        Estimula a participação em ações coletivas de cuidado com o
                        meio ambiente, fortalecendo a saúde das comunidades.
                      </li>
                      <li>
                        Contribui para a formação de cidadãos responsáveis, capazes
                        de tomar decisões que beneficiam tanto o planeta quanto a
                        saúde humana.
                      </li>
                      <li>
                        Incentiva o contato com a natureza, promovendo benefícios físicos e mentais, como redução do estresse e melhora da imunidade.
                      </li>
                      <li>
                        Ajuda a combater as mudanças climáticas, que impactam diretamente a saúde pública, como ondas de calor, enchentes e proliferação de vetores de doenças.
                      </li>
                    </ul>
                    <p className="mt-30">
                      Ao investir em educação ambiental, estamos cuidando do nosso
                      presente e futuro. Pequenas atitudes, como separar o lixo,
                      economizar água e valorizar áreas verdes, fazem grande
                      diferença na prevenção de doenças e na promoção do bem-estar.
                      A saúde do planeta está diretamente ligada à saúde de todos
                      nós.
                    </p>
                    <p className="mt-20">
                      Escolas, empresas e comunidades têm papel fundamental na disseminação de práticas sustentáveis. Incentivar projetos de educação ambiental é garantir que mais pessoas estejam preparadas para enfrentar os desafios ambientais e cuidar da saúde coletiva.
                    </p>
                    <p className="mt-20">
                      
                    </p>
                  </div>

                  <div className="row y-gap-30 pt-30">
                    <div className="col-sm-6">
                      <img
                        src="/assets/img/blog/blog-single/1.png"
                        alt="image"
                        className="w-1/1 initial-img rounded-8"
                      />
                    </div>
                    <div className="col-sm-6">
                      <img
                        src="/assets/img/blog/blog-single/2.png"
                        alt="image"
                        className="w-1/1 initial-img rounded-8"
                      />
                    </div>
                  </div>

                  <div className="blogCard__content pt-30">
                    <p>
                      Escolas, empresas e comunidades têm papel fundamental na disseminação de práticas sustentáveis. Incentivar projetos de educação ambiental é garantir que mais pessoas estejam preparadas para enfrentar os desafios ambientais e cuidar da saúde coletiva.
                      <br />
                      <br />
                      Participe de iniciativas ambientais, compartilhe conhecimento
                      e inspire outras pessoas a também adotarem práticas
                      sustentáveis. O equilíbrio entre meio ambiente e saúde
                      depende das escolhas que fazemos diariamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center pt-30">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="row y-gap-20 justify-between items-center">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="lh-1 text-dark-1 fw-500 mr-30">Compartilhar</div>

                      <div className="d-flex x-gap-15">
                        <a href="#">Fb</a>
                        <a href="#">Tw</a>
                        <a href="#">In</a>
                        <a href="#">Ln</a>
                      </div>
                    </div>
                  </div>

                  <div className="col-auto">
                    <div className="row x-gap-10 y-gap-10">
                      {tags.slice(0, 4).map((elm, i) => (
                        <div key={i} className="col-auto">
                          <a
                            href={elm.href}
                            className="badge -sm -light-3 text-11 text-dark-1"
                          >
                            {elm.name}
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center pt-30">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="d-flex border-bottom-light border-top-light py-30">
                  <div className="">
                    <div
                      className="bg-image size-70 rounded-full js-lazy"
                      data-bg="img/blog/blog-single/author.png"
                    ></div>
                  </div>

                  <div className="ml-30 md:ml-20">
                    <h4 className="text-17 lh-15 fw-500">Dra. Camila Souza</h4>
                    <div className="mt-5">Assistente médica</div>
                    <p className="mt-25">
                      O Instituto Saber+ proporciona uma experiência incrível para quem busca conhecimento em saúde e meio ambiente. Os cursos são completos, com abordagem prática e professores dedicados. Recomendo para todos que desejam aprimorar sua formação e contribuir para um mundo melhor!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="border-bottom-light py-30">
                  <div className="row x-gap-50 justify-between items-center">
                    <div className="col-md-4 col-6">
                      <a
                        href="blog-single"
                        className="related-nav__item -prev decoration-none"
                      >
                        <div className="related-nav__arrow">
                          <i
                            className="icon size-20 pt-5"
                            data-feather="arrow-left"
                          ></i>
                        </div>
                        <div className="related-nav__content">
                          <div className="text-17 text-dark-1 fw-500">Anterior</div>
                          <p className="text-dark-1 mt-8">
                            5 passos incríveis para se livrar do estresse e da rotina
                          </p>
                        </div>
                      </a>
                    </div>

                    <div className="col-auto lg:d-none">
                      <div className="related-nav__icon row">
                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        <div className="col-4">
                          <span></span>
                        </div>

                        className="col-4"
                        <div>
                          <span></span>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-6 d-flex justify-end">
                      <a
                        href="blog-single"
                        className="related-nav__item -next text-right decoration-none"
                      >
                        <div className="related-nav__content">
                          <div className="text-17 text-dark-1 fw-500">Próximo</div>
                          <p className="text-dark-1 mt-8">
                            Clientes satisfeitos deixam comentários positivos com menos frequência
                          </p>
                        </div>
                        <div className="related-nav__arrow">
                          <i
                            className="icon size-20 pt-5"
                            data-feather="arrow-right"
                          ></i>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-center pt-30">
              <div className="col-xl-8 col-lg-9 col-md-11">
                <div className="blogPost -comments">
                  <div className="blogPost__content">
                    <h2 className="text-20 fw-500">Avaliações</h2>

                    <ul className="comments__list mt-30">
                      <li className="comments__item">
                        <div className="comments__item-inner md:direction-column">
                          <div className="comments__img mr-20">
                            <div
                              className="bg-image rounded-full js-lazy"
                              style={{
                                backgroundImage:
                                  "url(/assets/img/avatars/1.png)",
                              }}
                            ></div>
                          </div>
                          <div className="comments__body md:mt-15">
                            <div className="comments__header">
                              <h4 className="text-17 fw-500 lh-15">
                                Psi. Juliana Fernandes
                                <span className="text-13 text-light-1 fw-400">
                                  3 dias atrás
                                </span>
                              </h4>
                              <div className="stars"></div>
                            </div>
                            <h5 className="text-15 fw-500 mt-15">
                              Melhor app já criado de pós-graduação!
                            </h5>
                            <div className="comments__text mt-10">
                              <p>
                                O Instituto Saber+ é referência em educação
                                ambiental! Os cursos são completos, com professores
                                experientes e conteúdos que realmente fazem a
                                diferença para quem quer contribuir com a
                                sustentabilidade. Recomendo para todos que desejam
                                transformar o amanhã!
                              </p>
                            </div>
                            <div className="comments__helpful mt-20">
                              <span className="text-13 text-purple-1">
                                Essa avaliação foi útil?
                              </span>
                              <button className="button text-13 -sm -purple-1 text-white">
                                Sim
                              </button>
                              <button className="button text-13 -sm -light-7 text-purple-1">
                                Não
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="comments__item">
                        <div className="comments__item-inner md:direction-column">
                          <div className="comments__img mr-20">
                            <div
                              className="bg-image rounded-full js-lazy"
                              style={{
                                backgroundImage:
                                  "url(/assets/img/avatars/1.png)",
                              }}
                            ></div>
                          </div>
                          <div className="comments__body md:mt-15">
                            <div className="comments__header">
                              <h4 className="text-17 fw-500 lh-15">
                                Dra. Maria  Eduarda
                                <span className="text-13 text-light-1 fw-400">
                                  3 dias atrás
                                </span>
                              </h4>
                              <div className="stars"></div>
                            </div>
                            <h5 className="text-15 fw-500 mt-15">
                              Incrível!
                            </h5>
                            <div className="comments__text mt-10">
                              <p>
                                Estou muito satisfeita com os cursos de saúde do
                                Instituto Saber+. O conteúdo é atualizado, os
                                professores são atenciosos e o suporte ao aluno é
                                excelente. Aprendi muito e consegui aplicar os
                                conhecimentos na minha rotina profissional.
                              </p>
                            </div>
                            <div className="comments__helpful mt-20">
                              <span className="text-13 text-purple-1">
                                Essa avaliação foi útil?
                              </span>
                              <button className="button text-13 -sm -purple-1 text-white">
                                Sim
                              </button>
                              <button className="button text-13 -sm -light-7 text-purple-1">
                                Não
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="comments__item">
                        <div className="comments__item-inner md:direction-column">
                          <div className="comments__img mr-20">
                            <div
                              className="bg-image rounded-full js-lazy"
                              style={{
                                backgroundImage:
                                  "url(/assets/img/avatars/1.png)",
                              }}
                            ></div>
                          </div>
                          <div className="comments__body md:mt-15">
                            <div className="comments__header">
                              <h4 className="text-17 fw-500 lh-15">
                                Rafael Mendes
                                <span className="text-13 text-light-1 fw-400">
                                  2 dias atrás
                                </span>
                              </h4>
                              <div className="stars"></div>
                            </div>
                            <h5 className="text-15 fw-500 mt-15">
                              Cursos de Psicologia
                            </h5>
                            <div className="comments__text mt-10">
                              <p>
                                Os cursos pós de psicologia do Instituto Saber+ são
                                incríveis! As aulas são dinâmicas, os temas são
                                atuais e o ambiente virtual é muito fácil de usar.
                                Recomendo para quem busca crescimento e atualização
                                na área.
                              </p>
                            </div>
                            <div className="comments__helpful mt-20">
                              <span className="text-13 text-purple-1">
                                Essa avaliação foi útil?
                              </span>
                              <button className="button text-13 -sm -purple-1 text-white">
                                Sim
                              </button>
                              <button className="button text-13 -sm -light-7 text-purple-1">
                                Não
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="respondForm pt-30">
                  <h3 className="text-20 fw-500">Escreva uma avaliação</h3>

                  <div className="mt-30">
                    <h4 className="text-16 fw-500">
                      Como foi sua experiência com o curso?
                    </h4>
                    <div className="d-flex x-gap-10 pt-10">
                      <div className="icon-star text-14 text-yellow-1"></div>
                      <div className="icon-star text-14 text-yellow-1"></div>
                      <div className="icon-star text-14 text-yellow-1"></div>
                      <div className="icon-star text-14 text-yellow-1"></div>
                      <div className="icon-star text-14 text-yellow-1"></div>
                    </div>
                  </div>

                  <form
                    className="contact-form respondForm__form row y-gap-30 pt-30"
                    onSubmit={handleSubmit}
                  >
                    <div className="col-12">
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Título da avaliação
                      </label>
                      <input
                        required
                        type="text"
                        name="title"
                        placeholder="Ótimos cursos"
                      />
                    </div>
                    <div className="col-12">
                      <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                        Conteúdo da avaliação
                      </label>
                      <textarea
                        required
                        name="comment"
                        placeholder="Mensagem"
                        rows="8"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        name="submit"
                        id="submit"
                        className="button -md -purple-1 text-white"
                      >
                        Enviar avaliação
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
