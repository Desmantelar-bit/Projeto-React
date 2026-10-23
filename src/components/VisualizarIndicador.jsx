import { useEffect, useRef, useState } from 'react'

export default function VisualizarIndicador({ indicador }) {
    const [carregando, setCarregando] = useState(true)
    const [chaveIframe, setChaveIframe] = useState(0)
    const [erroTelaCheia, setErroTelaCheia] = useState('')
    const [telaCheia, setTelaCheia] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        function atualizarTelaCheia() {
            setTelaCheia(document.fullscreenElement === containerRef.current)
        }
        document.addEventListener('fullscreenchange', atualizarTelaCheia)
        return () => document.removeEventListener('fullscreenchange', atualizarTelaCheia)
    }, [])

    if (!indicador) return <p className="p-4">Selecione um indicador.</p>

    let url
    try {
        const candidata = new URL(indicador.Url)
        if (
            candidata.protocol === 'https:' &&
            candidata.hostname === 'app.powerbi.com' &&
            candidata.pathname === '/view' &&
            candidata.searchParams.has('r')
        ) {
            candidata.searchParams.set('pageView', 'fitToPage')
            url = candidata.toString()
        }
    } catch {
        url = undefined
    }

    function recarregar() {
        setCarregando(true)
        setChaveIframe(valor => valor + 1)
    }

    function ajustarPagina() {
        recarregar()
    }

    async function alternarTelaCheia() {
        setErroTelaCheia('')
        try {
            if (document.fullscreenElement) {
                await document.exitFullscreen()
            } else {
                await containerRef.current?.requestFullscreen()
            }
        } catch {
            setErroTelaCheia('Não foi possível ativar o modo de tela cheia neste navegador.')
        }
    }

    return (
        <section className="report-view" ref={containerRef}>
            <div className="report-toolbar">
                <h2 className="report-title" title={indicador.Nome}>{indicador.Nome}</h2>
                <div className="report-toolbar-actions">
                    {url && <span className="report-status">Publicado via Web</span>}
                    {url && (
                        <>
                            <button type="button" className="report-action" onClick={recarregar}>
                                Recarregar
                            </button>
                            <button type="button" className="report-action" onClick={ajustarPagina}>
                                Ajustar à página
                            </button>
                            <button type="button" className="report-action" onClick={alternarTelaCheia}>
                                {telaCheia ? 'Minimizar' : 'Tela cheia'}
                            </button>
                        </>
                    )}
                </div>
            </div>
            {erroTelaCheia && <div className="alert alert-warning mb-0">{erroTelaCheia}</div>}
            {url ? (
                <div className="report-frame-wrap">
                    {carregando && (
                        <div className="report-skeleton" aria-label="Carregando relatório">
                            <div className="skeleton-bar" />
                            <div className="skeleton-block" />
                        </div>
                    )}
                    <iframe
                        key={chaveIframe}
                        title={indicador.Nome}
                        src={url}
                        className={`report-frame ${carregando ? 'carregando' : ''}`}
                        onLoad={() => setCarregando(false)}
                        allowFullScreen
                    />
                </div>
            ) : (
                <div className="alert alert-warning mt-3">
                    Para exibir o relatório aqui, atualize a URL do indicador com o link
                    público gerado em “Publicar na Web” no Power BI. O link deve começar
                    com <code>https://app.powerbi.com/view?r=</code>.
                </div>
            )}
        </section>
    )
}
