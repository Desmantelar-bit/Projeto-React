import { useState } from 'react'
import '../cadastros/Funcionarios.css'

function Produtos() {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [estoque, setEstoque] = useState('')
  const [categoria, setCategoria] = useState('')
  const [erros, setErros] = useState({})
  const [mensagem, setMensagem] = useState('')

  function salvar(event) {
    event.preventDefault()
    const novosErros = {}
    if (nome.trim() === '') novosErros.nome = 'Informe o nome'
    if (preco.trim() === '') novosErros.preco = 'Informe o preço'
    if (estoque.trim() === '') novosErros.estoque = 'Informe a quantidade em estoque'
    if (categoria === '') novosErros.categoria = 'Selecione a categoria'
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
    setMensagem('Produto cadastrado com sucesso!')
  }

  return (
    <section className="p-4">
      <div className="glass-card">
        <h2>Cadastro de Produto</h2>
        {mensagem && <div className="alert alert-success">{mensagem}</div>}
        <form onSubmit={salvar}>
          <div className="mb-3">
            <label className="form-label">Nome</label>
            <input type="text" className={`form-control glass-input ${erros.nome ? 'is-invalid' : ''}`} value={nome} onChange={(e) => setNome(e.target.value)} />
            {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Preço (R$)</label>
            <input type="number" className={`form-control glass-input ${erros.preco ? 'is-invalid' : ''}`} value={preco} onChange={(e) => setPreco(e.target.value)} />
            {erros.preco && <div className="invalid-feedback">{erros.preco}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Estoque</label>
            <input type="number" className={`form-control glass-input ${erros.estoque ? 'is-invalid' : ''}`} value={estoque} onChange={(e) => setEstoque(e.target.value)} />
            {erros.estoque && <div className="invalid-feedback">{erros.estoque}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Categoria</label>
            <select className={`form-select glass-input ${erros.categoria ? 'is-invalid' : ''}`} value={categoria} onChange={(e) => setCategoria(e.target.value)}>
              <option value="">Selecione</option>
              <option value="Eletrônicos">Eletrônicos</option>
              <option value="Alimentos">Alimentos</option>
              <option value="Vestuário">Vestuário</option>
              <option value="Ferramentas">Ferramentas</option>
              <option value="Outros">Outros</option>
            </select>
            {erros.categoria && <div className="invalid-feedback">{erros.categoria}</div>}
          </div>
          <button type="submit" className="btn glass-btn">Cadastrar</button>
        </form>
      </div>
    </section>
  )
}

export default Produtos
