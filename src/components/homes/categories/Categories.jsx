import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { topCategories } from "../../../data/topCategories";

import "swiper/css/pagination";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CategoriesHomeOne = () => {
  const [showSlider, setShowSlider] = useState(false);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  return (
    <>
      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle ">
                <h2 className="sectionTitle__title ">Principais categorias</h2>

                <p className="sectionTitle__text ">
                  <p className="sectionTitle__text ">
                    Escolha entre as principais áreas do conhecimento e encontre o curso ideal para você.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden pt-50 js-section-slider">
            {showSlider && (
              <Swiper
                // {...setting}

                modules={[Navigation, Pagination]}
                pagination={{
                  el: ".swiper-paginationx",
                  clickable: true,
                }}
                navigation={{
                  nextEl: ".arrow-right-one",
                  prevEl: ".arrow-left-one",
                }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  // when window width is >= 576px
                  450: {
                    slidesPerView: 2,
                  },
                  // when window width is >= 768px
                  768: {
                    slidesPerView: 4,
                  },
                  1200: {
                    // when window width is >= 992px
                    slidesPerView: 6,
                  },
                }}
                loop={true}
              >
                {topCategories.map((item, i) => (
                  <SwiperSlide key={i}>
                    <Link
                      to={`/courses-list-${item.id > 8 ? 1 : item.id}`}
                      data-aos="fade-left"
                      data-aos-duration={(i + 1) * 350}
                      className="featureCard -type-1 -featureCard-hover linkCustomTwo"
                    >
                      <div className="featureCard__content">
                        <div className="featureCard__icon">
                          <img src={item.iconSrc} alt="icon" />
                        </div>
                        <div className="featureCard__title">
                          {item.title.split(" ")[0]} <br />
                          {item.title.split(" ")[1] && item.title.split(" ")[1]}
                        </div>
                        <div className="featureCard__text">{item.text}</div>
                      </div>
                    </Link>
                  </SwiperSlide>
                  // 140,90
                ))}
              </Swiper>
            )}

            <div className="d-flex justify-center x-gap-15 items-center pt-60 lg:pt-40">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-prev">
                  <i className="icon icon-arrow-left arrow-left-one"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="swiper-paginationx"></div>
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-next">
                  <i className="icon icon-arrow-right arrow-right-one"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoriesHomeOne;
