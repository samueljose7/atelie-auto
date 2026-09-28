# Ateliê Auto

Código-fonte completo da página de estética automotiva. HTML, CSS e JavaScript sem dependências de frameworks ou do ChatGPT Work.

## Rodar localmente

Requer Node.js 18 ou superior.

```bash
npm run dev
```

Abra `http://localhost:3000`. Para conferir o resultado de produção:

```bash
npm run build
npm run preview
```

O conteúdo gerado fica em `dist/`. Não é necessário `npm install`, pois o projeto não possui dependências externas de JavaScript.

## GitHub e Vercel

Envie os arquivos deste diretório ao repositório, incluindo `public/assets`, `src`, `scripts`, `package.json` e `vercel.json`. Ao importar o repositório na Vercel, o comando de build é `npm run build` e o diretório de saída é `dist`; ambos já estão definidos em `vercel.json`.

## Arquivos

- `index.html`: estrutura e metadados.
- `src/styles.css`: visual e regras para mobile.
- `src/main.js`: menu, formulário, botões e cópia da mensagem.
- `public/assets/`: imagens usadas no site.
- `scripts/`: servidor local e build estático.

As fontes DM Sans e Manrope são carregadas pelo Google Fonts em `src/styles.css`, como na página original. Sem conexão, o navegador usa Arial/sans-serif. O Google Maps incorporado também precisa de conexão para carregar.

**Antes de usar com uma empresa real:** substitua marca, fotos, avaliações fictícias, região do mapa, Instagram e número de exemplo. Os botões atualmente montam uma mensagem para copiar; não há envio a um WhatsApp real nem backend de formulário.
