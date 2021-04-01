import './ListaProdutos.css'
import React from 'react'
import produtos from '../../data/produtos'

export default function ListaProdutos() {
  
  const produtosLI = produtos.map((produto, i) => {
    return (
      <tr key={produto.id} className={i % 2 === 0 ? 'par' : 'impar'}>
        <td>{produto.id}</td>
        <td>{produto.produto}</td>
        <td>R${produto.preco.toFixed(2).replace('.', ',')}</td>
      </tr>
    )
  })

  return (
    <div className="listaProdutos">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {produtosLI}
        </tbody>
      </table>
    </div>   
  )
}