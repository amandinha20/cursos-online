import React, { useState, useEffect } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="row justify-center">
      <div className="col-xl-8 col-lg-9 col-md-11">
        <div className="tabs -active-purple-2 js-tabs">
          <div className="tabs__controls d-flex js-tabs-controls">
            <button
              onClick={() => setActiveTab(1)}
              className={`tabs__button js-tabs-button ${
                activeTab == 1 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-1"
              type="button"
            >
              Torne-se um instrutor
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`tabs__button js-tabs-button ml-30 ${
                activeTab == 2 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-2"
              type="button"
            >
              Regras do Instrutor
            </button>
            <button
              onClick={() => setActiveTab(3)}
              className={`tabs__button js-tabs-button ml-30 ${
                activeTab == 3 ? "is-active" : ""
              } `}
              data-tab-target=".-tab-item-3"
              type="button"
            >
              Comece com cursos
            </button>
          </div>

          <div className="tabs__content pt-60 lg:pt-40 js-tabs-content">
            <div
              className={`tabs__pane -tab-item-1 ${
                activeTab == 1 ? "is-active" : ""
              } `}
            >
              <p className="text-light-1">
                É um fato estabelecido há muito tempo que o leitor se distrairá
                pelo conteúdo legível de uma página ao observar seu layout.
                O objetivo de usar o Lorem Ipsum é que ele tem uma utilidade mais ou menos
                distribuição normal de letras, em oposição ao uso de 'Conteúdo
                aqui, conteúdo aqui', fazendo com que pareça um inglês legível.
                <br />
                <br />
                Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam
                Lorem Ipsum como texto do modelo padrão e uma pesquisa por 'lorem
                ipsum' revelará muitos sites que ainda estão em fase inicial.
              </p>
            </div>
            <div
              className={`tabs__pane -tab-item-2 ${
                activeTab == 2 ? "is-active" : ""
              } `}
            >
              <p className="text-light-1">
                É um fato estabelecido há muito tempo que o leitor se distrairá
                pelo conteúdo legível de uma página ao observar seu layout.
                O objetivo de usar o Lorem Ipsum é que ele tem uma utilidade mais ou menos
                distribuição normal de letras, em oposição ao uso de 'Conteúdo
                aqui, conteúdo aqui', fazendo com que pareça um inglês legível.
              </p>
            </div>
            <div
              className={`tabs__pane -tab-item-3 ${
                activeTab == 3 ? "is-active" : ""
              } `}
            >
              <p className="text-light-1">
                Muitos pacotes de editoração eletrônica e editores de páginas da web agora usam
                Lorem Ipsum como texto do modelo padrão e uma pesquisa por 'lorem
                ipsum' revelará muitos sites que ainda estão em fase inicial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
