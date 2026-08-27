import { useState } from 'react'
import '../cadastros/Funcionarios.css'

function Equipamentos() {
  const [nome, setNome] = useState('')
  const [numero, setNumero] = useState('')
  const [tipo, setTipo] = useState('')
  const [setor, setSetor] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    if (numero.trim() === '') novosErros.numero = 'Informe o número de série'
    if (tipo === '') novosErros.tipo = 'Selecione o tipo'
    if (setor === '') novosErros.setor = 'Selecione o setor'
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
            <label className="form-label">Número de Série</label>
            <input type="text" className={`form-control glass-input ${erros.numero ? 'is-invalid' : ''}`} value={numero} onChange={(e) => setNumero(e.target.value)} />
            {erros.numero && <div className="invalid-feedback">{erros.numero}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Tipo</label>
            <select className={`form-select glass-input ${erros.tipo ? 'is-invalid' : ''}`} value={tipo} onChange={(e) => setTipo(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Computador">Computador</option>
              <option value="Impressora">Impressora</option>
              <option value="Servidor">Servidor</option>
              <option value="Máquina Industrial">Máquina Industrial</option>
              <option value="Outros">Outros</option>
            </select>
            {erros.tipo && <div className="invalid-feedback">{erros.tipo}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Setor</label>
            <select className={`form-select glass-input ${erros.setor ? 'is-invalid' : ''}`} value={setor} onChange={(e) => setSetor(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Administrativo">Administrativo</option>
              <option value="Produção">Produção</option>
              <option value="Manutenção">Manutenção</option>
              <option value="TI">TI</option>
            </select>
            {erros.setor && <div className="invalid-feedback">{erros.setor}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Equipamentos
