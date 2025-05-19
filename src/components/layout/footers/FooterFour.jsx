import React from "react";
import Links from "../component/Links";
import Socials from "@/components/common/Socials";
import FooterLinks from "../component/FooterLinks";

export default function FooterFour() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="footer -type-1 -dark bg-light-9">
      <div className="container">
        <div className="footer-header border-bottom-dark">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="footer-header__logo">
                <img src="/assets/img/general/logo-dark.svg" alt="logo" />
              </div>
            </div>
            <div className="col-auto">
              <div className="footer-header-socials">
                <div className="footer-header-socials__title text-dark-1">
                  Siga-nos nas redes sociais
                </div>
                <div className="footer-header-socials__list">
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-columns">
          <div className="row y-gap-30">
            <FooterLinks allClasses="text-17 fw-500 uppercase mb-25" />

            <div className="col-xl-4 ol-md-4 col-sm-6">
              <div className="text-17 fw-500 uppercase mb-25">ENTRE EM CONTATO</div>
              <div className="footer-columns-form">
                <div>Não enviamos spam, então não se preocupe.</div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input required type="text" placeholder="Email..." />
                    <button type="submit">Enviar</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-footer border-top-dark">
          <div className="row justify-between y-gap-20">
            <div className="col-md-6">
              <div className="footer-footer__copyright">
                © {new Date().getFullYear()} Educrat. Todos os direitos reservados.
              </div>
            </div>

            <div className="col-auto">
              <div className="footer-footer__right">
                <div className="footer-footer__list">
                  <Links />
                </div>

                <div className="ml-20">
                  <a
                    href="#"
                    className="button -white px-30 py-20 rounded-200 text-black -light-4  -purple-3 text-purple-1"
                  >
                    Português
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
