import { useState } from 'react'
import './Estilo.css'

function Unidade() {
  const [nome, setNome] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
    setMensagem('Unidade cadastrada com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Unidade</h2>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        <form onSubmit={salvar}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className={`form-control glass-input ${erros.nome ? 'is-invalid' : ''}`} value={nome} onChange={(e) => setNome(e.target.value)} />
            {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Unidade
