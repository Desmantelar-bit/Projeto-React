import { useRef, useState, useEffect } from 'react'
import './Estilo.css'

function Usuarios() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [foto, setFoto] = useState('')
    const [cameraAberta, setCameraAberta] = useState(false)
    const [erroCamera, setErroCamera] = useState('')
    const [erros, setErros] = useState({})
    const [mensagem, setMensagem] = useState('')
    const videoRef = useRef(null)
    const canvasRef = useRef(null)
    const streamRef = useRef(null)

    useEffect(() => {
        if (cameraAberta && videoRef.current && streamRef.current) {
            videoRef.current.srcObject = streamRef.current
        }
    }, [cameraAberta])

    useEffect(() => {
        return () => {
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop())
            }
        }
    }, [])

    function selecionarFoto(event) {
        const arquivo = event.target.files[0]
        if (!arquivo) return
        if (!arquivo.type.startsWith('image/')) { setErroCamera('Selecione um arquivo de imagem.'); return }
        const leitor = new FileReader()
        leitor.onload = () => { setFoto(leitor.result); setErroCamera('') }
        leitor.readAsDataURL(arquivo)
    }

    async function abrirCamera() {
        try {
            setErroCamera('')
            const stream = await navigator.mediaDevices.getUserMedia({ video: true })
            streamRef.current = stream
            setCameraAberta(true)
        } catch (erro) {
            setErroCamera(`Erro: ${erro.name} — ${erro.message}`)
        }
    }

    function capturarFoto() {
        const video = videoRef.current
        const canvas = canvasRef.current
        if (!video || !canvas) return
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        const contexto = canvas.getContext('2d')
        contexto.drawImage(video, 0, 0, canvas.width, canvas.height)
        setFoto(canvas.toDataURL('image/jpeg', 0.8))
        fecharCamera()
    }

    function fecharCamera() {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop())
            streamRef.current = null
        }
        if (videoRef.current) videoRef.current.srcObject = null
        setCameraAberta(false)
    }

    function salvar(event) {
        event.preventDefault()
        const novosErros = {}
        if (nome.trim() === '') novosErros.nome = 'Informe o nome'
        if (email.trim() === '') novosErros.email = 'Informe o e-mail'
        else if (!email.includes('@')) novosErros.email = 'Informe um e-mail válido'
        if (senha.length < 6) novosErros.senha = 'A senha deve ter pelo menos 6 caracteres'
        if (senha !== confirmarSenha) novosErros.confirmarSenha = 'As senhas não são iguais'
        if (foto === '') novosErros.foto = 'Selecione ou capture uma foto'
        setErros(novosErros)
        if (Object.keys(novosErros).length > 0) { setMensagem(''); return }
        localStorage.setItem('usuario', JSON.stringify({ nome, email, senha, foto }))
        setMensagem('Usuário cadastrado com sucesso!')
        setNome(''); setEmail(''); setSenha(''); setConfirmarSenha(''); setFoto('')
    }

    return (
        <section className="p-4">
            <div className="glass-card-wide">
                <h2>Cadastro de Usuário</h2>
                {mensagem && <div className="glass-alert-success">{mensagem}</div>}
                <form onSubmit={salvar}>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="mb-3">
                                <label className="form-label">Nome</label>
                                <input type="text" className={`form-control glass-input ${erros.nome ? 'is-invalid' : ''}`} value={nome} onChange={(e) => setNome(e.target.value)} />
                                {erros.nome && <div className="invalid-feedback">{erros.nome}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">E-mail</label>
                                <input type="email" className={`form-control glass-input ${erros.email ? 'is-invalid' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                                {erros.email && <div className="invalid-feedback">{erros.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Senha</label>
                                <input type="password" className={`form-control glass-input ${erros.senha ? 'is-invalid' : ''}`} value={senha} onChange={(e) => setSenha(e.target.value)} />
                                {erros.senha && <div className="invalid-feedback">{erros.senha}</div>}
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Confirmar senha</label>
                                <input type="password" className={`form-control glass-input ${erros.confirmarSenha ? 'is-invalid' : ''}`} value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                                {erros.confirmarSenha && <div className="invalid-feedback">{erros.confirmarSenha}</div>}
                            </div>
                        </div>
                        <div className="col-md-5">
                            <label className="form-label">Foto</label>
                            <input type="file" accept="image/*" className={`form-control glass-input mb-3 ${erros.foto ? 'is-invalid' : ''}`} onChange={selecionarFoto} />
                            {erros.foto && <div className="text-danger small mb-2">{erros.foto}</div>}
                            {foto && (
                                <img src={foto} alt="Foto do usuário" className="img-thumbnail mb-3" style={{ width: '220px', height: '220px', objectFit: 'cover', borderRadius: '6px' }} />
                            )}
                            <div className="mb-3">
                                <button type="button" className="glass-btn-outline" onClick={abrirCamera}>📷 Usar câmera</button>
                            </div>
                            {erroCamera && <div className="glass-alert-warning">{erroCamera}</div>}
                            {cameraAberta && (
                                <div className="mb-3">
                                    <video ref={videoRef} autoPlay playsInline className="img-thumbnail mb-2" style={{ maxWidth: '320px', borderRadius: '6px' }} />
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        <button type="button" className="glass-btn-success" onClick={capturarFoto}>📸 Capturar</button>
                                        <button type="button" className="glass-btn-danger" onClick={fecharCamera}>✕ Fechar</button>
                                    </div>
                                </div>
                            )}
                            <canvas ref={canvasRef} style={{ display: 'none' }} />
                        </div>
                    </div>
                    <button type="submit" className="glass-btn mt-2">Cadastrar usuário</button>
                </form>
            </div>
        </section>
    )
}

export default Usuarios
