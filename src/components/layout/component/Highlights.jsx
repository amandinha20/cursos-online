import React from "react";

const highlights = [
  {
    image: "/assets/img/highlights/online.png",
    text: "Plataforma 100% online",
  },
  {
    image: "/assets/img/highlights/profissionais.png",
    text: "Aulas com profissionais do mercado",
  },
  {
    image: "/assets/img/highlights/certificado.png",
    text: "Certificado reconhecido",
  },
  {
    image: "/assets/img/highlights/24h.png",
    text: "Acesso ilimitado 24h",
  },
];

export default function Highlights() {
  return (
    <section style={{ margin: "2rem 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#222" }}>
        Nossos Diferenciais
      </h2>
      <div style={{
        display: "flex",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "stretch"
      }}>
        {highlights.map((item, idx) => (
          <div
            key={idx}
            style={{
              textAlign: "center",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <img src={item.image} alt={item.text} style={{ width: "48px", height: "48px", margin: "0 auto" }} />
            <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>{item.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}