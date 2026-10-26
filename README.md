# GN — Landing Page

Site de uma página da marca GN (Tônico Capilar e Microagulhamento Capilar), gerado como **HTML estático** com Next.js (App Router), TypeScript e CSS Modules.

## Requisitos

- Node.js 20.9 ou superior

## Comandos

```bash
npm install      # instala as dependências
npm run dev      # ambiente de desenvolvimento em http://localhost:3000
npm run build    # gera o site estático na pasta out/
```

## Como editar o conteúdo

Todos os textos, preços e contatos ficam em **`src/content/site.ts`**. Itens marcados como `PENDENTE` precisam ser confirmados antes da publicação:

- `url`: domínio definitivo do site
- `contact.whatsapp`: número com DDI e DDD, só dígitos (ex.: `5511999999999`)
- `contact.instagram`: usuário sem `@` (vazio = links ocultos)
- `contact.location`: cidade/endereço (vazio = oculto)
- `product.volume` e `product.howToUse`
- Perguntas frequentes (`faq`)

## Estrutura

```
src/
  app/           layout, página, estilos globais, SEO (sitemap, robots, ícones, imagem de compartilhamento)
  components/    uma seção por componente, cada uma com seu .module.css
  content/       site.ts, o conteúdo editável
public/images/   imagens otimizadas usadas no site
```

As imagens originais ficam em `assets-originais/` (não são publicadas). O site usa as versões otimizadas em `public/images/`.

## Publicação

Depois de `npm run build`, publique o conteúdo da pasta **`out/`** em qualquer hospedagem estática (Vercel, Netlify, Cloudflare Pages, GitHub Pages ou hospedagem compartilhada via FTP).
