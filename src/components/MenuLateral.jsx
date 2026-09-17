import { useState } from 'react'
import './cadastros/Estilo.css'

function MenuLateral({ aberto, setTela }) {
  const [cadastroAberto, setCadastroAberto] = useState(false)

  return (
    <aside className={`menu-lateral ${aberto ? 'aberto' : 'fechado'}`}>
      <p className="menu-titulo">Navegação</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button className="menu-btn" onClick={() => setTela('inicio')}>🏠 Início</button>
          <button className="menu-btn" onClick={() => setCadastroAberto(!cadastroAberto)}>
            📋 Cadastros {cadastroAberto ? '▲' : '▼'}
          </button>
          {cadastroAberto && (
            <div style={{ marginLeft: '8px', display: 'flex', flexDirection: 'column' }}>
              <button className="menu-btn-sub" onClick={() => setTela('safra')}>🌾 Safra</button>
              <button className="menu-btn-sub" onClick={() => setTela('unidade')}>🏢 Unidade</button>
              <button className="menu-btn-sub" onClick={() => setTela('equipamento')}>⚙️ Equipamento</button>
              <button className="menu-btn-sub" onClick={() => setTela('medicao')}>📏 Medição</button>
              <button className="menu-btn-sub" onClick={() => setTela('unidademedida')}>📐 Unidade de Medida</button>
              <button className="menu-btn-sub" onClick={() => setTela('tipoinformacao')}>🏷️ Tipo de Informação</button>
              <button className="menu-btn-sub" onClick={() => setTela('indicadores')}>📊 Indicadores</button>
              <button className="menu-btn-sub" onClick={() => setTela('funcionarios')}>👷 Funcionários</button>
              <button className="menu-btn-sub" onClick={() => setTela('usuarios')}>👤 Usuários</button>
            </div>
          )}
          <button className="menu-btn" onClick={() => setTela('login')}>🔐 Login</button>
        </div>
    </aside>
  )
}

export default MenuLateral
