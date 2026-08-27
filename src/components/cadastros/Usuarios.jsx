import { useState } from 'react'
import '../cadastros/Funcionarios.css'

function Usuarios() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [perfil, setPerfil] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    if (email.trim() === '') novosErros.email = 'Informe o e-mail'
    if (senha.trim() === '') novosErros.senha = 'Informe a senha'
    if (perfil === '') novosErros.perfil = 'Selecione o perfil'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
    setMensagem('Usuário cadastrado com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Usuário</h2>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        <form onSubmit={salvar}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className={`form-control glass-input ${erros.nome ? 'is-invalid' : ''}`} value={nome} onChange={(e) => setNome(e.target.value)} />
            {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input type="email" className={`form-control glass-input ${erros.email ? 'is-invalid' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} />
            {erros.email && <div className="invalid-feedback">{erros.email}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input type="password" className={`form-control glass-input ${erros.senha ? 'is-invalid' : ''}`} value={senha} onChange={(e) => setSenha(e.target.value)} />
            {erros.senha && <div className="invalid-feedback">{erros.senha}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Perfil</label>
            <select className={`form-select glass-input ${erros.perfil ? 'is-invalid' : ''}`} value={perfil} onChange={(e) => setPerfil(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Administrador">Administrador</option>
              <option value="Gerente">Gerente</option>
              <option value="Operador">Operador</option>
              <option value="Visualizador">Visualizador</option>
            </select>
            {erros.perfil && <div className="invalid-feedback">{erros.perfil}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Usuarios
