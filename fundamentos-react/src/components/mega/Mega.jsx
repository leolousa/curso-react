import './Mega.css'
import React, { useState } from 'react'

export default function Mega(props) {
  
  function geraNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
    return array.includes(aleatorio) ? geraNumeroNaoContido(min, max, array) : aleatorio
  }

  function geraNumeros(qtde) {
    const numeros = Array(qtde).fill(0).reduce((nums) => {
      const novoNumero = geraNumeroNaoContido(1, 60, nums)
      return [ ...nums, novoNumero]
    }, []).sort((n1, n2) => n1 - n2)
    return numeros
  }
  
  const [qtde, setQtde] = useState(props.qtde || 6)
  const numerosIniciais = Array(qtde).fill(0)
  const [numeros, setNumeros] = useState(numerosIniciais)

  return (
    <div className="mega">
      <h2>Mega</h2>
      <h3>{numeros.join(' ')}</h3>
      <div>
        <label>Qtde de números</label>
        <input min="6" max="15" type="number" value={qtde}
          onChange={e => {
            setQtde(+e.target.value)
            setNumeros(geraNumeros(+e.target.value))
          }}/>
      </div>
      <button onClick={_ => setNumeros(geraNumeros(qtde))}>Gerar nmúmeros</button>
    </div>
  )
}