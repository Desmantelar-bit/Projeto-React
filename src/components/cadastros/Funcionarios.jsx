import { useState } from 'react'
import './Funcionarios.css'

function Funcionarios() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [setor, setSetor] = useState('')
  const [cargo, setCargo] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    if (email.trim() === '') novosErros.email = 'Informe o e-mail'
    if (telefone.trim() === '') novosErros.telefone = 'Informe o telefone'
    if (setor === '') novosErros.setor = 'Selecione o setor'
    if (cargo.trim() === '') novosErros.cargo = 'Informe o cargo'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) {
      setMensagem('')
      return
    }
    setMensagem('Funcionário cadastrado com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Funcionário</h2>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        <form onSubmit={salvar}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input
              type="text"
              className={`form-control glass-input ${erros.nome ? 'is-invalid' : ''}`}
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="email"
              className={`form-control glass-input ${erros.email ? 'is-invalid' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {erros.email && <div className="invalid-feedback">{erros.email}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Telefone</label>
            <input
              type="text"
              className={`form-control glass-input ${erros.telefone ? 'is-invalid' : ''}`}
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            {erros.telefone && <div className="invalid-feedback">{erros.telefone}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Setor</label>
            <select
              className={`form-select glass-input ${erros.setor ? 'is-invalid' : ''}`}
              value={setor}
              onChange={(e) => setSetor(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Produção">Produção</option>
              <option value="Manutenção">Manutenção</option>
              <option value="TI">TI</option>
            </select>
            {erros.setor && <div className="invalid-feedback">{erros.setor}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Cargo</label>
            <input
              type="text"
              className={`form-control glass-input ${erros.cargo ? 'is-invalid' : ''}`}
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
            {erros.cargo && <div className="invalid-feedback">{erros.cargo}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Funcionarios
