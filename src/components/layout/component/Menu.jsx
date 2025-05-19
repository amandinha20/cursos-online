import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileFooter from "./MobileFooter";

import { menuList } from "@/data/menu";
import { useLocation } from "react-router-dom";

export default function Menu({ allClasses, headerPosition }) {
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split("/")[1] == pathname.split("/")[1]) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, []);

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        headerPosition ? headerPosition : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>

        <div className="d-none xl:d-flex items-center px-20 py-20 border-bottom-light">
          <Link to="/login" className="text-dark-1">
            Entrar
          </Link>
          <Link to="/signup" className="text-dark-1 ml-30">
            Registrar
          </Link>
        </div>

        <div className="menu js-navList">
          <ul className={`${allClasses ? allClasses : ""}`}>
            <li className="menu-item-has-children">
              <Link
                data-barba
                to="/"
                className={menuItem == "Início" ? "activeMenu" : ""}
              >
                Início <i className=""></i>
              </Link>
            </li>

            <li className="menu-item-has-children -has-mega-menu">
              <Link
                data-barba
                to="/"
                className={menuItem == "Cursos" ? "activeMenu" : ""}
              >
                Cursos <i className=""></i>
              </Link>

              <div className="mega xl:d-none">
                <div className="mega__menu">
                  <div className="row x-gap-40">
                    <div className="col">
                      <h4 className="text-17 fw-500 mb-20">
                        Layouts de Lista de Cursos
                      </h4>

                      <ul className="mega__list">
                        {menuList[1].links[0].links.map((elm, i) => (
                          <li
                            key={i}
                            className={
                              pathname.split("/")[1] == elm.href.split("/")[1]
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                            }
                          >
                            <Link data-barba to={elm.href}>
                              {elm.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col">
                      <h4 className="text-17 fw-500 mb-20">
                        Layouts de Curso Único
                      </h4>

                      <ul className="mega__list">
                        {menuList[1].links[1].links.map((elm, i) => (
                          <li
                            key={i}
                            className={
                              pathname.split("/")[1] == elm.href.split("/")[1]
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                            }
                          >
                            <Link data-barba to={elm.href}>
                              {elm.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col">
                      <h4 className="text-17 fw-500 mb-20">Sobre os Cursos</h4>

                      <ul className="mega__list">
                        {menuList[1].links[2].links.map((elm, i) => (
                          <li
                            key={i}
                            className={
                              pathname.split("/")[1] == elm.href.split("/")[1]
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                            }
                          >
                            <Link data-barba to={elm.href}>
                              {elm.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col">
                      <h4 className="text-17 fw-500 mb-20">Páginas do Painel</h4>

                      <ul className="mega__list">
                        {menuList[1].links[3].links.map((elm, i) => (
                          <li
                            key={i}
                            className={
                              pathname.split("/")[1] == elm.href.split("/")[1]
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                            }
                          >
                            <Link data-barba to={elm.href}>
                              {elm.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="col">
                      <h4 className="text-17 fw-500 mb-20"></h4>

                      <ul className="mega__list">
                        {menuList[1].links[4].links.map((elm, i) => (
                          <li
                            key={i}
                            className={
                              pathname.split("/")[1] == elm.href.split("/")[1]
                                ? "activeMenu"
                                : "inActiveMegaMenu"
                            }
                          >
                            <Link data-barba to={elm.href}>
                              {elm.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                to="#"
                className={menuItem == "Eventos" ? "activeMenu" : ""}
              >
                Eventos <i className="icon-chevron-right text-13 ml-10"></i>
              </Link>
              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <Link to="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> Eventos
                  </Link>
                </li>

                {menuList[2].links.map((elm, i) => (
                  <li
                    key={i}
                    className={
                      pathname.split("/")[1] == elm.href.split("/")[1]
                        ? "activeMenu"
                        : "inActiveMenu"
                    }
                  >
                    <Link data-barba to={elm.href}>
                      {elm.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="menu-item-has-children">
              <Link
                data-barba
                to="#"
                className={menuItem == "Blogs" ? "activeMenu" : ""}
              >
                Blog <i className="icon-chevron-right text-13 ml-10"></i>
              </Link>
              <ul className="subnav">
                <li className="menu__backButton js-nav-list-back">
                  <Link to="#">
                    <i className="icon-chevron-left text-13 mr-10"></i> Blog
                  </Link>
                </li>

                {menuList[3].links.map((elm, i) => (
                  <li
                    key={i}
                    className={
                      pathname.split("/")[1] == elm.href.split("/")[1]
                        ? "activeMenu"
                        : "inActiveMenu"
                    }
                  >
                    <Link data-barba to={elm.href}>
                      {elm.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                data-barba
                to="/contact-1"
                className={
                  pathname == "/contact-1" ? "activeMenu" : "inActiveMenuTwo"
                }
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile footer start */}
        <MobileFooter />
        {/* mobile footer end */}
      </div>

      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div className="header-menu-bg"></div>
    </div>
  );
}
