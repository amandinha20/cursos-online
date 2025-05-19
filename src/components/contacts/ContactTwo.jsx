import React from "react";
import { locationData } from "@/data/officeLocation";
export default function ContactTwo() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="page-header -type-4 bg-beige-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Fale Conosco</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    Nossa missão é oferecer cursos envolventes e selecionados
                    <br /> a um preço acessível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between">
            <div className="col-xl-5 col-lg-6">
              <h3 className="text-24 lh-1 fw-500">Nossos escritórios</h3>
              <div className="row y-gap-30 pt-40">
                {locationData.map((elm, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="text-20 fw-500 text-dark-1">
                      {elm.location}
                    </div>
                    <div className="y-gap-10 pt-15">
                      <a href="#" className="d-block">
                        {elm.address}
                      </a>
                      <a href="#" className="d-block">
                        {elm.phoneNumber}
                      </a>
                      <a href="#" className="d-block">
                        {elm.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top">
                <h3 className="text-24 fw-500">Envie uma mensagem</h3>
                <p className="mt-25">
                  Neque convallis a cras semper auctor. Libero id faucibus nisl
                  <br /> tincidunt egetnvallis.
                </p>

                <form
                  className="contact-form row y-gap-30 pt-60 lg:pt-40"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Nome
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      placeholder="Nome..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      E-mail
                    </label>
                    <input
                      required
                      type="text"
                      name="title"
                      placeholder="E-mail..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Mensagem...
                    </label>
                    <textarea
                      name="comment"
                      placeholder="Mensagem"
                      rows="8"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -purple-1 text-white"
                    >
                      Enviar Mensagem
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
