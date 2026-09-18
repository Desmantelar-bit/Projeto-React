import './cadastros/Estilo.css'

function Conteudo() {
    return (
        <section className="p-4">
            <div className="glass-card-wide" style={{ maxWidth: '680px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                    <div style={{
                        width: '38px', height: '38px', borderRadius: '8px',
                        background: 'var(--accent-primary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '17px',
                        flexShrink: 0,
                    }}>⚡</div>
                    <div>
                        <h2 style={{ margin: 0 }}>Bem-vindo ao Sistema</h2>
                        <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '13px', marginTop: '2px' }}>Gerencie seus cadastros com facilidade</p>
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
                    {[
                        { icon: '🌾', label: 'Safras' },
                        { icon: '👷', label: 'Funcionários' },
                        { icon: '⚙️', label: 'Equipamentos' },
                        { icon: '📊', label: 'Indicadores' },
                        { icon: '📏', label: 'Medições' },
                        { icon: '👤', label: 'Usuários' },
                    ].map(({ icon, label }) => (
                        <div key={label} style={{
                            background: 'var(--bg-app)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: '8px',
                            padding: '16px 12px',
                            textAlign: 'center',
                            color: 'var(--text-muted)',
                            fontWeight: 500,
                            fontSize: '13px',
                        }}>
                            <div style={{ fontSize: '18px', marginBottom: '6px' }}>{icon}</div>
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Conteudo
