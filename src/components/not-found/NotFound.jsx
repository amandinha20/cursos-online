import React from "react";

export default function NotFound() {
  return (
    <section className="no-page layout-pt-lg layout-pb-lg bg-beige-1">
      <div className="container">
        <div className="row y-gap-50 justify-between items-center">
          <div className="col-lg-6">
            <div className="no-page__img">
              <img src="/assets/img/404/1.svg" alt="imagem" />
            </div>
          </div>

          <div className="col-xl-5 col-lg-6">
            <div className="no-page__content">
              <h1 className="no-page__main text-dark-1">
                40<span className="text-purple-1">4</span>
              </h1>
              <h2 className="text-35 lh-12 mt-5">
                Opa! Parece que você está perdido.
              </h2>
              <div className="mt-10">
                A página que você procura não está disponível. Tente pesquisar novamente
                <br /> ou utilize o menu para navegar.
              </div>
              <button className="button -md -purple-1 text-white mt-20">
                Voltar para a página inicial
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
