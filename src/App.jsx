import { useEffect, useState } from 'react'
import { indicadorService } from './service/indicadorService'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Conteudo from './components/Conteudo'
import CadastroApi from './components/CadastroApi.js'
import Indicadores from './components/Indicadores'
import VisualizarIndicador from './components/VisualizarIndicador'
import Funcionarios from './components/cadastros/Funcionarios'
import Usuarios from './components/cadastros/Usuarios'
import Login from './components/Login'

import './App.css'
import './components/cadastros/Estilo.css'

function App() {
  const [menuAberto, setMenuAberto] = useState(true)
  const [tela, setTela] = useState('inicio')
  const [indicadores, setIndicadores] = useState([])
  const [indicadorSelecionado, setIndicadorSelecionado] = useState(null)

  async function atualizarMenu() {
    const dados = await indicadorService.listar()
    setIndicadores(Array.isArray(dados) ? dados : [])
  }

  useEffect(() => {
    atualizarMenu().catch(console.error)
  }, [])

  function selecionarIndicador(item) {
    setIndicadorSelecionado(item)
    setTela('visualizarIndicador')
  }

  function alterarMenu() {
    setMenuAberto(!menuAberto)
  }

  return (
    <div className="app-wrapper">
      <Header
        tela={tela}
        indicador={indicadorSelecionado}
        indicadores={indicadores}
        setTela={setTela}
        selecionarIndicador={selecionarIndicador}
      />
      <div className="layout">
        <MenuLateral
          aberto={menuAberto}
          tela={tela}
          setTela={setTela}
          indicadores={indicadores}
          indicadorSelecionado={indicadorSelecionado}
          selecionarIndicador={selecionarIndicador}
        />
        <main className="area-conteudo">
          <div className="topbar">
            <button className="btn-menu" onClick={alterarMenu}>
              ☰ Menu
            </button>
          </div>
          <div className="conteudo-scroll">
            {tela === 'inicio' && (
              <Conteudo
                indicadores={indicadores}
                setTela={setTela}
                selecionarIndicador={selecionarIndicador}
              />
            )}
            {tela === 'safras' && <CadastroApi recurso="safras" />}
            {tela === 'unidades' && <CadastroApi recurso="unidades" />}
            {tela === 'unidadesMedida' && <CadastroApi recurso="unidadesMedida" />}
            {tela === 'equipamentos' && <CadastroApi recurso="equipamentos" />}
            {tela === 'tiposInformacao' && <CadastroApi recurso="tiposInformacao" />}
            {tela === 'medicoes' && <CadastroApi recurso="medicoes" />}
            {tela === 'indicadores' && <Indicadores atualizarMenu={atualizarMenu} />}
            {tela === 'visualizarIndicador' && (
              <VisualizarIndicador
                key={`${indicadorSelecionado?.Id ?? 'none'}-${indicadorSelecionado?.Url ?? ''}`}
                indicador={indicadorSelecionado}
              />
            )}
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
