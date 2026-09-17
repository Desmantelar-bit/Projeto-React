import { useState } from 'react'
import Header from './components/Header'
import MenuLateral from './components/Menulateral'
import Conteudo from './components/Conteudo'
import Safra from './components/cadastros/Safra'
import Unidade from './components/cadastros/Unidade'
import Equipamento from './components/cadastros/Equipamento'
import Medicao from './components/cadastros/Medicao'
import UnidadeMedida from './components/cadastros/UnidadeMedida'
import TipoInformacao from './components/cadastros/TipoInformacao'
import Indicadores from './components/cadastros/Indicadores'
import Funcionarios from './components/cadastros/Funcionarios'
import Usuarios from './components/cadastros/Usuarios'
import Login from './components/Login'

import './App.css'
import './components/cadastros/Estilo.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(true)
  const [tela, setTela] = useState('inicio')

  function alterarMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <div className="app-wrapper">
      <Header />
      <div className="layout">
        <MenuLateral aberto={menuAberto} setTela={setTela} />
        <main className="area-conteudo">
          <div className="topbar">
            <button className="btn-menu" onClick={alterarMenu}>
              ☰ Menu
            </button>
          </div>
          <div className="conteudo-scroll">
            {tela === 'inicio' && <Conteudo />}
            {tela === 'safra' && <Safra />}
            {tela === 'unidade' && <Unidade />}
            {tela === 'equipamento' && <Equipamento />}
            {tela === 'medicao' && <Medicao />}
            {tela === 'unidademedida' && <UnidadeMedida />}
            {tela === 'tipoinformacao' && <TipoInformacao />}
            {tela === 'indicadores' && <Indicadores />}
            {tela === 'funcionarios' && <Funcionarios />}
            {tela === 'usuarios' && <Usuarios />}
            {tela === 'login' && <Login />}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
