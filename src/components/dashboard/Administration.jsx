import { sections } from "@/data/adminitrationFeatures";
import React, { useState } from "react";
import FooterNine from "../layout/footers/FooterNine";
import { Link } from "react-router-dom";
import PageLinksTwo from "../common/PageLinksTwo";
const tabs = [
  { id: 1, title: "Administração do site" },
  { id: 2, title: "Usuários" },
  { id: 3, title: "Cursos" },
  { id: 4, title: "Notas" },
  { id: 5, title: "Plugins" },
  { id: 6, title: "Aparência" },
  { id: 7, title: "Servidor" },
  { id: 8, title: "Relatórios" },
  { id: 9, title: "Desenvolvimento" },
];
export default function Administration() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Administração do site</h1>

            <PageLinksTwo />
          </div>
        </div>

        <div className="row y-gap-30">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="tabs -active-purple-2 js-tabs pt-0">
                <div className="tabs__controls d-flex x-gap-30 flex-wrap items-center pt-20 px-20 border-bottom-light js-tabs-controls">
                  {tabs.map((elm, i) => (
                    <div
                      onClick={() => setActiveTab(elm.id)}
                      key={i}
                      className=""
                    >
                      <button
                        className={`tabs__button text-light-1 js-tabs-button ${
                          activeTab == elm.id ? "is-active" : ""
                        } `}
                        type="button"
                      >
                        {elm.title}
                      </button>
                    </div>
                  ))}
                </div>

                <div className="tabs__content py-40 px-30 js-tabs-content">
                  <div
                    className={`tabs__pane -tab-item-1  ${
                      activeTab == 1 ? "is-active" : ""
                    } `}
                  >
                    <div className="row y-gap-50 x-gap-50">
                      {sections.map((elm, i) => (
                        <div
                          key={i}
                          className="w-1/5 xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/1"
                        >
                          <h4 className="text-18 lh-12 fw-500">{elm.title}</h4>
                          <div className="d-flex y-gap-10 flex-column pt-15">
                            {elm.items.map((itm, index) => (
                              <div key={index}>{itm}</div>
                            ))}
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

      <FooterNine />
    </div>
  );
}
