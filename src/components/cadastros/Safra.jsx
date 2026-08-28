import { useState } from 'react'
import './Estilo.css'

function Safra() {
  const [nomeSafra, setNomeSafra] = useState('')
  const [dataInicio, setDataInicio] = useState('')
  const [dataFim, setDataFim] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nomeSafra.trim() === '') novosErros.nomeSafra = 'Informe o nome da safra'
    if (dataInicio === '') novosErros.dataInicio = 'Informe a data de início'
    if (dataFim === '') novosErros.dataFim = 'Informe a data de fim'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
    setMensagem('Safra cadastrada com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Safra</h2>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        <form onSubmit={salvar}>
          <div className="mb-3">
            <label className="form-label">Nome da Safra</label>
            <input type="text" className={`form-control glass-input ${erros.nomeSafra ? 'is-invalid' : ''}`} value={nomeSafra} onChange={(e) => setNomeSafra(e.target.value)} />
            {erros.nomeSafra && <div className="invalid-feedback">{erros.nomeSafra}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Data de Início</label>
            <input type="date" className={`form-control glass-input ${erros.dataInicio ? 'is-invalid' : ''}`} value={dataInicio} onChange={(e) => setDataInicio(e.target.value)} />
            {erros.dataInicio && <div className="invalid-feedback">{erros.dataInicio}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Data de Fim</label>
            <input type="date" className={`form-control glass-input ${erros.dataFim ? 'is-invalid' : ''}`} value={dataFim} onChange={(e) => setDataFim(e.target.value)} />
            {erros.dataFim && <div className="invalid-feedback">{erros.dataFim}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Safra
