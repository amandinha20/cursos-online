import React, { useState, useEffect } from "react";
import { useContextElement } from "@/context/Context";
import { Link } from "react-router-dom";
export default function CourseCheckOut() {
  const { cartCourses } = useContextElement();
  const [totalPrice, setTotalPrice] = useState(0);
  const [shiping, setShiping] = useState(0);
  useEffect(() => {
    const sum = cartCourses.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.discountedPrice * currentValue.quantity;
    }, 0);
    const sumQuantity = cartCourses.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.quantity;
    }, 0);
    setShiping(sumQuantity * 10);
    setTotalPrice(sum);
  }, [cartCourses]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row justify-center text-center">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Finalizar Compra de Cursos</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    Estamos em uma missão para oferecer cursos envolventes e selecionados a um preço acessível.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50">
            <div className="col-lg-8">
              <div className="shopCheckout-form">
                <form
                  onSubmit={handleSubmit}
                  className="contact-form row x-gap-30 y-gap-30"
                >
                  <div className="col-12">
                    <h5 className="text-20">Detalhes de Cobrança</h5>
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Nome
                    </label>
                    <input
                      required
                      type="text"
                      name="firstName"
                      placeholder="Nome"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Sobrenome
                    </label>
                    <input
                      required
                      type="text"
                      name="lastName"
                      placeholder="Sobrenome"
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Nome da empresa
                    </label>
                    <input
                      required
                      type="text"
                      name="company"
                      placeholder="Nome da empresa"
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      País / Região *
                    </label>
                    <select className="selectize wide js-selectize">
                      <option value="Brasil">Brasil</option>
                      <option value="USA">Estados Unidos</option>
                      <option value="Germany">Alemanha</option>
                      <option value="France">França</option>
                      <option value="Greece">Grécia</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Número e nome da rua
                    </label>
                    <input
                      required
                      type="text"
                      name="address"
                      placeholder="Número e nome da rua"
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Apartamento, sala, unidade etc. (opcional)
                    </label>
                    <input
                      required
                      type="text"
                      name="apartment"
                      placeholder="Apartamento, sala, unidade etc. (opcional)"
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Cidade *
                    </label>
                    <input
                      required
                      type="text"
                      name="city"
                      placeholder="Cidade *"
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Estado *
                    </label>
                    <input
                      required
                      type="text"
                      name="state"
                      placeholder="Estado *"
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      CEP *
                    </label>
                    <input
                      required
                      type="text"
                      name="zip"
                      placeholder="CEP *"
                    />
                  </div>

                  <div className="col-sm-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Telefone *
                    </label>
                    <input
                      required
                      type="text"
                      name="phone"
                      placeholder="Telefone *"
                    />
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      E-mail *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="E-mail *"
                    />
                  </div>

                  <div className="col-12">
                    <h5 className="text-20 fw-500 pt-30">
                      Informações adicionais
                    </h5>
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Notas do pedido (opcional)
                    </label>
                    <textarea
                      required
                      name="notes"
                      id="form_notes"
                      rows="8"
                      placeholder="Notas do pedido (opcional)"
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="">
                <div className="pt-30 pb-15 bg-white border-light rounded-8 bg-light-4">
                  <h5 className="px-30 text-20 fw-500">Seu Pedido</h5>

                  <div className="d-flex justify-between px-30 mt-25">
                    <div className="py-15 fw-500 text-dark-1">Produto</div>
                    <div className="py-15 fw-500 text-dark-1">Subtotal</div>
                  </div>

                  {cartCourses.map((elm, i) => (
                    <div
                      key={i}
                      className={`d-flex justify-between ${
                        i == 0 ? "border-top-dark" : ""
                      }  px-30`}
                    >
                      <div className="py-15 text-grey">
                        <Link className="linkCustom" to={`/courses/${elm.id}`}>
                          {elm.title}{" "}
                        </Link>{" "}
                        x {elm.quantity}
                      </div>
                      <div className="py-15 text-grey">
                        {elm.paid
                          ? `R$${(elm.discountedPrice * elm.quantity).toFixed(2)}`
                          : "Grátis"}
                      </div>
                    </div>
                  ))}

                  <div className="d-flex justify-between border-top-dark px-30">
                    <div className="py-15 fw-500">Subtotal</div>
                    <div className="py-15 fw-500">R${totalPrice.toFixed(2)}</div>
                  </div>

                  <div className="d-flex justify-between border-top-dark px-30">
                    <div className="py-15 fw-500 text-dark-1">Frete</div>
                    <div className="py-15 fw-500 text-dark-1">
                      R${shiping.toFixed(2)}
                    </div>
                  </div>

                  <div className="d-flex justify-between border-top-dark px-30">
                    <div className="py-15 fw-500 text-dark-1">Total</div>
                    <div className="py-15 fw-500 text-dark-1">
                      R${(totalPrice + shiping).toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="py-30 px-30 bg-white mt-30 border-light rounded-8 bg-light-4">
                  <h5 className="text-20 fw-500">Pagamento</h5>

                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className="ml-15 text-15 lh-1 fw-500 text-dark-1">
                        Transferência bancária direta
                      </h5>
                    </div>
                    <p className="ml-25 pl-5 mt-25">
                      Faça o pagamento diretamente em nossa conta bancária. Por favor,
                      use o número do seu pedido como referência. Seu pedido
                      só será enviado após a confirmação do pagamento.
                    </p>
                  </div>

                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" />
                        <div className="radio__mark">
                          <div class="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className="ml-15 text-15 lh-1 text-dark-1">
                        Pagamento por cheque
                      </h5>
                    </div>
                  </div>

                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className="ml-15 text-15 lh-1 text-dark-1">
                        Pagamento na entrega
                      </h5>
                    </div>
                  </div>

                  <div className="mt-30">
                    <div className="form-radio d-flex items-center">
                      <div className="radio">
                        <input type="radio" name="radio" defaultChecked />
                        <div className="radio__mark">
                          <div className="radio__icon"></div>
                        </div>
                      </div>
                      <h5 className="ml-15 text-15 lh-1 text-dark-1">PayPal</h5>
                    </div>
                  </div>
                </div>

                <div className="mt-30">
                  <button className="button -md -accent col-12 -uppercase text-white">
                    Finalizar Pedido
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
