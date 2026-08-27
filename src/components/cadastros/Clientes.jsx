import { useState } from 'react'
import '../cadastros/Funcionarios.css'

function Clientes() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cpf, setCpf] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    if (email.trim() === '') novosErros.email = 'Informe o e-mail'
    if (telefone.trim() === '') novosErros.telefone = 'Informe o telefone'
    if (cpf.trim() === '') novosErros.cpf = 'Informe o CPF'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) {
      setMensagem('')
      return
    }
    setMensagem('Cliente cadastrado com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Cliente</h2>
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
            <label className="form-label">Telefone</label>
            <input type="text" className={`form-control glass-input ${erros.telefone ? 'is-invalid' : ''}`} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            {erros.telefone && <div className="invalid-feedback">{erros.telefone}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">CPF</label>
            <input type="text" className={`form-control glass-input ${erros.cpf ? 'is-invalid' : ''}`} value={cpf} onChange={(e) => setCpf(e.target.value)} />
            {erros.cpf && <div className="invalid-feedback">{erros.cpf}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Clientes
