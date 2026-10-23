import { useMemo, useState } from 'react'

const rotas = [
    { tela: 'inicio', nome: 'Início' },
    { tela: 'safra', nome: 'Safras' },
    { tela: 'unidade', nome: 'Unidades' },
    { tela: 'equipamento', nome: 'Equipamentos' },
    { tela: 'medicao', nome: 'Medições' },
    { tela: 'unidademedida', nome: 'Unidades de medida' },
    { tela: 'tipoinformacao', nome: 'Tipos de informação' },
    { tela: 'indicadores', nome: 'Gerenciar indicadores' },
    { tela: 'funcionarios', nome: 'Funcionários' },
    { tela: 'usuarios', nome: 'Usuários' },
    { tela: 'login', nome: 'Login' },
]
const paisBreadcrumb = {
    safra: 'Gestão base',
    unidade: 'Gestão base',
    equipamento: 'Gestão base',
    medicao: 'Gestão base',
    unidademedida: 'Gestão base',
    tipoinformacao: 'Gestão base',
    funcionarios: 'Acessos',
    usuarios: 'Acessos',
    indicadores: 'Indicadores & BI',
    visualizarIndicador: 'Indicadores & BI',
}

function Header({ tela, indicador, indicadores, setTela, selecionarIndicador }) {
    const [busca, setBusca] = useState('')
    const [buscaAberta, setBuscaAberta] = useState(false)
    const nomeTela = tela === 'visualizarIndicador'
        ? indicador?.Nome || 'Indicador'
        : rotas.find(item => item.tela === tela)?.nome || 'Início'
    const paiBreadcrumb = paisBreadcrumb[tela]
    const resultados = useMemo(() => {
        const termo = busca.trim().toLocaleLowerCase('pt-BR')
        if (!termo) return []
        return [
            ...rotas.filter(item => item.nome.toLocaleLowerCase('pt-BR').includes(termo)),
            ...(indicadores || [])
                .filter(item => item.Nome?.toLocaleLowerCase('pt-BR').includes(termo))
                .map(item => ({ ...item, indicador: true })),
        ].slice(0, 6)
    }, [busca, indicadores])

    function selecionarResultado(item) {
        if (item.indicador) {
            selecionarIndicador(item)
        } else {
            setTela(item.tela)
        }
        setBusca('')
        setBuscaAberta(false)
    }

    return (
        <header className="app-header">
            <div className="header-brand">
                <div className="brand-mark" aria-hidden="true">S</div>
                <span className="brand-name">Sistema</span>
                <span className="breadcrumb-separator">/</span>
                {paiBreadcrumb && <span className="breadcrumb-parent">{paiBreadcrumb}</span>}
                {paiBreadcrumb && <span className="breadcrumb-separator">/</span>}
                <span className="breadcrumb-current">{nomeTela}</span>
            </div>
            <div className="header-actions">
                <div
                    className="header-search"
                    onBlur={event => {
                        if (!event.currentTarget.contains(event.relatedTarget)) setBuscaAberta(false)
                    }}
                >
                    <span aria-hidden="true" className="search-icon">⌕</span>
                    <input
                        aria-label="Buscar telas e indicadores"
                        placeholder="Buscar..."
                        value={busca}
                        onFocus={() => setBuscaAberta(true)}
                        onChange={event => {
                            setBusca(event.target.value)
                            setBuscaAberta(true)
                        }}
                        onKeyDown={event => {
                            if (event.key === 'Escape') setBuscaAberta(false)
                            if (event.key === 'Enter' && resultados[0]) {
                                selecionarResultado(resultados[0])
                            }
                        }}
                    />
                    {buscaAberta && busca.trim() && (
                        <div className="search-results">
                            {resultados.length ? resultados.map((item, index) => (
                                <button
                                    type="button"
                                    key={item.indicador ? `indicador-${item.Id}` : item.tela || index}
                                    onMouseDown={event => event.preventDefault()}
                                    onClick={() => selecionarResultado(item)}
                                >
                                    <span>{item.indicador ? item.Nome : item.nome}</span>
                                    <small>{item.indicador ? 'Indicador' : 'Navegação'}</small>
                                </button>
                            )) : <p>Nenhum resultado encontrado.</p>}
                        </div>
                    )}
                </div>
                <div className="header-profile" aria-label="Perfil do usuário">
                    <span className="profile-avatar">U</span>
                    <span className="profile-name">Usuário</span>
                </div>
            </div>
        </header>
    )
}
export default Header
