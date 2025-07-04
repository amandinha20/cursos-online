import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
export default function CourseCardTwo({ data, index }) {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    for (let i = Math.round(data.rating); i >= 1; i--) {
      setRating((pre) => [...pre, "star"]);
    }
  }, []);
  return (
    <div className="col-lg-3 col-md-6">
      <div>
        <div className="coursesCard -type-1 -hover-shadow border-light rounded-8">
          <div className="relative">
            <div className="coursesCard__image overflow-hidden rounded-top-8">
              <img className="w-1/1" src={data.imageSrc} alt="image" />
              <div className="coursesCard__image_overlay rounded-top-8"></div>
            </div>
            {data.popular && (
              <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                <div>
                  <div className="px-15 rounded-200 bg-purple-1">
                    <span className="text-11 lh-1 uppercase fw-500 text-white">
                      Popular
                    </span>
                  </div>
                </div>

                <div>
                  <div className="px-15 rounded-200 bg-green-1">
                    <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                      Best sellers
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="h-100 pt-15 pb-10 px-20">
            <div className="d-flex items-center">
              <div className="text-14 lh-1 text-yellow-1 mr-10">
                {data.rating}
              </div>
              <div className="d-flex x-gap-5 items-center">
                {rating.map((itm, i) => (
                  <div key={i} className="icon-star text-9 text-yellow-1"></div>
                ))}
              </div>
              <div className="text-13 lh-1 ml-10">(({data.ratingCount}))</div>
            </div>

            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
              <Link className="linkCustom" to={`/courses/${data.id}`}>
                {data.title}
              </Link>
            </div>

            <div className="d-flex x-gap-10 items-center pt-10">
              <div className="d-flex items-center">
                <div className="mr-8">
                  <img src="/assets/img/coursesCards/icons/1.svg" alt="icon" />
                </div>
                <div className="text-14 lh-1">{data.lessonCount} lesson</div>
              </div>

              <div className="d-flex items-center">
                <div className="mr-8">
                  <img src="/assets/img/coursesCards/icons/2.svg" alt="icon" />
                </div>
                <div className="text-14 lh-1">{`${Math.floor(
                  data.duration / 60,
                )}h ${Math.floor(data.duration % 60)}m`}</div>
              </div>

              <div className="d-flex items-center">
                <div className="mr-8">
                  <img src="/assets/img/coursesCards/icons/3.svg" alt="icon" />
                </div>
                <div className="text-14 lh-1">{data.level}</div>
              </div>
            </div>

            <div className="coursesCard-footer">
              <div className="coursesCard-footer__author">
                <img src={data.authorImageSrc} alt="image" />
                <div>{data.authorName || "Psi. Juliana Fernandes"}</div>
              </div>

              <div className="coursesCard-footer__price">
                {data.paid ? (
                  <>
                    <div>${data.originalPrice}</div>
                    <div>${data.discountedPrice}</div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>Free</div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
