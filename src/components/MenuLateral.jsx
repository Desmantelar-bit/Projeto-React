import { useState } from 'react'

function MenuLateral({ aberto, setTela }) {
  const [cadastroAberto, setCadastroAberto] = useState(false)

  function alterarCadastro() {
    setCadastroAberto(!cadastroAberto)
  }

  return (
    <aside className={`menu-lateral bg-dark text-white ${aberto ? 'aberto' : 'fechado'}`}>
      <h2 className="h6 text-uppercase mb-3">Menu</h2>
      <div className="d-grid gap-2">
        <button className="btn btn-outline-light text-start" onClick={() => setTela('inicio')}>
          Início
        </button>
        <button className="btn btn-outline-light text-start" onClick={alterarCadastro}>
          Cadastro {cadastroAberto ? '▲' : '▼'}
        </button>
        {cadastroAberto && (
          <div className="ms-3 d-grid gap-2">
            <button className="btn btn-sm btn-dark text-start" onClick={() => setTela('funcionarios')}>Funcionários</button>
            <button className="btn btn-sm btn-dark text-start" onClick={() => setTela('clientes')}>Clientes</button>
            <button className="btn btn-sm btn-dark text-start" onClick={() => setTela('produtos')}>Produtos</button>
            <button className="btn btn-sm btn-dark text-start" onClick={() => setTela('fornecedores')}>Fornecedores</button>
            <button className="btn btn-sm btn-dark text-start" onClick={() => setTela('setores')}>Setores</button>
            <button className="btn btn-sm btn-dark text-start" onClick={() => setTela('usuarios')}>Usuários</button>
            <button className="btn btn-sm btn-dark text-start" onClick={() => setTela('equipamentos')}>Equipamentos</button>
          </div>
        )}
      </div>
    </aside>
  )
}

export default MenuLateral
