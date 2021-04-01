import React from "react";

import "./App.css"
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Familia from './components/basicos/Familia'
import ListaAlunos from './components/repeticao/ListaAlunos'
import ListaProdutos from './components/repeticao/ListaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'
import Contador from './components/contador/Contador'
import Mega from './components/mega/Mega'

export default function App() {
  return (
    <div className="app">
      <h1><strong>Fundamentos React</strong></h1>

      <div className="cards">
        <Card titulo="#13 - Mega Sena" color="#B9006E">
          <Mega qtde={8}/>
        </Card>
        <Card titulo="#12 - Contador" color="#424242">
          <Contador numeroInicial={10}/>
        </Card>
        <Card titulo="#11 - Component Controlado (Input)" color="#E45F56">
          <Input/>         
        </Card>
        <Card titulo="#10 - Comunicação indireta" color="#8BAD39">
          <IndiretaPai></IndiretaPai>
        </Card>
        <Card titulo="#9 - Comunicação direta" color="#59323C">
          <DiretaPai></DiretaPai>
        </Card>
        <Card titulo="#8 - Renderização condicional" color="#982395">
          <ParOuImpar numero={11}/>
          <UsuarioInfo usuario={ {nome: 'Alberto'} }/>
        </Card>
        <Card titulo="#7 - Lista Produtos" color="#C0C0C0">
          <ListaProdutos />
        </Card>
        <Card titulo="#6 - Lista Alunos" color="#FF4C65">
          <ListaAlunos />
        </Card>
        <Card titulo="#5 - Componente com filhos" color="#00C8F8">
          <Familia sobrenome="Ferreira"/>
        </Card>
        <Card titulo="#4 - Aleatório" color="#FA6900">
          <Aleatorio min={1} max={60} />
        </Card>
        <Card titulo="#3 - Fragmento" color="#E946CF">
          <Fragmento />
        </Card>
        <Card titulo="#2 - Com parâmetro" color="#E8B71A">
          <ComParametro aluno="Pedro Spíndola" nota={9.3} />
        </Card>
        <Card titulo="#1 - Primeiro" color="#588C73">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  )
};
