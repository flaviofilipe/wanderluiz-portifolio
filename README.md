# wanderluiz.com.br

Landing page do cantor **Wander Luiz**: Astro + Tailwind CSS, 100% estática, deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera /dist
```

## Como atualizar o conteúdo

| O quê | Onde |
|---|---|
| Textos, bio, WhatsApp, redes sociais, vídeos, formatos de show, depoimentos, cidades, FAQ | `src/data/site.ts` (itens com `TODO` são provisórios) |
| Fotos da galeria | `src/assets/fotos/`: **todas** as imagens da pasta aparecem automaticamente, qualquer nome (jpg, png, webp, avif). A ordem segue o nome do arquivo. A 1ª foto vertical também é usada na seção "Sobre". |
| Fotos de fundo | `src/assets/fundos/`: 1º arquivo = topo (hero), 2º = formatos de show, 3º = contato. |
| Imagem de compartilhamento (WhatsApp/Instagram) | `public/og.jpg` (1200×630) |

As imagens são otimizadas automaticamente no build (AVIF/WebP em vários tamanhos), então pode enviar a foto original em alta.

**Vídeos:** use só o ID do YouTube. Em `https://www.youtube.com/watch?v=ABC123xyz` o ID é `ABC123xyz`. O primeiro da lista é o destaque.

## Deploy (Vercel)

1. Suba o repositório no GitHub.
2. Na Vercel: **Add New → Project →** importe o repositório (o framework *Astro* é detectado sozinho).
3. Em **Settings → Domains**, adicione `wanderluiz.com.br` e `www.wanderluiz.com.br` e configure o DNS conforme indicado.
4. Cada `git push` na `main` publica automaticamente.

## Depois de publicar (SEO)

- Cadastrar o domínio no **Google Search Console** e enviar `https://wanderluiz.com.br/sitemap-index.xml`.
- Criar o **Perfil da Empresa no Google** (categoria: *Músico* / *Artista*) com o link do site.
- Colocar o link do site na bio do Instagram, YouTube e Spotify.
