import { Link } from "react-router-dom";
import React from "react";

export default function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-page__content lg:py-50">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-6 col-lg-8">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
              <h3 className="text-30 lh-13">Entrar</h3>
              <p className="mt-10">
                Ainda não tem uma conta?
                <Link to="/signup" className="text-purple-1">
                  Cadastre-se grátis
                </Link>
              </p>

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Usuário ou E-mail
                  </label>
                  <input required type="text" name="title" placeholder="Nome" />
                </div>
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Senha
                  </label>
                  <input
                    required
                    type="password"
                    name="title"
                    placeholder="Senha"
                  />
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -green-1 text-dark-1 fw-500 w-1/1"
                  >
                    Entrar
                  </button>
                </div>
              </form>

              <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                Ou entre usando
              </div>

              <div className="d-flex x-gap-20 items-center justify-between pt-20">
                <div>
                  <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                    Entrar via Facebook
                  </button>
                </div>
                <div>
                  <button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
                    Entrar via Google+
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
