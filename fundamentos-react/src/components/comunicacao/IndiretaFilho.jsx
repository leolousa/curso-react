import React from 'react'

export default function IndiretaFilhos(props) {
  const cb = props.quandoClicar
  return (
    <div>
      <div>Filho</div>
      <button onClick={e => {cb('Leo Pai', 50, true)}
      }>Fornecer informações</button>
    </div>
  )
}