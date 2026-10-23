import { ArrowRight, BarChart3, Database, Users } from 'lucide-react'
import './cadastros/Estilo.css'

const atalhos = [
    {
        titulo: 'Gestão base',
        descricao: 'Safras, unidades, equipamentos e medições',
        destino: 'safra',
        Icone: Database,
    },
    {
        titulo: 'Acessos',
        descricao: 'Funcionários e usuários do sistema',
        destino: 'funcionarios',
        Icone: Users,
    },
    {
        titulo: 'Indicadores & BI',
        descricao: 'Gerencie indicadores e abra relatórios',
        destino: 'indicadores',
        Icone: BarChart3,
    },
]

function Conteudo({ indicadores = [], setTela, selecionarIndicador }) {
    return (
        <section className="dashboard">
            <div className="dashboard-heading">
                <div>
                    <p className="dashboard-eyebrow">Workspace</p>
                    <h1>Visão geral</h1>
                    <p className="dashboard-description">
                        Acesse as áreas do sistema e acompanhe os relatórios disponíveis.
                    </p>
                </div>
            </div>

            <div className="dashboard-summary">
                <div className="dashboard-summary-icon">
                    <BarChart3 size={18} aria-hidden="true" />
                </div>
                <div>
                    <p>Indicadores cadastrados</p>
                    <strong>{indicadores.length}</strong>
                </div>
                <button type="button" onClick={() => setTela('indicadores')}>
                    Gerenciar indicadores <ArrowRight size={14} aria-hidden="true" />
                </button>
            </div>

            <section className="dashboard-section" aria-labelledby="atalhos-title">
                <div className="dashboard-section-heading">
                    <div>
                        <h2 id="atalhos-title">Acesso rápido</h2>
                        <p>Ir diretamente para uma área do sistema.</p>
                    </div>
                </div>
                <div className="dashboard-shortcuts">
                    {atalhos.map(({ titulo, descricao, destino, Icone }) => (
                        <button
                            type="button"
                            className="dashboard-shortcut"
                            key={destino}
                            onClick={() => setTela(destino)}
                        >
                            <span className="dashboard-shortcut-icon">
                                <Icone size={17} aria-hidden="true" />
                            </span>
                            <span className="dashboard-shortcut-copy">
                                <strong>{titulo}</strong>
                                <small>{descricao}</small>
                            </span>
                            <ArrowRight className="dashboard-shortcut-arrow" size={15} aria-hidden="true" />
                        </button>
                    ))}
                </div>
            </section>

            <section className="dashboard-section" aria-labelledby="relatorios-title">
                <div className="dashboard-section-heading">
                    <div>
                        <h2 id="relatorios-title">Relatórios disponíveis</h2>
                        <p>Abra um indicador cadastrado para visualizar seu relatório.</p>
                    </div>
                    {indicadores.length > 0 && (
                        <button
                            type="button"
                            className="dashboard-text-button"
                            onClick={() => setTela('indicadores')}
                        >
                            Ver todos
                        </button>
                    )}
                </div>
                {indicadores.length > 0 ? (
                    <div className="dashboard-report-list">
                        {indicadores.map(item => (
                            <button
                                type="button"
                                className="dashboard-report"
                                key={item.Id}
                                onClick={() => selecionarIndicador(item)}
                            >
                                <span className="dashboard-report-icon">
                                    <BarChart3 size={16} aria-hidden="true" />
                                </span>
                                <span className="dashboard-report-copy">
                                    <strong>{item.Nome}</strong>
                                    <small>{item.Descricao || 'Relatório de indicador'}</small>
                                </span>
                                <span className="dashboard-report-open">
                                    Abrir <ArrowRight size={14} aria-hidden="true" />
                                </span>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="dashboard-empty">
                        <p>Nenhum indicador cadastrado ainda.</p>
                        <button type="button" onClick={() => setTela('indicadores')}>
                            Cadastrar indicador
                        </button>
                    </div>
                )}
            </section>
        </section>
    )
}

export default Conteudo
