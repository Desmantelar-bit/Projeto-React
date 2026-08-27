import { useState } from 'react'
import '../cadastros/Funcionarios.css'

function Fornecedores() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    if (email.trim() === '') novosErros.email = 'Informe o e-mail'
    if (telefone.trim() === '') novosErros.telefone = 'Informe o telefone'
    if (cnpj.trim() === '') novosErros.cnpj = 'Informe o CNPJ'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
    setMensagem('Fornecedor cadastrado com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Fornecedor</h2>
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
            <label className="form-label">CNPJ</label>
            <input type="text" className={`form-control glass-input ${erros.cnpj ? 'is-invalid' : ''}`} value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
            {erros.cnpj && <div className="invalid-feedback">{erros.cnpj}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Fornecedores
