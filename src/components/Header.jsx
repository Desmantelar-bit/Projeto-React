function Header() {
    return (
        <header style={{
            background: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '0 20px',
            height: '52px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                    width: '28px', height: '28px', borderRadius: '6px',
                    background: 'var(--accent-primary)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '14px',
                    flexShrink: 0,
                }}>⚡</div>
                <span style={{
                    color: 'var(--text-heading)',
                    fontWeight: 600,
                    fontSize: '14px',
                    letterSpacing: '-0.02em',
                }}>
                    Sistema React
                </span>
            </div>
            <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-default)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
            }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" stroke="var(--text-muted)" strokeWidth="1.5" fill="none"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
            </div>
        </header>
    )
}
export default Header
