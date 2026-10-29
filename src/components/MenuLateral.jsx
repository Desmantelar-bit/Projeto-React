import { useState } from 'react'
import './cadastros/Estilo.css'

const gestaoBase = [
  ['safras', 'Safras'],
  ['unidades', 'Unidades'],
  ['unidadesMedida', 'Unidades de medida'],
  ['equipamentos', 'Equipamentos'],
  ['tiposInformacao', 'Tipos de informação'],
  ['medicoes', 'Medições'],
]

function MenuLateral({ aberto, tela, setTela, indicadores, indicadorSelecionado, selecionarIndicador }) {
  const [gestaoAberta, setGestaoAberta] = useState(true)

  function navegar(destino) {
    setTela(destino)
  }

  return (
    <aside className={`menu-lateral ${aberto ? 'aberto' : 'fechado'}`} aria-label="Navegação principal">
      <p className="menu-titulo">Workspace</p>
      <button
        className={`menu-btn ${tela === 'inicio' ? 'ativo' : ''}`}
        onClick={() => navegar('inicio')}
      >
        Visão geral
      </button>

      <div className="menu-grupo">
        <button
          className="menu-grupo-toggle"
          aria-expanded={gestaoAberta}
          onClick={() => setGestaoAberta(!gestaoAberta)}
        >
          <span>Gestão base</span>
          <span aria-hidden="true">{gestaoAberta ? '−' : '+'}</span>
        </button>
        {gestaoAberta && gestaoBase.map(([destino, rotulo]) => (
          <button
            key={destino}
            className={`menu-btn-sub ${tela === destino ? 'ativo' : ''}`}
            onClick={() => navegar(destino)}
          >
            {rotulo}
          </button>
        ))}
      </div>

      <p className="menu-grupo-titulo">Acessos</p>
      <button className={`menu-btn ${tela === 'funcionarios' ? 'ativo' : ''}`} onClick={() => setTela('funcionarios')}>
        Funcionários
      </button>
      <button
        className={`menu-btn ${tela === 'usuarios' ? 'ativo' : ''}`}
        onClick={() => setTela('usuarios')}
      >
        Usuários
      </button>

      <p className="menu-grupo-titulo">Indicadores &amp; BI</p>
      <button
        className={`menu-btn ${tela === 'indicadores' ? 'ativo' : ''}`}
        onClick={() => setTela('indicadores')}
      >
        Gerenciar indicadores
      </button>
      <div className="menu-indicadores" aria-label="Indicadores cadastrados">
        {indicadores?.map(item => (
          <button
            key={item.Id}
            className={`menu-btn-sub ${tela === 'visualizarIndicador' && indicadorSelecionado?.Id === item.Id ? 'ativo' : ''}`}
            title={item.Nome}
            onClick={() => selecionarIndicador(item)}
          >
            {item.Nome}
          </button>
        ))}
      </div>

      <p className="menu-grupo-titulo">Conta</p>
      <button
        className={`menu-btn ${tela === 'login' ? 'ativo' : ''}`}
        onClick={() => navegar('login')}
      >
        Login
      </button>
    </aside>
  )
}

export default MenuLateral
