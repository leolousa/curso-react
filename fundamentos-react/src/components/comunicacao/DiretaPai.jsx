import React from 'react'
import DiretaFilho from './DiretaFilho'

export default function DiretaPai(props) {

  return (
    <div>
      <DiretaFilho nome="Leo Filho" idade={20} nerd={true}></DiretaFilho>
      <DiretaFilho nome="Pedro" idade={18} nerd={false}></DiretaFilho>
      <DiretaFilho nome="Enzo" idade={18} nerd={true}></DiretaFilho>
    </div>
  )
}