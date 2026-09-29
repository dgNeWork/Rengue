# Progreso del proyecto

Última actualización: 2026-09-29

## Estado: 🟢 En producción

**rengue.es está publicado y funcionando.** Fase 1 (web escaparate)
prácticamente terminada.

## Decisiones tomadas

- Fase 1: web visual de una sola página (sin tienda online). **Completada
  y en producción.**
- Fase 2 (futura): e-commerce (repo de backend aparte, a decidir cuando
  lleguemos a esa fase).
- Nombre del negocio: **Rengue**, en Jerez de la Frontera (Cádiz), +40 años
  de historia, dirigida por Raquel desde hace una década. No fabrica: vende
  piezas propias encargadas y de otras marcas (Morlote, Malvi...) — se puede
  mostrar la caja/etiqueta del fabricante en las fotos, no hay problema.
- Referente en Jerez en complementos de boda, eventos y flamenca. Ha
  participado en varias ediciones de la Pasarela Flamenca de Jerez.
- Stack: Astro + Tailwind CSS.
- Hosting: **Vercel**, desplegado y conectado a `rengue.es` (con `www`
  también funcionando). Despliegue automático en cada `git push` a `main`.
- Repositorio: público, `github.com/dgNeWork/Rengue`.
- Dominio: **rengue.es** — comprado, conectado y funcionando (A record a
  Vercel: `216.198.79.1`; CNAME de `www` al DNS de Vercel).
- Paleta: negro/blanco (a juego con el logo) con dorado como acento puntual.

## Hecho

- [x] Proyecto Astro + Tailwind, con Header, Hero, monograma decorativo,
      Sobre nosotros, Trayectoria (Pasarela Flamenca), Colección, Galería,
      Valores, Contacto (con mapa embebido) y Footer.
- [x] Logo real integrado (wordmark + monograma) en cabecera, hero, favicon
      y detalle decorativo. Tipografía script (Alex Brush) a juego con el
      logo en el nombre de la cabecera.
- [x] Contenido real: historia de la tienda, trayectoria/Pasarela Flamenca,
      valores de marca, dirección, horario, WhatsApp e Instagram — en
      `src/data/site.ts`.
- [x] Fotos organizadas en 4 carpetas: `coleccion/` (9 piezas destacadas en
      portada), `products/`, `escaparate/`, `pasarela/`. Sin fotos
      duplicadas ni menciones de Instagram de terceros. Orden de la
      Galería controlado por numeración global de archivo — documentado en
      `src/assets/README.md`.
- [x] Aviso "Muy pronto: tienda online" en la sección Colección.
- [x] SEO completo: metadatos, datos estructurados (JSON-LD `JewelryStore`),
      Open Graph, Twitter Card, URL canónica, sitemap.xml y robots.txt.
- [x] Aviso legal (`/aviso-legal`) y Política de privacidad
      (`/politica-privacidad`), con los datos reales de la titular
      (Raquel Domínguez Labajo, NIF 31702281R). **Pendiente de que la
      gestoría les eche un vistazo — no es asesoría legal.**
- [x] Prettier + `astro check` + build de producción, todo sin errores.
- [x] Repositorio Git en GitHub.
- [x] Análisis de calidad con SonarCloud en GitHub Actions (en cada push a
      `main` y en cada pull request).
- [x] Desplegado en Vercel y dominio `rengue.es` conectado y verificado.

## Pendiente — sin prisa

- [ ] Nombres reales de las piezas (ahora mismo son descripciones
      provisionales sacadas del nombre del archivo).
- [ ] Fuera del código: crear un Perfil de Empresa en Google (gratis) con
      los mismos datos (nombre, dirección, horario, teléfono) — ayuda a
      aparecer en Google Maps y búsquedas locales tipo "bisutería Jerez".
- [ ] Dar de alta rengue.es en **Google Search Console** (gratis) para que
      Google la indexe más rápido — buscar "rengue" en Google todavía no
      la encuentra, es normal en una web recién publicada, pero se puede
      acelerar. Pasos: crear cuenta en search.google.com/search-console →
      añadir propiedad rengue.es → verificar con "Etiqueta HTML" (pasarme
      el código `google-site-verification` y lo añado al sitio) → enviar
      `sitemap-index.xml` → pedir indexación de la portada.
- [ ] Fase 2 (e-commerce), cuando toque: ampliar la Política de Privacidad
      (datos de pedidos/pago), añadir Condiciones de venta, derecho de
      desistimiento y banner de cookies si se añade carrito/pasarela de
      pago o analítica.

## Ideas para una próxima versión

- [ ] Sección de reseñas de clientas con estrellas. Pendiente decidir el
      enfoque: reseñas de Google (recomendado — sin backend, moderadas por
      Google, ayuda al SEO local) vs. formulario propio con moderación
      (más trabajo, necesita base de datos). Se retoma más adelante.
