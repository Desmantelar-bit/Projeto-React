import { useState } from 'react'
import './cadastros/Estilo.css'

function MenuLateral({ aberto, setTela }) {
  const [cadastroAberto, setCadastroAberto] = useState(false)
  const [telaAtiva, setTelaAtiva] = useState('inicio')

  function navegar(tela) {
    setTela(tela)
    setTelaAtiva(tela)
  }

  return (
    <aside className={`menu-lateral ${aberto ? 'aberto' : 'fechado'}`}>
      <p className="menu-titulo">Navegação</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button className={`menu-btn ${telaAtiva === 'inicio' ? 'ativo' : ''}`} onClick={() => navegar('inicio')}>🏠 Início</button>
          <button className={`menu-btn ${cadastroAberto ? 'ativo' : ''}`} onClick={() => setCadastroAberto(!cadastroAberto)}>
            📋 Cadastros {cadastroAberto ? '▲' : '▼'}
          </button>
          {cadastroAberto && (
            <div style={{ marginLeft: '8px', display: 'flex', flexDirection: 'column' }}>
              <button className={`menu-btn-sub ${telaAtiva === 'safra' ? 'ativo' : ''}`} onClick={() => navegar('safra')}>🌾 Safra</button>
              <button className={`menu-btn-sub ${telaAtiva === 'unidade' ? 'ativo' : ''}`} onClick={() => navegar('unidade')}>🏢 Unidade</button>
              <button className={`menu-btn-sub ${telaAtiva === 'equipamento' ? 'ativo' : ''}`} onClick={() => navegar('equipamento')}>⚙️ Equipamento</button>
              <button className={`menu-btn-sub ${telaAtiva === 'medicao' ? 'ativo' : ''}`} onClick={() => navegar('medicao')}>📏 Medição</button>
              <button className={`menu-btn-sub ${telaAtiva === 'unidademedida' ? 'ativo' : ''}`} onClick={() => navegar('unidademedida')}>📐 Unidade de Medida</button>
              <button className={`menu-btn-sub ${telaAtiva === 'tipoinformacao' ? 'ativo' : ''}`} onClick={() => navegar('tipoinformacao')}>🏷️ Tipo de Informação</button>
              <button className={`menu-btn-sub ${telaAtiva === 'indicadores' ? 'ativo' : ''}`} onClick={() => navegar('indicadores')}>📊 Indicadores</button>
              <button className={`menu-btn-sub ${telaAtiva === 'funcionarios' ? 'ativo' : ''}`} onClick={() => navegar('funcionarios')}>👷 Funcionários</button>
              <button className={`menu-btn-sub ${telaAtiva === 'usuarios' ? 'ativo' : ''}`} onClick={() => navegar('usuarios')}>👤 Usuários</button>
            </div>
          )}
          <button className={`menu-btn ${telaAtiva === 'login' ? 'ativo' : ''}`} onClick={() => navegar('login')}>🔐 Login</button>
        </div>
    </aside>
  )
}

export default MenuLateral
