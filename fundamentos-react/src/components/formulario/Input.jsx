import React, { useState } from 'react'
import './Input.css'

export default function Imput (props) {
  const [valor, setValor] = useState('Inicial')

  function quandoMudar(e) {
    setValor(e.target.value)
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column'
      }}>
        <input value={valor} onChange={quandoMudar}/> {/* Componente não controlado pelo estado dele*/}
        <input value={valor} readOnly/> {/* Componente somente leitura */}
        <input value={undefined} /> {/* Componente não controlado */}
      </div>
    </div>
  )
}