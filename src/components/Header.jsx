function Header() {
    return (
        <header style={{
            background: '#131c2e',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            boxShadow: '0 2px 24px rgba(0, 0, 0, 0.5)',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'linear-gradient(135deg, #0090cc, #005f99)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '18px',
                    boxShadow: '0 0 12px rgba(0, 180, 255, 0.3)'
                }}>⚡</div>
                <span style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '0.01em' }}>
                    Sistema React
                </span>
            </div>
            <div style={{
                width: '38px', height: '38px', borderRadius: '50%',
                background: '#1a2540',
                border: '2px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer',
            }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="8" r="4" fill="#475569"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#475569" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </div>
        </header>
    )
}
export default Header
