import { useState } from 'react'
import './Estilo.css'

function TipoInformacao() {
  const [nome, setNome] = useState('')
  const [unidadeMedida, setUnidadeMedida] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    if (unidadeMedida.trim() === '') novosErros.unidadeMedida = 'Informe a unidade de medida'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
    setMensagem('Tipo de informação cadastrado com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Tipo de Informação</h2>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        <form onSubmit={salvar}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className={`form-control glass-input ${erros.nome ? 'is-invalid' : ''}`} value={nome} onChange={(e) => setNome(e.target.value)} />
            {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Unidade de Medida</label>
            <input type="text" className={`form-control glass-input ${erros.unidadeMedida ? 'is-invalid' : ''}`} value={unidadeMedida} onChange={(e) => setUnidadeMedida(e.target.value)} />
            {erros.unidadeMedida && <div className="invalid-feedback">{erros.unidadeMedida}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default TipoInformacao
