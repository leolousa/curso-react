import React from "react";

export default function ComParametro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";

  return (
    <div>
      <h2>{props.aluno}</h2>
      <h3>{props.nota}</h3>
      <h3>{status}</h3>
    </div>
  );
}
