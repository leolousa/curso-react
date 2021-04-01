import React from 'react'

export default function PassoForm (props) {

  return (
    <div>
      <label htmlFor="passo">Passo: </label>
      <input 
        id="passo"
        type="number"
        value={props.passo}
        onChange={e => props.setPasso(+e.target.value)}/>
    </div>
  )
}