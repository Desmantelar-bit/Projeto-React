import { useState } from 'react'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Conteudo from './components/Conteudo'
import Funcionarios from './components/cadastros/Funcionarios'
import Clientes from './components/cadastros/Clientes'
import Produtos from './components/cadastros/Produtos'
import Fornecedores from './components/cadastros/Fornecedores'
import Setores from './components/cadastros/Setores'
import Usuarios from './components/cadastros/Usuarios'
import Equipamentos from './components/cadastros/Equipamentos'
import './App.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(true)
  const [tela, setTela] = useState('inicio')

  function alterarMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <>
      <Header />
      <div className="layout">
        <MenuLateral aberto={menuAberto} setTela={setTela} />
        <main className="area-conteudo">
          <div className="p-3 border-bottom bg-white">
            <button className="btn btn-primary" onClick={alterarMenu}>
              ☰ Menu
            </button>
          </div>
          {tela === 'inicio' && <Conteudo />}
          {tela === 'funcionarios' && <Funcionarios />}
          {tela === 'clientes' && <Clientes />}
          {tela === 'produtos' && <Produtos />}
          {tela === 'fornecedores' && <Fornecedores />}
          {tela === 'setores' && <Setores />}
          {tela === 'usuarios' && <Usuarios />}
          {tela === 'equipamentos' && <Equipamentos />}
        </main>
      </div>
    </>
  )
}

export default App
