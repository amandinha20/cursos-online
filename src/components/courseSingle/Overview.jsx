import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { learnList, requirements } from "@/data/aboutcourses";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Overview() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div id="overview" className="pt-60 lg:pt-40 to-over">
      <h4 className="text-18 fw-500">Descrição</h4>

      <div
        className={`show-more  mt-30 js-show-more ${
          showMore ? "is-active" : ""
        } `}
      >
        <div
          className="show-more__content "
          style={showMore ? { maxHeight: "370px" } : {}}
        >
          <p className="">
            Phasellus enim magna, varius et commodo ut, ultricies vitae velit.
            Ut nulla tellus, eleifend euismod pellentesque vel, sagittis vel
            justo. In libero urna, venenatis sit amet ornare non, suscipit nec
            risus. Sed consequat justo non mauris pretium at tempor justo
            sodales. Quisque tincidunt laoreet malesuada. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur.
            <br />
            <br />
            Este curso é destinado a pessoas interessadas em Design UI/UX. Começaremos do início e seguiremos passo a passo. Se você já tem alguma experiência em Design UI/UX, mas quer aprender a usar o Adobe XD, este curso também é perfeito para você!
            <br />
            <br />
            Primeiro, vamos abordar as diferenças entre UX e UI Design. Veremos o briefing deste projeto real, depois aprenderemos sobre wireframes de baixa fidelidade e como usar kits de UI existentes.
          </p>
        </div>

        <button
          onClick={() => setShowMore((pre) => !pre)}
          className="show-more__button text-purple-1 fw-500 underline mt-30"
        >
          Mostrar mais
        </button>
      </div>

      <div className="mt-60">
        <h4 className="text-20 mb-30">O que você vai aprender</h4>
        <div className="row x-gap-100 justfiy-between">
          <div className="col-md-6">
            <div className="y-gap-20">
              {learnList.slice(0, 6).map((elm, i) => (
                <div key={i} className="d-flex items-center">
                  <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ transform: "scale(0.7)", opacity: "0.7" }}
                    />
                  </div>
                  <p>{elm}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-6">
            <div className="y-gap-20">
              {learnList.slice(6).map((elm, i) => (
                <div key={i} className="d-flex items-center">
                  <div className="d-flex justify-center items-center border-light rounded-full size-20 mr-10">
                    <FontAwesomeIcon
                      icon={faCheck}
                      style={{ transform: "scale(0.7)", opacity: "0.7" }}
                    />
                  </div>
                  <p>{elm}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-60">
        <h4 className="text-20">Requisitos</h4>
        <ul className="ul-list y-gap-15 pt-30">
          {requirements.map((elm, i) => (
            <li key={i}>{elm}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
