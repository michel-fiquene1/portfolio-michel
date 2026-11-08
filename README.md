# Michel Fiquene — Portfólio profissional

Portfólio de Michel Fiquene, estudante de Análise e Desenvolvimento de Sistemas e Administração, com projetos, habilidades, experiência, certificações e canais de contato. A versão estática preserva o design e os recursos do HTML original.

## Recursos

- Apresentação profissional e navegação por seções.
- Projetos com imagens e links para demonstrações e GitHub.
- Interface responsiva, tradução português/inglês e temas claro/escuro.
- Assistente virtual local com respostas por palavras-chave e atalhos para as seções.
- Michel Rally: minijogo em Canvas, com controles por teclado e botões para celular.
- Formulário de contato que abre o aplicativo de e-mail por meio de `mailto:`.

## Tecnologias e dependências

HTML, CSS e JavaScript nativos, com SVG e Canvas. Não há framework, backend, etapa de compilação ou pacote de terceiros necessário para servir o site.

A fonte **Space Grotesk** é carregada pelo Google Fonts. Se esse serviço estiver indisponível, o navegador utiliza as fontes alternativas definidas no CSS. As fotografias e capturas dos projetos estão armazenadas em `public/assets/images/`.

| Recurso local | Uso |
| --- | --- |
| `michel-logo.jpg` | Foto do cabeçalho e ícone da aba |
| `michel-perfil.jpg` | Retrato principal |
| `michel-sobre.jpg` | Foto da seção Sobre |
| `gestor-financeiro.png` | Captura do Gestor Financeiro |
| `mm-negocios.png` | Captura do catálogo MM Negócios |
| `checklist-tarefas.png` | Captura do Checklist de Tarefas |

O CSS, os dois blocos de JavaScript, os ícones SVG e o desenho do Rally em Canvas permanecem em `public/index.html`. Nenhuma biblioteca JavaScript externa é carregada.

O assistente não utiliza um serviço de IA ou uma API externa. As preferências de idioma, tema e desligamento do assistente ficam no `localStorage` do navegador. O formulário não envia mensagens a um servidor: o visitante precisa de um aplicativo de e-mail configurado e deve concluir o envio nele.

## Estrutura

```text
portfolio-michel/
├── public/
│   ├── index.html          # Página principal do portfólio
│   └── assets/
│       └── images/         # Fotografias e capturas dos projetos
├── scripts/               # Servidor local e verificações
├── .gitignore
├── netlify.toml
├── package.json
└── README.md
```

Somente `public/` deve ser publicada. O HTML original, preservado localmente como `Portfolio_Michel_V6_Experiencia.html`, e as evidências em `output/` são ignorados pelo Git e ficam fora da pasta pública.

## Executar localmente

Para utilizar os comandos de desenvolvimento, instale **Node.js 22 ou superior**, com npm. Não é necessário executar `npm install`.

Na raiz do projeto:

```sh
npm run dev
```

Abra [http://localhost:4173](http://localhost:4173). Encerre o servidor com `Ctrl+C`.

Para executar as verificações estáticas disponíveis:

```sh
npm run check
```

Antes de publicar, confira também no navegador os links externos, as imagens, a navegação em celular, os dois idiomas, os dois temas, o assistente e os controles do Michel Rally. Serviços externos podem exigir login ou limitar verificações automáticas.

## Validação da preparação

Verificações realizadas em **8 de novembro de 2026**:

- CSS idêntico ao original e seis imagens conferidas por SHA-256, sem alteração dos arquivos de imagem.
- Estrutura, referências locais, 51 IDs, âncoras, símbolos SVG e sintaxe dos dois scripts aprovados por `npm run check`.
- Comparação de geometria com o original em Chromium nas larguras de 320, 390, 768, 1024 e 1440 px, com imagens carregadas; sem diferenças de layout em português ou rolagem horizontal.
- Temas e idiomas com persistência, menu por teclado, assistente, Rally e formulário verificados no navegador sem erros de JavaScript ou console na versão preparada.
- Rally: início, salto, abaixamento, controles móveis, pausa, derrota, reinício e troca de idioma preservando o progresso. Os estados de vitória e as mensagens também foram verificados em um harness JavaScript isolado.
- Formulário: campos obrigatórios, endereço de destino e codificação do assunto/corpo verificados em PT/EN, sem abrir aplicativo de e-mail nem enviar mensagens.
- Revisão dos arquivos de publicação sem credenciais, tokens ou chaves privadas identificados. Evidências de testes e HTML original ficam fora do Git e de `public/`.

Essa verificação em Chromium não substitui testes em aparelhos físicos, outros navegadores ou a conferência do endereço definitivo após um deploy autorizado.

## Destinos externos

As demonstrações e os contatos abaixo responderam HTTP 200 na conferência desta preparação. Os dois repositórios específicos também foram confirmados pela API do GitHub.

| Destino | Endereço |
| --- | --- |
| Fonte | [Space Grotesk — Google Fonts](https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap) |
| Gestor Financeiro | [Demonstração](https://gestor-financeiro-michel.netlify.app/) · [Código](https://github.com/michelfiquene1-cmyk/gestor-financeiro) |
| MM Negócios | [Catálogo](https://mm-negocios-catalogo.lovable.app/) |
| Checklist de Tarefas | [Demonstração](https://checklist-de-tarefas-todolist.netlify.app/) · [Código](https://github.com/michelfiquene1-cmyk/CHECKLIST-de-TAREFAS----TO-DO-LIST) |
| GitHub profissional | [michelfiquene1-cmyk](https://github.com/michelfiquene1-cmyk) |
| LinkedIn | [Michel Fiquene](https://linkedin.com/in/michel-jorge-fiquene-196658417) |
| WhatsApp | [Contato profissional](https://wa.me/5598988610446) |
| E-mail | [michelfiquene1@gmail.com](mailto:michelfiquene1@gmail.com) |

O cartão de Calculadora e Jogo de Adivinhação mantém o link para o perfil geral do GitHub: não foi identificado um repositório específico publicado para esses programas. O CaisGuard Fusion continua apresentado como proposta de hackathon, sem acrescentar um destino inexistente.

## Publicar no Netlify

A configuração está em `netlify.toml`:

| Configuração | Valor |
| --- | --- |
| Diretório base | Raiz do repositório |
| Comando de build | Vazio |
| Diretório de publicação | `public` |
| Branch de produção | `main` |

Após autorizar a publicação, é possível conectar o repositório `portfolio-michel` ao Netlify e selecionar a branch `main`. O Netlify utiliza o diretório de publicação declarado no arquivo de configuração. Consulte a [documentação oficial de configuração por arquivo](https://docs.netlify.com/build/configure-builds/file-based-configuration/).

Para uma publicação manual autorizada, envie apenas a pasta `public`, que já contém `index.html` e os recursos necessários. Não envie a pasta inteira de trabalho, o arquivo original ou as evidências de testes.

A criação de um repositório público, o envio dos arquivos ao GitHub e o deploy precisam respeitar a autorização do proprietário. Este projeto não inclui um comando que execute essas ações automaticamente.

## Manutenção e privacidade

Edite o conteúdo, o CSS e o JavaScript em `public/index.html`; mantenha os caminhos relativos das imagens ao atualizar os recursos. Não coloque credenciais, tokens ou arquivos `.env` em `public/`: qualquer arquivo dessa pasta ficará acessível aos visitantes após a publicação.

Os contatos profissionais exibidos no portfólio tornam-se públicos com o site. Revise esses dados e os destinos dos links antes de cada publicação.

## Autoria

Portfólio profissional de **Michel Fiquene**. Os textos, fotografias e demais materiais autorais são preservados como conteúdo do portfólio. Este repositório não concede uma licença de reutilização desses materiais.
