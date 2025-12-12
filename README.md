# Médicos & Dentistas - Portal de Saúde

Um portal moderno e acolhedor para apresentação de informações, serviços e especialidades relacionadas a médicos e dentistas, desenvolvido com React, React Router e SCSS.

## 🌐 Links

- **Aplicação Online**: [https://medicos-e-dentistas-xi.vercel.app/](https://medicos-e-dentistas-xi.vercel.app/)
- **Repositório GitHub**: [https://github.com/Pedrovizkyh/desafio-rotas](https://github.com/Pedrovizkyh/desafio-rotas)

## 📋 Descrição do Projeto

Este projeto foi desenvolvido como um desafio para criar um portal informativo sobre cuidados com a saúde geral e bucal. A aplicação apresenta uma interface fluida e agradável, focada em transmitir confiança, profissionalismo e bem-estar através de um design cuidadosamente elaborado.

## 🎯 Objetivos

- Criar um portal chamado **Médicos & Dentistas** com páginas informativas
- Apresentar especialidades médicas e odontológicas de forma organizada
- Oferecer uma experiência de navegação simples e intuitiva
- Transmitir valores de saúde, higiene e bem-estar através do design

## 🛠️ Tecnologias Utilizadas

- **React.js** com Vite
- **React Router DOM** para navegação entre páginas
- **SCSS** com variáveis, aninhamento e estrutura modular
- **Google Fonts** (Inter)
- **HTML5** semântico
- **CSS3** com propriedades modernas

## ✨ Funcionalidades

### 🏠 Página Inicial (`/`)
- Apresentação do portal com mensagem de boas-vindas
- Destaque das especialidades médicas e odontológicas
- Cards informativos sobre diferentes áreas da saúde
- Design acolhedor com paleta de cores temática

### 📋 Página de Cadastro (`/seja-voluntario`)
- Formulário de cadastro voluntário
- Campos para informações pessoais
- Seleção de área de interesse (médica ou odontológica)
- Interface de formulário intuitiva e responsiva

### 🔍 Navegação
- Header fixo com logo e menu de navegação
- Links para todas as páginas disponíveis
- Footer informativo
- Design responsivo para todos os dispositivos

## 🎨 Design e Estilização

### Paleta de Cores
- **Azul Saúde** (`#2A7AE4`): Principal, transmite confiança e profissionalismo
- **Verde Bem-estar** (`#4CAF50`): Secundário, representa saúde e vitalidade
- **Branco Puro** (`#FFFFFF`): Fundos e elementos claros
- **Cinza Claro** (`#F5F5F5`): Fundos secundários
- **Cinza Escuro** (`#333333`): Textos e elementos de destaque

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Pesos Utilizados**: 300, 400, 500, 600, 700
- **Hierarquia Clara** com tamanhos adequados para cada elemento

### Princípios de Design
- Layout limpo e organizado
- Espaçamento consistente usando `rem`
- Elementos visuais que remetem à área da saúde
- Contraste adequado para melhor legibilidade
- Estados interativos para botões e links

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a:

- **Desktop** (acima de 1024px)
- **Tablet** (768px - 1023px)
- **Mobile** (até 767px)

### Técnicas Utilizadas
- Unidades relativas (`%`, `vh`, `vw`, `rem`)
- `max-width` para contenção de elementos
- Media queries estratégicas
- Flexbox e Grid para layouts adaptativos
- Imagens e cards que se ajustam automaticamente

## 🏗️ Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
│   ├── Header/        # Cabeçalho da aplicação
│   ├── Footer/        # Rodapé da aplicação
│   ├── Card/          # Cards de especialidades
│   └── Button/        # Botões estilizados
├── pages/             # Páginas da aplicação
│   ├── Home/          # Página inicial
│   └── Cadastro/      # Página de cadastro
├── styles/            # Estilos globais e SCSS
│   ├── variables.scss # Variáveis de cores e fontes
│   ├── mixins.scss    # Mixins reutilizáveis
│   └── global.scss    # Estilos globais
├── routes/            # Configuração de rotas
└── assets/            # Imagens e recursos estáticos
```

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos para Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/Pedrovizkyh/desafio-rotas.git
```

2. **Acesse a pasta do projeto**
```bash
cd desafio-rotas
```

3. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

4. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

5. **Acesse no navegador**
A aplicação estará disponível em `http://localhost:5173`

### Build para Produção
```bash
npm run build
# ou
yarn build
```

## 📝 Boas Práticas Implementadas

### Código
- Componentes reutilizáveis e modulares
- Separação clara de responsabilidades
- Nomenclatura consistente de arquivos e componentes
- Comentários explicativos onde necessário

### Estilização
- Variáveis SCSS para cores e espaçamentos
- Estrutura modular de estilos
- Classes bem nomeadas (metodologia BEM onde aplicável)
- Estilos específicos por componente

### Performance
- Imagens otimizadas
- Código dividido em chunks
- Carregamento lazy onde apropriado
- Fontes otimizadas do Google Fonts

## 🔧 Personalização

### Modificando Cores
As cores podem ser facilmente modificadas no arquivo `src/styles/variables.scss`:

```scss
$primary-color: #2A7AE4;
$secondary-color: #4CAF50;
$background-light: #FFFFFF;
$text-dark: #333333;
```

### Adicionando Novas Páginas
1. Crie um novo componente em `src/pages/`
2. Adicione a rota no arquivo de configuração de rotas
3. Atualize o menu de navegação no componente `Header`

## 📄 Licença

Este projeto foi desenvolvido como parte de um desafio técnico e está disponível para fins educacionais.

## 👨‍💻 Autor

**Pedro Vizkyh** - [GitHub](https://github.com/Pedrovizkyh)

## 🙏 Agradecimentos

- Google Fonts pela tipografia Inter
- Comunidade React pelos recursos e documentação
- Vite pela excelente experiência de desenvolvimento

---

*Projeto desenvolvido com foco em boas práticas de desenvolvimento front-end, acessibilidade e experiência do usuário.*