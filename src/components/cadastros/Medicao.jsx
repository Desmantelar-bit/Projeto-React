import { useState } from 'react'
import './Estilo.css'

function Medicao() {
  const [safra, setSafra] = useState('')
  const [equipamento, setEquipamento] = useState('')
  const [tipoInformacao, setTipoInformacao] = useState('')
  const [valor, setValor] = useState('')
  const [data, setData] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (safra.trim() === '') novosErros.safra = 'Informe a safra'
    if (equipamento.trim() === '') novosErros.equipamento = 'Informe o equipamento'
    if (tipoInformacao.trim() === '') novosErros.tipoInformacao = 'Informe o tipo de informação'
    if (valor.trim() === '') novosErros.valor = 'Informe o valor'
    if (data === '') novosErros.data = 'Informe a data e hora'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
    setMensagem('Medição cadastrada com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Medição</h2>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        <form onSubmit={salvar}>
          <div className="mb-3">
            <label className="form-label">Safra</label>
            <input type="text" className={`form-control glass-input ${erros.safra ? 'is-invalid' : ''}`} value={safra} onChange={(e) => setSafra(e.target.value)} />
            {erros.safra && <div className="invalid-feedback">{erros.safra}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Equipamento</label>
            <input type="text" className={`form-control glass-input ${erros.equipamento ? 'is-invalid' : ''}`} value={equipamento} onChange={(e) => setEquipamento(e.target.value)} />
            {erros.equipamento && <div className="invalid-feedback">{erros.equipamento}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Tipo de Informação</label>
            <input type="text" className={`form-control glass-input ${erros.tipoInformacao ? 'is-invalid' : ''}`} value={tipoInformacao} onChange={(e) => setTipoInformacao(e.target.value)} />
            {erros.tipoInformacao && <div className="invalid-feedback">{erros.tipoInformacao}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Valor</label>
            <input type="number" step="any" className={`form-control glass-input ${erros.valor ? 'is-invalid' : ''}`} value={valor} onChange={(e) => setValor(e.target.value)} />
            {erros.valor && <div className="invalid-feedback">{erros.valor}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Data e Hora</label>
            <input type="datetime-local" className={`form-control glass-input ${erros.data ? 'is-invalid' : ''}`} value={data} onChange={(e) => setData(e.target.value)} />
            {erros.data && <div className="invalid-feedback">{erros.data}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Medicao
