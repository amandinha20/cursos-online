import Instractor from "./Instractor";
import Reviews from "./Reviews";
import Overview from "./Overview";
import CourseContent from "./CourseContent";
import Star from "../common/Star";
import { coursesData } from "@/data/courses";
import React, { useState, useEffect } from "react";

import ModalVideo from "react-modal-video";
import ModalVideoComponent from "../common/ModalVideo";

import { useContextElement } from "@/context/Context";
const menuItems = [
  { id: 1, href: "#overview", text: "Visão Geral", isActive: true },
  { id: 2, href: "#course-content", text: "Conteúdo do Curso", isActive: false },
  { id: 3, href: "#instructors", text: "Instrutores", isActive: false },
  { id: 4, href: "#reviews", text: "Avaliações", isActive: false },
];
export default function CourseDetailsSix({ id }) {
  const [pageItem, setPageItem] = useState(coursesData[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);
  const { isAddedToCartCourses, addCourseToCart } = useContextElement();
  useEffect(() => {
    setPageItem(coursesData.filter((elm) => elm.id == id)[0] || coursesData[0]);
  }, []);

  return (
    <>
      <section className="page-header -type-5 bg-dark-1">
        <div className="page-header__bg">
          <div
            className="bg-image js-lazy"
            data-bg="img/event-single/bg.png"
          ></div>
        </div>

        <div className="container">
          <div className="page-header__content pt-80 pb-90">
            <div className="row y-gap-30 justify-between">
              <div className="col-xl-6 col-lg-6">
                <div className="d-flex x-gap-15 y-gap-10 pb-20">
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400">
                      MAIS VENDIDO
                    </div>
                  </div>
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400">
                      NOVO
                    </div>
                  </div>
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
                      POPULAR
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="text-30 lh-14 text-white pr-60 lg:pr-0">
                    {pageItem.title}
                  </h1>
                </div>

                <p className="text-dark-3 mt-20">
                  Use o XD para conseguir um emprego em UI Design, Interface do Usuário, Design de Experiência do Usuário, UX Design & Web Design
                </p>

                <div className="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20">
                  <div className="d-flex items-center text-dark-3">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">
                      {pageItem.rating}
                    </div>
                    <div className="d-flex x-gap-5 items-center">
                      <Star textSize={"text-11"} star={pageItem.rating} />
                    </div>
                    <div className="text-14 lh-1 ml-10">
                      ({pageItem.ratingCount})
                    </div>
                  </div>

                  <div className="d-flex items-center text-dark-3">
                    <div className="icon icon-person-3 text-13"></div>
                    <div className="text-14 ml-8">
                       853 inscritos neste curso
                    </div>
                  </div>

                  <div className="d-flex items-center text-dark-3">
                    <div className="icon icon-wall-clock text-13"></div>
                    <div className="text-14 ml-8">Última atualização 11/2021</div>
                  </div>
                </div>

                <div className="d-flex items-center pt-20">
                  <div
                    className="bg-image size-30 rounded-full js-lazy"
                    style={{
                      backgroundImage: `url(${pageItem.authorImageSrc})`,
                    }}
                  ></div>
                  <div className="text-14 lh-1 ml-10 text-dark-3">
                    {pageItem.authorName}
                  </div>
                </div>

                <div className="mt-30">
                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-video-file"></div>
                      <div className="ml-10">Aulas</div>
                    </div>
                    <div className="text-white">20</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-puzzle"></div>
                      <div className="ml-10">Questionários</div>
                    </div>
                    <div className="text-white">3</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-clock-2"></div>
                      <div className="ml-10">Duração</div>
                    </div>
                    <div className="text-white">13 Horas</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-bar-chart-2"></div>
                      <div className="ml-10">Nível de habilidade</div>
                    </div>
                    <div className="text-white">Iniciante</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-translate"></div>
                      <div className="ml-10">Idioma</div>
                    </div>
                    <div className="text-white">Português</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-badge"></div>
                      <div className="ml-10">Certificado</div>
                    </div>
                    <div className="text-white">Sim</div>
                  </div>

                  <div className="d-flex justify-between py-8 border-bottom-light-2">
                    <div className="d-flex items-center text-white">
                      <div className="icon-infinity"></div>
                      <div className="ml-10">Acesso vitalício completo</div>
                    </div>
                    <div className="text-white">Sim</div>
                  </div>
                </div>

                <div className="d-flex mt-30">
                  <a
                    href="#"
                    className="d-flex justify-center items-center size-40 rounded-full text-dark-3"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>

                  <a
                    href="#"
                    className="d-flex justify-center items-center size-40 rounded-full text-dark-3"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>

                  <a
                    href="#"
                    className="d-flex justify-center items-center size-40 rounded-full text-dark-3"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>

                  <a
                    href="#"
                    className="d-flex justify-center items-center size-40 rounded-full text-dark-3"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="col-xl-5 col-lg-6">
                <div className="relative">
                  <img className="w-1/1" src={pageItem.imageSrc} alt="image" />
                  <div className="absolute-full-center d-flex justify-center items-center">
                    <div
                      onClick={() => setIsOpen(true)}
                      className="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor"
                    >
                      <div className="icon-play text-18"></div>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  <div className="d-flex justify-between items-center">
                    {pageItem.paid ? (
                      <>
                        <div className="text-24 lh-1 text-white fw-500">
                          ${pageItem.originalPrice}
                        </div>
                        <div className="lh-1 line-through text-dark-3">
                          ${pageItem.discountedPrice}
                        </div>
                      </>
                    ) : (
                      <>
                        <div></div>
                        <div className="lh-1 line-through text-dark-3">
                          Free
                        </div>
                      </>
                    )}
                  </div>

                  <div className="row x-gap-30 y-gap-20 pt-30">
                    <div className="col-sm-6">
                      <button
                        className="button -md -purple-1 text-white w-1/1"
                        onClick={() => addCourseToCart(pageItem.id)}
                      >
                        {isAddedToCartCourses(pageItem.id)
                          ? "Já adicionado"
                          : "Adicionar ao Carrinho"}
                      </button>
                    </div>
                    <div className="col-sm-6">
                      <button className="button -md -outline-green-1 text-green-1 w-1/1">
                        Comprar Agora
                      </button>
                    </div>
                  </div>

                  <div className="text-14 lh-1 text-dark-3 mt-30">
                    Garantia de devolução do dinheiro em 30 dias
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-lg layout-pb-md">
        <div className="container">
          <div className="tabs -side js-tabs">
            <div className="row y-gap-40">
              <div className="col-lg-4">
                <div className="tabs__controls y-gap-5 js-tabs-controls">
                  {menuItems.map((elm, i) => (
                    <div key={i}>
                      <button
                        key={i}
                        onClick={() => setActiveTab(elm.id)}
                        className={`tabs__button text-18 fw-500 js-tabs-button ${
                          activeTab == elm.id ? "is-active" : ""
                        } `}
                        type="button"
                      >
                        {elm.text}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-8">
                <div className="tabs__content js-tabs-content">
                  <div
                    className={`tabs__pane -tab-item-1 ${
                      activeTab == 1 ? "is-active" : ""
                    } `}
                  >
                    <Overview />
                  </div>

                  <div
                    className={`tabs__pane -tab-item-2 ${
                      activeTab == 2 ? "is-active" : ""
                    } `}
                  >
                    <CourseContent />
                  </div>

                  <div
                    className={`tabs__pane -tab-item-3 ${
                      activeTab == 3 ? "is-active" : ""
                    } `}
                  >
                    <Instractor />
                  </div>

                  <div
                    className={`tabs__pane -tab-item-4 ${
                      activeTab == 4 ? "is-active" : ""
                    } `}
                  >
                    <Reviews />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideoComponent
        videoId={"LlCwHnp3kL4"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
}
