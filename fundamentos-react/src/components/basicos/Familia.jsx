import React from 'react'

import FamiliaMembro from './FamiliaMembro'

export default function Familia(props) {
  return (
    <div>
      <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome }/>
      <FamiliaMembro nome="Ana" {...props}/>{/* Sintaxe que tras todas as propriedades para o componente */}
      <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
    </div>
  )
}