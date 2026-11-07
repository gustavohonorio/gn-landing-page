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

## Publicação (Cloudflare Workers)

O site é publicado como um Worker só de arquivos estáticos (configuração em `wrangler.jsonc`). Com o repositório conectado ao Cloudflare (Workers Builds), **todo push na branch `main` publica o site automaticamente**.

Configuração no painel (Workers & Pages → Create → Import a repository):

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Publicação manual (opcional): `npx wrangler login` e depois `npm run deploy`. Para testar localmente com o servidor do Cloudflare: `npm run preview`.

### URL do site e domínio próprio

A URL pública usada em SEO (canonical, Open Graph, sitemap, robots) fica em **`.env.production`** (`NEXT_PUBLIC_SITE_URL`).

Quando houver um domínio:

1. Adicione o domínio na conta Cloudflare e aponte os nameservers no registro.br (ou onde foi comprado).
2. Em `wrangler.jsonc`, descomente o bloco `routes` e coloque o domínio.
3. Em `.env.production`, troque `NEXT_PUBLIC_SITE_URL` pelo domínio (ex.: `https://www.gn.com.br`).
4. Faça commit e push na `main`.
