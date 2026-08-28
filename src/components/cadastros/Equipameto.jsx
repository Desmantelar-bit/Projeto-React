import { useState } from 'react'
import './Estilo.css'

function Equipamento() {
  const [nome, setNome] = useState('')
  const [unidade, setUnidade] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    if (unidade.trim() === '') novosErros.unidade = 'Informe a unidade'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
    setMensagem('Equipamento cadastrado com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Equipamento</h2>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        <form onSubmit={salvar}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className={`form-control glass-input ${erros.nome ? 'is-invalid' : ''}`} value={nome} onChange={(e) => setNome(e.target.value)} />
            {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Unidade</label>
            <input type="text" className={`form-control glass-input ${erros.unidade ? 'is-invalid' : ''}`} value={unidade} onChange={(e) => setUnidade(e.target.value)} />
            {erros.unidade && <div className="invalid-feedback">{erros.unidade}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Equipamento
