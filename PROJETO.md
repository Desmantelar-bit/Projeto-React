# Documentação do Projeto — Sistema React (menu-react)

## Visão Geral

Aplicação web de cadastros desenvolvida em **React + Vite**, com tema escuro profissional. O sistema é uma SPA (Single Page Application) com navegação controlada por estado, sem roteador externo. O layout é composto por um header fixo, um menu lateral retrátil e uma área de conteúdo que renderiza diferentes telas conforme a navegação.

---

## Stack e Dependências

| Item | Versão |
|---|---|
| React | 19.x |
| React DOM | 19.x |
| Vite | 8.x |
| Bootstrap | 5.3.x |
| Oxlint | 1.x (linter) |

**Comando para rodar:**
```bash
npm install
npm run dev
```

---

## Estrutura de Arquivos

```
menu-react/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── cadastros/
│   │   │   ├── Estilo.css          ← Design system global (cards, inputs, botões, menu)
│   │   │   ├── Safra.jsx
│   │   │   ├── Unidade.jsx
│   │   │   ├── Equipamento.jsx
│   │   │   ├── Medicao.jsx
│   │   │   ├── UnidadeMedida.jsx
│   │   │   ├── TipoInformacao.jsx
│   │   │   ├── Indicadores.jsx
│   │   │   ├── Funcionarios.jsx
│   │   │   └── Usuarios.jsx
│   │   ├── Conteudo.jsx            ← Tela inicial (dashboard de boas-vindas)
│   │   ├── Header.jsx              ← Cabeçalho fixo
│   │   ├── Login.jsx               ← Tela de login com geolocalização
│   │   └── MenuLateral.jsx         ← Menu lateral retrátil com submenu
│   ├── App.jsx                     ← Componente raiz, controla navegação e estado do menu
│   ├── App.css                     ← Layout estrutural (grid, topbar, scrollbar)
│   ├── index.css                   ← Reset e fundo global
│   └── main.jsx                    ← Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## Arquitetura de Navegação

A navegação **não usa React Router**. É controlada por um estado `tela` no `App.jsx`:

```jsx
const [tela, setTela] = useState('inicio')
```

O `MenuLateral` recebe `setTela` como prop e chama essa função ao clicar nos botões. O `App.jsx` renderiza condicionalmente o componente correspondente:

```jsx
{tela === 'inicio' && <Conteudo />}
{tela === 'safra' && <Safra />}
{tela === 'login' && <Login />}
// ... etc
```

O `MenuLateral` também mantém estado interno `telaAtiva` para aplicar a classe CSS `.ativo` no item selecionado.

---

## Layout Estrutural

```
┌─────────────────────────────────────────────┐
│                  Header (56px)              │
├──────────────┬──────────────────────────────┤
│              │  Topbar (btn ☰ Menu)         │
│  MenuLateral │─────────────────────────────│
│  (248px)     │                             │
│              │   Área de Conteúdo          │
│              │   (conteudo-scroll)         │
│              │                             │
└──────────────┴──────────────────────────────┘
```

- O menu lateral pode ser aberto/fechado pelo botão `☰ Menu` na topbar
- O estado `menuAberto` vive no `App.jsx` e é passado como prop `aberto` ao `MenuLateral`
- A área de conteúdo tem `overflow-y: auto` para scroll independente

---

## Design System (Estilo.css)

Todas as telas usam as mesmas classes CSS definidas em `src/components/cadastros/Estilo.css`.

### Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| Fundo global | `#111318` | Body |
| Painel/Menu | `#0e1015` | Header, menu lateral, topbar |
| Card | `#181b22` | Todos os cards de formulário |
| Borda | `#1f2229` | Bordas de cards e divisores |
| Borda input | `#2a2d35` | Inputs e botões outline |
| Acento | `#5b4fcf` | Botão primário, foco, logo |
| Texto principal | `#d1d5db` | Conteúdo geral |
| Texto título | `#f0f1f3` | Títulos h2 |
| Texto label | `#6b7280` | Labels de formulário |
| Texto menu | `#8b909a` | Itens do menu |
| Ativo menu | `#a89cf5` | Item selecionado no menu |
| Sucesso | `#6ee7b7` / fundo `#0d2e1e` | Alertas de sucesso |
| Alerta | `#fbbf24` / fundo `#2a1f08` | Alertas de aviso |
| Erro | `#f87171` | Mensagens de validação |

### Classes Disponíveis

| Classe | Descrição |
|---|---|
| `.glass-card` | Card centralizado, max-width 560px |
| `.glass-card-wide` | Card largo, sem max-width fixo |
| `.glass-input` | Input/select estilizado para dark mode |
| `.glass-btn` | Botão primário roxo `#5b4fcf` |
| `.glass-btn-outline` | Botão secundário com borda discreta |
| `.glass-btn-success` | Botão verde escuro |
| `.glass-btn-danger` | Botão vermelho outline |
| `.glass-alert-success` | Alerta de sucesso verde |
| `.glass-alert-warning` | Alerta de aviso amarelo |
| `.menu-btn` | Botão de item principal do menu |
| `.menu-btn.ativo` | Estado ativo do item do menu |
| `.menu-btn-sub` | Botão de subitem do menu |
| `.menu-btn-sub.ativo` | Estado ativo do subitem |
| `.menu-titulo` | Título de seção do menu lateral |

O arquivo também sobrescreve classes do Bootstrap (`form-control`, `form-select`, `alert-*`, `img-thumbnail`) para manter consistência com o tema escuro.

---

## Componentes

### `App.jsx`
- Componente raiz
- Estados: `menuAberto` (boolean), `tela` (string)
- Renderiza: `Header`, `MenuLateral`, topbar com botão de menu, e o componente da tela ativa
- Importa: `App.css`, `Estilo.css`

### `Header.jsx`
- Sem props, sem estado
- Exibe logo (ícone ⚡ + texto "Sistema React") e avatar de usuário (SVG)
- Estilo inline, altura 56px, fundo `#0e1015`

### `MenuLateral.jsx`
- Props: `aberto` (boolean), `setTela` (função)
- Estado interno: `cadastroAberto` (boolean para submenu), `telaAtiva` (string)
- Função `navegar(tela)`: chama `setTela` e atualiza `telaAtiva`
- Submenu "Cadastros" é expansível (toggle)
- Aplica classe `.ativo` nos botões conforme `telaAtiva`

### `Conteudo.jsx`
- Tela inicial exibida quando `tela === 'inicio'`
- Exibe card de boas-vindas com grid 3 colunas de 6 atalhos visuais (sem funcionalidade de clique)
- Atalhos: Safras, Funcionários, Equipamentos, Indicadores, Medições, Usuários

### `Login.jsx`
- Estados: `email`, `senha`, `mensagem`, `carregandoLocalizacao`
- Valida credenciais contra `localStorage` (chave `'usuario'`)
- Após login válido, solicita geolocalização via `navigator.geolocation`
- Salva dados do acesso em `sessionStorage` (chave `'acessoAtual'`): nome, email, foto, dataHora, latitude, longitude
- Exibe mensagens de erro/sucesso inline

---

## Telas de Cadastro

Todas as telas de cadastro seguem o mesmo padrão:
- Componente funcional com `useState` para cada campo
- Estado `erros` (objeto) para validação inline
- Estado `mensagem` para feedback de sucesso
- Formulário com `onSubmit` que valida antes de "salvar" (atualmente apenas exibe mensagem, sem persistência real)
- Usa classes `.glass-card`, `.glass-input`, `.glass-btn`, `.form-label`, `.form-control`, `.invalid-feedback`

### Safra
**Campos:** Nome da Safra (text), Data de Início (date), Data de Fim (date)
**Validações:** todos obrigatórios

### Unidade
**Campos:** Nome (text)
**Validações:** obrigatório

### Equipamento
**Campos:** Nome (text), Unidade (text)
**Validações:** ambos obrigatórios

### Medição
**Campos:** Safra (text), Equipamento (text), Tipo de Informação (text), Valor (number), Data e Hora (datetime-local)
**Validações:** todos obrigatórios

### Unidade de Medida
**Campos:** Nome (text), Símbolo (text)
**Validações:** ambos obrigatórios

### Tipo de Informação
**Campos:** Nome (text), Unidade de Medida (text)
**Validações:** ambos obrigatórios

### Indicadores
**Campos:** Nome (text), Descrição (textarea, 3 linhas), Unidade/Un (text)
**Validações:** todos obrigatórios

### Funcionários
**Campos:** Nome (text), E-mail (email), Telefone (text), Setor (select: Administrativo / Produção / Manutenção / TI), Foto (file ou câmera)
**Validações:** todos obrigatórios, foto obrigatória
**Funcionalidades extras:**
- Upload de imagem via `<input type="file">`
- Captura via câmera usando `navigator.mediaDevices.getUserMedia`
- Preview da foto com `URL.createObjectURL` ou `canvas.toDataURL`
- Gerenciamento do stream de vídeo com `useRef` e cleanup no `useEffect`

### Usuários
**Campos:** Nome (text), E-mail (email), Senha (password), Confirmar Senha (password), Foto (file ou câmera)
**Validações:** todos obrigatórios, senha mínimo 6 caracteres, senhas devem coincidir, foto obrigatória
**Funcionalidades extras:**
- Mesma lógica de câmera dos Funcionários
- Ao salvar com sucesso, persiste `{ nome, email, senha, foto }` no `localStorage` (chave `'usuario'`)
- Limpa todos os campos após salvar

---

## Persistência de Dados

| Dado | Onde | Chave | Conteúdo |
|---|---|---|---|
| Usuário cadastrado | `localStorage` | `'usuario'` | `{ nome, email, senha, foto }` |
| Acesso atual | `sessionStorage` | `'acessoAtual'` | `{ nome, email, foto, dataHora, latitude, longitude }` |

Os demais cadastros (Safra, Unidade, etc.) **não persistem dados** — apenas exibem mensagem de sucesso. Não há integração com backend ou banco de dados.

---

## Observações Importantes

- **Sem React Router:** toda navegação é por estado local no `App.jsx`
- **Sem Context API ou gerenciador de estado global:** cada componente gerencia seu próprio estado
- **Bootstrap 5** é usado apenas para classes utilitárias (`row`, `col-md-*`, `mb-3`, `p-4`, `me-2`, `w-100`, `small`) e para os componentes de formulário (`form-control`, `form-select`, `is-invalid`, `invalid-feedback`). Todas as classes Bootstrap de cor/tema são sobrescritas pelo `Estilo.css`
- **Sem testes automatizados**
- **Sem TypeScript** — projeto em JavaScript puro com JSX
- O linter configurado é **Oxlint** (não ESLint)
