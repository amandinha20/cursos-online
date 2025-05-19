import React from "react";
import { events, learnList, eventContent } from "@/data/events";
import Socials from "../common/Socials";
import { instractorsNine } from "@/data/instractors";
import Star from "../common/Star";
import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
export default function EventDetails({ id }) {
  const { addEventToCart, isAddedToCartEvents } = useContextElement();
  const data = events.filter((elm) => elm.id == id)[0] || events[0];
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="page-header -type-2">
        <div className="page-header__bg">
          <div
            className="bg-image js-lazy"
            style={{ backgroundImage: `url(${data.imgSrc})` }}
            data-bg=""
          ></div>
        </div>

        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <div className="page-header__info d-flex items-center">
                  <div className="d-flex items-center text-white mr-15">
                    <div className="icon icon-calendar-2"></div>
                    <div className="text-14 ml-8">{data.date}</div>
                  </div>

                  <div className="d-flex items-center text-white mr-15">
                    <div className="icon icon-location"></div>
                    <div className="text-14 ml-8">{data.location}</div>
                  </div>
                </div>

                <div>
                  <h1 className="page-header__title text-white mt-20">
                    {data.desc}
                  </h1>
                </div>

                <div>
                  <div className="d-flex x-gap-50 pt-12">
                    <div className="text-white">
                      <div className="text-40 lh-12 fw-700">20</div>
                      <div className="text-15">Dias</div>
                    </div>

                    <div className="text-white">
                      <div className="text-40 lh-12 fw-700">32</div>
                      <div className="text-15">Horas</div>
                    </div>

                    <div className="text-white">
                      <div className="text-40 lh-12 fw-700">57</div>
                      <div className="text-15">Minutos</div>
                    </div>

                    <div className="text-white">
                      <div className="text-40 lh-12 fw-700">13</div>
                      <div className="text-15">Segundos</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-50 layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50">
            <div className="col-xl-8 col-lg-8 lg:order-2">
              <h4 className="text-20">Sobre o Evento</h4>
              <p className="text-light-1 mt-30">
                Phasellus enim magna, varius et commodo ut, ultricies vitae
                velit. Ut nulla tellus, eleifend euismod pellentesque vel,
                sagittis vel justo. In libero urna, venenatis sit amet ornare
                non, suscipit nec risus. Sed consequat justo non mauris pretium
                at tempor justo sodales. Quisque tincidunt laoreet malesuada.
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur.
                <br />
                <br />
                Este curso é destinado a pessoas interessadas em Design UI/UX. Começaremos do início e seguiremos passo a passo. Se você já tem alguma experiência em Design UI/UX, mas quer aprender a usar o Adobe XD, este curso também é perfeito para você!
                <br />
                <br />
                Primeiro, vamos abordar as diferenças entre UX e UI Design. Veremos o briefing deste projeto real, depois aprenderemos sobre wireframes de baixa fidelidade e como usar kits de UI existentes.
              </p>
              <button className="button underline text-purple-1 mt-30">
                Mostrar mais
              </button>

              <div className="mt-60">
                <h4 className="text-20 mb-30">O que você vai aprender</h4>
                <div className="row x-gap-100 justfiy-between">
                  <div className="col-md-6">
                    <div className="y-gap-20">
                      {learnList.slice(0, 6).map((elm, i) => (
                        <div key={i} className="d-flex items-center">
                          <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                            <i className="icon-check text-6"></i>
                          </div>
                          <p>{elm}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="y-gap-20">
                      {learnList.slice(6, -1).map((elm, i) => (
                        <div key={i} className="d-flex items-center">
                          <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                            <i className="icon-check text-6"></i>
                          </div>
                          <p>{elm}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-60">
                <h4 className="text-20">Conteúdo do Evento</h4>
                <ul className="ul-list y-gap-15 pt-30">
                  {eventContent.map((elm, i) => (
                    <li key={i}>{elm}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-60">
                <h4 className="text-20 mb-30">Nossos Palestrantes</h4>
                <div className="row y-gap-30">
                  {instractorsNine.slice(0, 4).map((elm, i) => (
                    <div key={i} className="col-lg-3 col-md-6">
                      <div className="text-center">
                        <img src={elm.image} alt="image" />
                        <h5 className="text-17 fw-500 mt-20">
                          <Link
                            className="linkCustom"
                            to={`/instructors/${elm.id}`}
                          >
                            {elm.name}
                          </Link>
                        </h5>
                        <p className="">{elm.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="blogPost -comments mt-60">
                <div className="blogPost__content">
                  <h2 className="text-20 fw-500">Avaliações</h2>

                  <ul className="comments__list mt-30">
                    <li className="comments__item">
                      <div className="comments__item-inner md:direction-column">
                        <div className="comments__img mr-20">
                          <div
                            className="bg-image rounded-full js-lazy"
                            style={{
                              backgroundImage: "url(/assets/img/avatars/1.png)",
                            }}
                            data-bg="/assets/img/avatars/1.png"
                          ></div>
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              Ali Tufan
                              <span className="text-13 text-light-1 fw-400">
                                3 Days ago
                              </span>
                            </h4>

                            <div className="stars"></div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">
                            O melhor Design de LMS
                          </h5>
                          <div className="comments__text mt-10">
                            <p>
                              Este curso é muito aplicável. O Professor Ng explica precisamente cada algoritmo e ainda tenta dar uma intuição para os conceitos matemáticos e estatísticos por trás de cada algoritmo. Muito obrigado.
                            </p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <span className="text-13 text-purple-1">
                              Esta avaliação foi útil?
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
                              backgroundImage: "url(/assets/img/avatars/1.png)",
                            }}
                            data-bg="/assets/img/avatars/1.png"
                          ></div>
                        </div>

                        <div className="comments__body md:mt-15">
                          <div className="comments__header">
                            <h4 className="text-17 fw-500 lh-15">
                              Ali Tufan
                              <span className="text-13 text-light-1 fw-400">
                                3 Days ago
                              </span>
                            </h4>

                            <div className="stars"></div>
                          </div>

                          <h5 className="text-15 fw-500 mt-15">
                            O melhor Design de LMS
                          </h5>
                          <div className="comments__text mt-10">
                            <p>
                              Este curso é muito aplicável. O Professor Ng explica precisamente cada algoritmo e ainda tenta dar uma intuição para os conceitos matemáticos e estatísticos por trás de cada algoritmo. Muito obrigado.
                            </p>
                          </div>

                          <div className="comments__helpful mt-20">
                            <span className="text-13 text-purple-1">
                              Esta avaliação foi útil?
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

              <div className="respondForm mt-60">
                <h3 className="text-20 fw-500">Escreva uma Avaliação</h3>

                <div className="mt-30">
                  <h4 className="text-16 fw-500">Como foi o curso?</h4>
                  <div className="d-flex x-gap-10 pt-10">
                    <Star textSize={"text-14"} star={5} />
                  </div>
                </div>

                <form
                  className="contact-form respondForm__form row y-gap-30 pt-30"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Título da Avaliação
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      placeholder="Ótimos Cursos"
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Conteúdo da Avaliação
                    </label>
                    <textarea
                      required
                      name="comment"
                      placeholder="Mensagem"
                      rows="8"
                    ></textarea>
                  </div>
                  <Link to={"/login"} className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -purple-1 text-white"
                    >
                      Submit Review
                    </button>
                  </Link>
                </form>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 lg:order-1">
              <div className="event-info bg-white rounded-8 px-30 py-30 border-light shadow-1">
                <div className="d-flex justify-between items-center">
                  <div className="text-24 lh-1 fw-500 text-dark-1">$96.00</div>

                  <div className="d-flex items-center">
                    <div className="text-light-1 line-through mr-10">
                      $76.00
                    </div>
                    <div className="text-14 fw-500 text-dark-1 px-15 py-5 bg-green-1 rounded-4">
                      91% off
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-between mt-30 pb-10">
                  <div className="d-flex items-center text-dark-1">
                    <div className="icon-location"></div>
                    <div className="ml-10">Total Slot</div>
                  </div>
                  <div>587</div>
                </div>

                <div className="d-flex justify-between pt-10 border-top-light">
                  <div className="d-flex items-center text-dark-1">
                    <div className="icon-location"></div>
                    <div className="ml-10">Booked Slot</div>
                  </div>
                  <div>987</div>
                </div>

                <div
                  onClick={() => addEventToCart(data.id)}
                  className="button -md col-12 -purple-1 text-white mt-30 cursor"
                >
                  {isAddedToCartEvents(data.id) ? "Booked" : "Book Now"}
                </div>

                <div className="d-flex justify-center pt-25">
                  <Socials
                    componentsClass={
                      "d-flex justify-center items-center size-50 rounded-full"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
