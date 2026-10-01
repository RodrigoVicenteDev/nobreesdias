# Como publicar um post novo no blog

O blog é feito de páginas HTML simples. Pra cada post novo, são 4 passinhos.

## 1. Criar a pasta do post
Copie `blog/_modelo.html` para uma pasta nova com o nome do post:

```
blog/nome-do-post/index.html
```

> O nome da pasta vira o endereço: `blog/integracao-sefaz/` → `https://nobredias.com.br/blog/integracao-sefaz/`
> Use só letras minúsculas, números e hífens (sem acento, sem espaço).

## 2. Preencher o post
Abra o `index.html` que você copiou e troque tudo que está entre `[[ ]]`:
- Título, resumo (descrição que aparece no Google), data (`AAAA-MM-DD`)
- O `[[NOME-DO-POST]]` nos endereços deve ser igual ao nome da pasta
- Escreva o conteúdo dentro de `<article class="prose">` usando `<h2>`, `<p>`, `<ul><li>`, `<blockquote>`

## 3. Adicionar o post na lista do blog
Em `blog/index.html`, copie um bloco `<a class="post-card">...</a>` e ajuste link, data, título e resumo. Coloque o mais novo no topo.

## 4. Adicionar no sitemap (ajuda o Google a achar)
Em `sitemap.xml` (na raiz), adicione:

```xml
  <url>
    <loc>https://nobredias.com.br/blog/nome-do-post/</loc>
    <lastmod>AAAA-MM-DD</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
```

## 5. Publicar
No terminal, dentro da pasta do projeto:

```bash
git add -A && git commit -m "Novo post: nome do post" && git push
```

Em ~1 minuto o GitHub Pages atualiza o site sozinho.

---

### Dicas de SEO (rápidas)
- **Título**: claro e com a palavra que a pessoa buscaria (ex: "quanto custa", "como integrar SEFAZ").
- **Resumo (description)**: 1–2 frases que dão vontade de clicar. É o que o Google mostra.
- **Um `<h1>` só** por página (já vem no modelo). Use `<h2>` para as seções.
- Depois de publicar um post importante, vá no Google Search Console → Inspeção de URL → cole o endereço → "Solicitar indexação".
