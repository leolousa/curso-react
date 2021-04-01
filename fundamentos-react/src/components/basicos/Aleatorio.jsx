import React from 'react'

export default function Aleatorio(props) {

  //const min = props.min
  //const max = props.max
  const { min, max } = props //Destructuring
  const valor = parseInt (Math.random() * (max - min)) + min

  return (

    <div>
      <h2>Valor aleatório</h2>
      <p>Valor mínimo: {min}</p>
      <p>Valor máximo: {max}</p>
      <p>Valor escolhido: {valor}</p>
    </div>
  )
}