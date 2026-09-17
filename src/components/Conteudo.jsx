import './cadastros/Estilo.css'

function Conteudo() {
    return (
        <section className="p-4">
            <div className="glass-card-wide" style={{ maxWidth: '700px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '1.5rem' }}>
                    <div style={{
                        width: '52px', height: '52px', borderRadius: '14px',
                        background: 'linear-gradient(135deg, #0090cc, #005f99)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '24px', boxShadow: '0 0 20px rgba(0, 180, 255, 0.25)'
                    }}>⚡</div>
                    <div>
                        <h2 style={{ margin: 0 }}>Bem-vindo ao Sistema</h2>
                        <p style={{ margin: 0, color: '#475569', fontSize: '0.88rem' }}>Gerencie seus cadastros com facilidade</p>
                    </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                    {[
                        { icon: '🌾', label: 'Safras' },
                        { icon: '👷', label: 'Funcionários' },
                        { icon: '⚙️', label: 'Equipamentos' },
                        { icon: '📊', label: 'Indicadores' },
                        { icon: '📏', label: 'Medições' },
                        { icon: '👤', label: 'Usuários' },
                    ].map(({ icon, label }) => (
                        <div key={label} style={{
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                            borderRadius: '10px',
                            padding: '16px',
                            textAlign: 'center',
                            color: '#64748b',
                            fontWeight: 500,
                            fontSize: '0.85rem',
                            transition: 'all 0.2s',
                        }}>
                            <div style={{ fontSize: '24px', marginBottom: '6px' }}>{icon}</div>
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Conteudo
