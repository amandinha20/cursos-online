import React from "react";
import { blogs } from "../../data/blog";

import Pagination from "../common/Pagination";
import { Link } from "react-router-dom";
export default function BlogsThree() {
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Últimas Notícias</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    Nossa missão é oferecer cursos envolventes e selecionados a um preço acessível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30 justify-center">
            {blogs.slice(0, 4).map((elm, i) => (
              <div key={i} className="col-lg-10 col-md-11">
                <div className="blogCard -type-3">
                  <div className="row y-gap-30 items-center">
                    <div className="col-lg-6">
                      <div className="blogCard__image">
                        <img
                          className="rounded-8"
                          src={elm.imageSrc}
                          alt="image"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="blogCard__content pl-60 lg:pl-40 md:pl-0">
                        <div className="blogCard__category text-14 lh-1 text-purple-1 fw-500">
                          EDUCAÇÃO
                        </div>
                        <h4 className="blogCard__title text-24 lh-15 text-dark-4 fw-500 mt-15">
                          <Link className="linkCustom" to={`/blogs/${elm.id}`}>
                            {" "}
                            {elm.title}
                          </Link>
                        </h4>
                        <p className="blogCard__text mt-20">{elm.desc}</p>
                        <div className="blogCard__button d-inline-block mt-20">
                          <Link
                            to={`/blogs/${elm.id}`}
                            className="button -sm -purple-3 text-purple-1"
                          >
                            Leia Mais
                          </Link>
                        </div>
                      </div>
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
      </section>
    </>
  );
}
