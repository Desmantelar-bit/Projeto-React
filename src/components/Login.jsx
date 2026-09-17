import { useState } from 'react'
import './cadastros/Estilo.css'

function Login({ setTela }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')
    const [carregandoLocalizacao, setCarregandoLocalizacao] = useState(false)

    function registrarAcesso(usuario, localizacao = null) {
        const acesso = {
            nome: usuario.nome,
            email: usuario.email,
            foto: usuario.foto,
            dataHora: new Date().toISOString(),
            latitude: localizacao?.latitude ?? null,
            longitude: localizacao?.longitude ?? null
        }
        sessionStorage.setItem('acessoAtual', JSON.stringify(acesso))
        setMensagem('Login realizado com sucesso!')
    }

    function solicitarLocalizacao(usuario) {
        if (!navigator.geolocation) {
            registrarAcesso(usuario)
            setMensagem('Login realizado, mas a geolocalização não é suportada.')
            return
        }
        setCarregandoLocalizacao(true)
        navigator.geolocation.getCurrentPosition(
            (posicao) => {
                registrarAcesso(usuario, {
                    latitude: posicao.coords.latitude,
                    longitude: posicao.coords.longitude
                })
                setCarregandoLocalizacao(false)
            },
            (erro) => {
                registrarAcesso(usuario)
                setCarregandoLocalizacao(false)
                const msgs = {
                    1: 'Login realizado. Permissão de localização recusada.',
                    2: 'Login realizado. Localização indisponível.',
                    3: 'Login realizado. Tempo para obter localização excedido.'
                }
                setMensagem(msgs[erro.code] ?? 'Login realizado.')
            },
            { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        )
    }

    function entrar(event) {
        event.preventDefault()
        const textoUsuario = localStorage.getItem('usuario')
        if (!textoUsuario) { setMensagem('Nenhum usuário cadastrado.'); return }
        const usuario = JSON.parse(textoUsuario)
        if (usuario.email !== email || usuario.senha !== senha) {
            setMensagem('E-mail ou senha inválidos.')
            return
        }
        solicitarLocalizacao(usuario)
    }

    return (
        <section className="p-4">
            <div className="glass-card">
                <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                    <div style={{
                        width: '56px', height: '56px', borderRadius: '16px',
                        background: 'linear-gradient(135deg, #0090cc, #005f99)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '26px', margin: '0 auto 12px',
                        boxShadow: '0 0 24px rgba(0, 180, 255, 0.25)'
                    }}>🔐</div>
                    <h2 style={{ margin: 0, color: '#e2e8f0' }}>Entrar no Sistema</h2>
                </div>
                {mensagem && <div className="glass-alert-warning">{mensagem}</div>}
                <form onSubmit={entrar}>
                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control glass-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control glass-input"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="glass-btn w-100"
                        disabled={carregandoLocalizacao}
                    >
                        {carregandoLocalizacao ? '📍 Obtendo localização...' : 'Entrar'}
                    </button>
                </form>
            </div>
        </section>
    )
}
export default Login
