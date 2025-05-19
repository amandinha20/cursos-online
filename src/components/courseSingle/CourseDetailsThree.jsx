import Star from "../common/Star";

import { coursesData } from "@/data/courses";
import React, { useState, useEffect } from "react";

import PinContent from "./PinContent";
import Overview from "./Overview";
import CourseContent from "./CourseContent";
import Instractor from "./Instractor";
import Reviews from "./Reviews";
const menuItems = [
  { id: 1, href: "#overview", text: "Visão Geral", isActive: true },
  { id: 2, href: "#course-content", text: "Conteúdo do Curso", isActive: false },
  { id: 3, href: "#instructors", text: "Instrutores", isActive: false },
  { id: 4, href: "#reviews", text: "Avaliações", isActive: false },
];

export default function CourseDetailsThree({ id }) {
  const [pageItem, setPageItem] = useState(coursesData[0]);

  useEffect(() => {
    setPageItem(coursesData.filter((elm) => elm.id == id)[0] || coursesData[0]);
  }, []);

  return (
    <div id="js-pin-container" className="js-pin-container relative">
      <section className="page-header -type-6">
        <div className="page-header__bg bg-purple-1"></div>
        <div className="container">
          <div className="page-header__content">
            <div className="row y-gap-30 relative">
              <div className="col-xl-7 col-lg-8">
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
                    <div className="badge px-15 py-8 text-11 bg-blue-1 text-white fw-400">
                      POPULAR
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="text-30 lh-14 text-white pr-60 lg:pr-0">
                    {pageItem.title}
                  </h1>
                </div>

                <p className="col-xl-9 mt-20 text-white">
                  Use o XD para conseguir um emprego em UI Design, Interface do Usuário, Design de Experiência do Usuário, UX Design & Web Design
                </p>

                <div className="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20">
                  <div className="d-flex items-center text-white">
                    <div className="text-14 lh-1 text-green-1 mr-10">
                      {pageItem.rating}
                    </div>
                    <div className="d-flex x-gap-10 items-center">
                      <Star star={pageItem.rating} textColor={"text-green-1"} />
                    </div>
                    <div className="text-14 lh-1 ml-10">
                      ({pageItem.ratingCount})
                    </div>
                  </div>

                  <div className="d-flex items-center text-white">
                    <div className="icon icon-person-3 text-13"></div>
                    <div className="text-14 ml-8">
                       853 inscritos neste curso
                    </div>
                  </div>

                  <div className="d-flex items-center text-white">
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
                    data-bg="img/avatars/small-1.png"
                  ></div>
                  <div className="text-14 lh-1 ml-10 text-white">
                    {pageItem.authorName}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PinContent pageItem={pageItem} />

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="page-nav-menu -line">
                <div className="d-flex x-gap-30">
                  {menuItems.map((item) => (
                    <div key={item.id}>
                      <a
                        href={item.href}
                        className={`pb-12 page-nav-menu__link ${
                          item.isActive ? "is-active" : ""
                        }`}
                      >
                        {item.text}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <Overview />
              <CourseContent />
              <Instractor />
              <Reviews />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
