import Star from "@/components/common/Star";
import { coursesData } from "@/data/courses";
import React, { useState, useEffect } from "react";
import {
  teamMembers,
  teamMembersFull,
  instractorsEight,
  instractorsNine,
  marketingCoordinator,
} from "@/data/instractors";

import { Link } from "react-router-dom";
export default function InstractorSingle({ id }) {
  const [activeTab, setActiveTab] = useState(1);
  const [pageItem, setPageItem] = useState(teamMembers[0]);
  useEffect(() => {
    const filtered = [
      ...teamMembers,
      ...teamMembersFull,
      ...instractorsEight,
      ...instractorsNine,
      marketingCoordinator,
    ].filter((elm) => elm.id == id)[0];

    if (filtered) {
      setPageItem(filtered);
    }
  }, []);

  return (
    <>
      <section className="page-header -type-3">
        <div className="page-header__bg bg-purple-1"></div>
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="page-header__content">
                <div className="page-header__img">
                  <img
                    style={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      objectFit: "cover",
                    }}
                    src={
                      pageItem.image ||
                      pageItem.imageSrc ||
                      "/assets/img/Instructors-single/1.png"
                    }
                    alt="image"
                  />
                </div>

                <div className="page-header__info pt-20">
                  <h1 className="text-30 lh-14 fw-700 text-white">
                    {pageItem.name}
                  </h1>
                  <div className="text-white">{pageItem.role}</div>
                  <div className="d-flex x-gap-20 pt-15">
                    <div className="d-flex items-center text-white">
                      <div className="icon-star mr-10"></div>
                      <div className="text-13 lh-1">Avaliação do Instrutor</div>
                    </div>

                    <div className="d-flex items-center text-white">
                      <div className="icon-video-file mr-10"></div>
                      <div className="text-13 lh-1">
                        {pageItem.reviews || 3545} Avaliações
                      </div>
                    </div>

                    <div className="d-flex items-center text-white">
                      <div className="icon-person-3 mr-10"></div>
                      <div className="text-13 lh-1">
                        {pageItem.students || pageItem.studentCount || 143} Alunos
                      </div>
                    </div>

                    <div className="d-flex items-center text-white">
                      <div className="icon-play mr-10"></div>
                      <div className="text-13 lh-1">
                        {pageItem.courses || pageItem.courseCount || 453} Curso
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex items-center mt-30">
                  <button className="button -md -green-1 text-dark-1">
                    Enviar Mensagem
                  </button>

                  <div className="d-flex items-center x-gap-15 text-white ml-25">
                    {pageItem.socialProfile?.map((itm, index) => (
                      <a key={index} href={itm.url}>
                        <i className={`fa ${itm.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-8 col-lg-9 col-md-11">
              <div className="tabs -active-purple-2 js-tabs">
                <div className="tabs__controls d-flex js-tabs-controls">
                  <button
                    onClick={() => setActiveTab(1)}
                    className={`tabs__button js-tabs-button ${
                      activeTab == 1 ? "is-active" : ""
                    }`}
                    data-tab-target=".-tab-item-1"
                    type="button"
                  >
                    Visão Geral
                  </button>
                  <button
                    onClick={() => setActiveTab(2)}
                    className={`tabs__button js-tabs-button ml-30 ${
                      activeTab == 2 ? "is-active" : ""
                    } `}
                    data-tab-target=".-tab-item-2"
                    type="button"
                  >
                    Cursos
                  </button>
                </div>

                <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
                  <div
                    className={`tabs__pane -tab-item-1  ${
                      activeTab == 1 ? "is-active" : ""
                    } `}
                  >
                    <h4 className="text-20">Descrição</h4>
                    <p className="text-light-1 mt-30">
                      Phasellus enim magna, varius et commodo ut, ultricies
                      vitae velit. Ut nulla tellus, eleifend euismod
                      pellentesque vel, sagittis vel justo. In libero urna,
                      venenatis sit amet ornare non, suscipit nec risus. Sed
                      consequat justo non mauris pretium at tempor justo
                      sodales. Quisque tincidunt laoreet malesuada. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur.
                      <br />
                      <br />
                      Este curso é destinado a pessoas interessadas em Design UI/UX.
                      Começaremos do início e seguiremos passo a passo. Se você já tem alguma experiência em Design UI/UX, mas quer aprender a usar o Adobe XD, este curso também é perfeito para você!
                      <br />
                      <br />
                      Primeiro, vamos abordar as diferenças entre UX e UI Design. Veremos o briefing deste projeto real, depois aprenderemos sobre wireframes de baixa fidelidade e como usar kits de UI existentes.
                    </p>
                    <button className="button underline text-purple-1 mt-30">
                      Mostrar mais
                    </button>
                  </div>

                  <div
                    className={`tabs__pane -tab-item-2 ${
                      activeTab == 2 ? "is-active" : ""
                    } `}
                  >
                    <div className="row">
                      {coursesData.slice(0, 2).map((elm, i) => (
                        <div key={i} className="col-md-6">
                          <div className="coursesCard -type-1 rounded-8 shadow-3 bg-white">
                            <div className="relative">
                              <div className="coursesCard__image overflow-hidden rounded-top-8">
                                <img
                                  className="w-1/1"
                                  src={elm.imageSrc}
                                  alt="image"
                                />
                                <div className="coursesCard__image_overlay rounded-top-8"></div>
                              </div>
                              <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                                {elm.popular && (
                                  <div>
                                    <div className="px-15 rounded-200 bg-purple-1">
                                      <span className="text-11 lh-1 uppercase fw-500 text-white">
                                        Popular
                                      </span>
                                    </div>
                                  </div>
                                )}
                                {elm.bestSeller && (
                                  <div>
                                    <div className="px-15 rounded-200 bg-green-1">
                                      <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                        Mais vendidos
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>

                            <div className="h-100 pt-20 pb-15 px-30">
                              <div className="d-flex items-center">
                                <div className="text-14 lh-1 text-yellow-1 mr-10">
                                  {elm.rating}
                                </div>
                                <div className="d-flex x-gap-5 items-center">
                                  <Star star={Math.round(elm.rating)} />
                                </div>
                                <div className="text-13 lh-1 ml-10">
                                  ({elm.ratingCount})
                                </div>
                              </div>

                              <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
                                <Link
                                  className="linkCustom"
                                  to={`/courses/${elm.id}`}
                                >
                                  {elm.title}
                                </Link>
                              </div>

                              <div className="d-flex x-gap-10 items-center pt-10">
                                <div className="d-flex items-center">
                                  <div className="mr-8">
                                    <img
                                      src="/assets/img/coursesCards/icons/1.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-14 lh-1">
                                    {elm.lessonCount} aula
                                  </div>
                                </div>

                                <div className="d-flex items-center">
                                  <div className="mr-8">
                                    <img
                                      src="/assets/img/coursesCards/icons/2.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-14 lh-1">{`${Math.floor(
                                    elm.duration / 60,
                                  )}h ${Math.floor(elm.duration % 60)}m`}</div>
                                </div>

                                <div className="d-flex items-center">
                                  <div className="mr-8">
                                    <img
                                      src="/assets/img/coursesCards/icons/3.svg"
                                      alt="icon"
                                    />
                                  </div>
                                  <div className="text-14 lh-1">
                                    {elm.level}
                                  </div>
                                </div>
                              </div>

                              <div className="coursesCard-footer">
                                <div className="coursesCard-footer__author">
                                  <img src={elm.authorImageSrc} alt="image" />
                                  <div>Psi. Juliana Fernandes{elm.authorName}</div>
                                </div>

                                <div className="coursesCard-footer__price">
                                  {elm.paid ? (
                                    <>
                                      <div>R${elm.originalPrice}</div>
                                      <div>R${elm.discountedPrice}</div>
                                    </>
                                  ) : (
                                    <>
                                      <div></div>
                                      <div>Grátis</div>
                                    </>
                                  )}
                                </div>
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
        </div>
      </div>
    </>
  );
}
