import React, { useState, useEffect } from "react";
import Pagination from "../common/Pagination";
import { events, categories, findEvent, tags } from "@/data/events";
import { Link } from "react-router-dom";

export default function EventsTwo() {
  const [pageItems, setPageItems] = useState([]);
  const [ddActive, setDdActive] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("Todas as Categorias");
  useEffect(() => {
    if (currentCategory == "Todas as Categorias") {
      setPageItems(events);
    } else {
      let filtered = events.filter((elm) => elm.category == currentCategory);
      setPageItems(filtered);
    }
  }, [currentCategory]);
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Evento</h1>
                </div>

                <div>
                  <p className="page-header__text">
                  Nossa missão é oferecer cursos envolventes e selecionados a um
                  preço razoável.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            <div className="col-lg-3 lg:order-2">
              <div className="pr-30 lg:pr-0">
                <div className="sidebar -blog -no-border">
                  <div className="sidebar__item">
                    <h5 className="sidebar__title"> Encontrar Evento</h5>

                    <div className="sidebar-content -event">
                      <div className="sidebar-event">
                        <input
                          placeholder={"Evento de"}
                          style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "#fff",
                            maxWidth: "80%",
                          }}
                          className="sidebar-event__title text-14 lh-1"
                        />

                        <div className="sidebar-event__icon">
                          <div className="icon icon-search"></div>
                        </div>
                      </div>
                      <div className="sidebar-event">
                        <input
                          placeholder={"Todas as Categorias"}
                          style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "#fff",
                            maxWidth: "80%",
                          }}
                          className="sidebar-event__title text-14 lh-1"
                        />

                        <div className="sidebar-event__icon">
                          <div className="icon icon-search"></div>
                        </div>
                      </div>
                      <div className="sidebar-event">
                        <input
                          placeholder={"Localização"}
                          style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "#fff",
                            maxWidth: "80%",
                          }}
                          className="sidebar-event__title text-14 lh-1"
                        />

                        <div className="sidebar-event__icon">
                          <div className="icon icon-search"></div>
                        </div>
                      </div>
                      <div className="sidebar-event">
                        <input
                          placeholder={"Palavra-chave"}
                          style={{
                            border: "none",
                            outline: "none",
                            backgroundColor: "#fff",
                            maxWidth: "80%",
                          }}
                          className="sidebar-event__title text-14 lh-1"
                        />

                        <div className="sidebar-event__icon">
                          <div className="icon icon-search"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar__item">
                    <h5 className="sidebar__title">Postagens Recentes</h5>

                    <div className="sidebar-content -recent y-gap-20">
                      {events.slice(0, 3).map((elm, i) => (
                        <div
                          style={{ textDecoration: "none" }}
                          key={i}
                          className="sidebar-recent d-flex items-center"
                        >
                          <div className="sidebar-recent__image mr-15">
                            <img src={elm.imgSrc} alt="image" />
                          </div>

                          <div className="sidebar-recent__content">
                            <h5 className="text-15 lh-15 fw-500">
                              <Link
                                className="linkCustom"
                                to={`/events/${elm.id}`}
                              >
                                {elm.desc}
                              </Link>
                            </h5>
                            <div className="text-13 lh-1 mt-5">{elm.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="sidebar__item">
                    <h5 className="sidebar__title">Tags</h5>

                    <div className="sidebar-content -tags">
                      {tags.map((elm, i) => (
                        <div key={i} className="sidebar-tag">
                          <a
                            className="text-11 fw-500 text-dark-1"
                            href={elm.href}
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

            <div className="col-lg-9 lg:order-1">
              <div className="row y-gap-20 items-center justify-between pb-30">
                <div className="col-auto">
                  <div className="text-14 lh-12">
                    
                    Mostrando <span className="text-dark-1 fw-500">{pageItems.length}</span>{" "}
                    resultados totais
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="text-14 lh-12 fw-500 text-dark-1 mr-20">
                    Ordenar por:
                    </div>

                    <div
                      onClick={() => setDdActive((pre) => !pre)}
                      className={`dropdown js-dropdown js-category-active ${
                        ddActive ? "-is-dd-active" : ""
                      }`}
                    >
                      <div
                        className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                        data-el-toggle=".js-category-toggle"
                        data-el-toggle-active=".js-category-active"
                      >
                        <span className="js-dropdown-title">
                          {currentCategory == "Todas as Categorias"
                            ? "Mais populares"
                            : currentCategory}
                        </span>
                        <i className="icon text-9 ml-40 icon-chevron-down"></i>
                      </div>

                      <div
                        className={`toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle ${
                          ddActive ? "-is-el-visible" : ""
                        }`}
                      >
                        <div className="text-14 y-gap-15 js-dropdown-list">
                          {categories.map((elm, i) => (
                            <div
                              onClick={() => setCurrentCategory(elm)}
                              style={{ cursor: "pointer" }}
                              key={i}
                              className={`d-block js-dropdown-link cursor ${
                                currentCategory == elm ? "activeMenu" : ""
                              } `}
                            >
                              {elm}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row y-gap-30">
                {pageItems.map((elm, i) => (
                  <div key={i} className="col-lg-4 col-md-6">
                    <div className="eventCard -type-2 bg-white">
                      <div className="eventCard__img">
                        <img
                          className="w-1/1 rounded-top-8"
                          src={elm.imgSrc}
                          alt="image"
                        />
                      </div>

                      <div className="eventCard__content pt-25 pb-30 px-30">
                        <div className="d-flex items-center">
                          <div className="icon-calendar-2 text-16 mr-8"></div>
                          <div className="text-14">{elm.date}</div>
                        </div>

                        <h4 className="eventCard__title text-17 lh-15 fw-500 text-dark-4 mt-15">
                          <Link className="linkCustom" to={`/events/${elm.id}`}>
                            {" "}
                            {elm.desc}
                          </Link>
                        </h4>

                        <div className="d-flex items-center mt-15">
                          <div className="icon-location text-16 mr-8"></div>
                          <div className="text-14">{elm.location}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="row justify-center pt-60 lg:pt-40">
                <div className="col-auto">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
