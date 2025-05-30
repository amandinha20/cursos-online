import { Link } from "react-router-dom";
import { useState } from "react";

import React from "react";

export default function Sidebar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="sidebar -base-sidebar">
      <div className="sidebar__inner">
        <div>
          <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">Geral</div>
          <div>
            <div className="sidebar__item -is-active">
              <Link
                to="/about-1"
                className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
              >
                <i className="text-20 icon-discovery mr-15"></i>
                Explorar
              </Link>
            </div>

            <div className="sidebar__item ">
              <Link
                to="/courses-list-1"
                className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
              >
                <i className="text-20 icon-play-button mr-15"></i>
                Cursos
              </Link>
            </div>

            <div className="sidebar__item ">
              <a
                href="#"
                className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
              >
                <i className="text-20 icon-book mr-15"></i>
                Livros
              </a>
            </div>

            <div className="sidebar__item ">
              <Link
                to="/blog-list-1"
                className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
              >
                <i className="text-20 icon-list mr-15"></i>
                Artigos
              </Link>
            </div>

            <div className="sidebar__item ">
              <a
                href="#"
                className="-dark-sidebar-white d-flex items-center text-17 lh-1 fw-500"
              >
                <i className="text-20 icon-time-management mr-15"></i>
                Calendário
              </a>
            </div>
          </div>
        </div>

        <div className="mt-60">
          <div className="text-16 lh-1 fw-500 text-dark-1 mb-30">Páginas</div>
          <div className="">
            <div className="">
              <div
                className="accordion js-accordion"
                onClick={() => setIsDropdownOpen((pre) => !pre)}
              >
                <div
                  className={`accordion__item ${
                    isDropdownOpen ? "is-active" : ""
                  } `}
                >
                  <div className="accordion__button py-10 px-20 bg-light-4 rounded-16">
                    <span className="text-16 fw-500 text-dark-1">Sobre</span>
                    <div className="accordion__icon display-flex justify-center items-center h-[100%]">
                      <div
                        className="icon size-20 mt-5"
                        data-feather="chevron-down"
                      >
                        <i
                          className="fa fa-chevron-down"
                          style={{ fontSize: "14px" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="icon size-20" data-feather="chevron-up">
                        <i
                          className="fa fa-chevron-up"
                          style={{ fontSize: "14px" }}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div
                    className="accordion__content "
                    style={isDropdownOpen ? { maxHeight: "112px" } : {}}
                  >
                    <div className="accordion__content__inner px-30 pt-15 pb-10">
                      <div className="sidebar__links y-gap-5">
                        <div>
                          <Link to="/about-1">Sobre v1</Link>
                        </div>
                        <div>
                          <Link to="/about-2">Sobre v2</Link>
                        </div>
                        <div>
                          <a href="#">Sobre v3</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <Link
                to="/contact-1"
                className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
              >
                Contato
              </Link>
            </div>

            <div className="">
              <Link
                to="/pricing"
                className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
              >
                Preços
              </Link>
            </div>

            <div className="">
              <Link
                to="/help-center"
                className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
              >
                Ajuda
              </Link>
            </div>

            <div className="">
              <Link
                to="/terms"
                className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
              >
                FAQ
              </Link>
            </div>

            <div className="">
              <Link
                to="/terms"
                className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
              >
                Termos
              </Link>
            </div>

            <div className="">
              <a
                href="#"
                className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
              >
                Privacidade
              </a>
            </div>

            <div className="">
              <a
                href="#"
                className="d-flex items-center justify-between py-15 px-20 rounded-16 text-16 lh-1 fw-500 -base-sidebar-menu-hover"
              >
                Configurações
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
