// Este componente exibe o ícone do carrinho no cabeçalho e mostra o conteúdo do carrinho ao clicar.
// Ele alterna entre diferentes tipos de carrinho (produtos, cursos, eventos) dependendo da página atual.

import { menuList } from "@/data/menu";
import { useLocation } from "react-router-dom";
import React from "react";
import { useContextElement } from "@/context/Context";
import { useState, useEffect } from "react";
import ShopCart from "./ShopCart";
import CourseCart from "./CourseCart";
import EventCart from "./EventCart";

const CartToggle = ({ allClasses, parentClassess }) => {
  // Obtém os itens dos carrinhos do contexto global
  const { cartProducts, cartCourses, cartEvents } = useContextElement();
  // Controla se o carrinho está visível
  const [activeCart, setActiveCart] = useState(false);
  // Guarda o menu e submenu atuais para decidir qual carrinho mostrar
  const [menuItem, setMenuItem] = useState("");
  const [submenu, setSubmenu] = useState("");

  // Obtém o caminho atual da URL
  const { pathname } = useLocation();

  // Ao montar, determina o menu/submenu baseado na URL
  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split("/")[1] == pathname?.split("/")[1]) {
          setMenuItem(elm.title);
        } else {
          elm2?.links?.map((elm3) => {
            if (elm3.href?.split("/")[1] == pathname?.split("/")[1]) {
              setMenuItem(elm.title);
              setSubmenu(elm2.title);
            }
          });
        }
      });
    });
  }, []);

  return (
    <>
      <div className={parentClassess ? parentClassess : ""}>
        {/* Botão do carrinho */}
        <button
          style={{ position: "relative" }}
          onClick={() => setActiveCart((pre) => !pre)}
          className={`${allClasses ? allClasses : ""}`}
          data-el-toggle=".js-cart-toggle"
        >
          <i className="text-20 icon icon-basket"></i>
          {/* Mostra a quantidade de itens no carrinho correspondente */}
          <div className="cartProductCount">
            {submenu == "Shop" && (
              <>{cartProducts.length > 9 ? "9+" : cartProducts.length} </>
            )}
            {menuItem == "Events" && (
              <>{cartEvents.length > 9 ? "9+" : cartEvents.length} </>
            )}
            {!(submenu == "Shop" || menuItem == "Events") && (
              <>{cartCourses.length > 9 ? "9+" : cartCourses.length} </>
            )}
          </div>
        </button>

        {/* Conteúdo do carrinho (abre/fecha) */}
        <div
          className={`toggle-element js-cart-toggle ${
            activeCart ? "-is-el-visible" : ""
          }`}
        >
          {/* Mostra o carrinho correto conforme o menu/submenu */}
          {submenu == "Shop" && <ShopCart />}
          {menuItem == "Events" && <EventCart />}
          {!(submenu == "Shop" || menuItem == "Events") && <CourseCart />}
        </div>
      </div>
    </>
  );
};

export default CartToggle;
