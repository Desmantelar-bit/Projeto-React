import { useState } from 'react'
import './Estilo.css'

function Indicadores() {
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [un, setUn] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    if (descricao.trim() === '') novosErros.descricao = 'Informe a descrição'
    if (un.trim() === '') novosErros.un = 'Informe a unidade'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
    setMensagem('Indicador cadastrado com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Indicador</h2>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        <form onSubmit={salvar}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className={`form-control glass-input ${erros.nome ? 'is-invalid' : ''}`} value={nome} onChange={(e) => setNome(e.target.value)} />
            {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Descrição</label>
            <textarea className={`form-control glass-input ${erros.descricao ? 'is-invalid' : ''}`} rows={3} value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            {erros.descricao && <div className="invalid-feedback">{erros.descricao}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Unidade (Un)</label>
            <input type="text" className={`form-control glass-input ${erros.un ? 'is-invalid' : ''}`} value={un} onChange={(e) => setUn(e.target.value)} />
            {erros.un && <div className="invalid-feedback">{erros.un}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Indicadores
