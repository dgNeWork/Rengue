# Progreso del proyecto

Última actualización: 2026-09-09

## Decisiones tomadas

- Fase 1: web visual de una sola página (sin tienda online).
- Fase 2 (futura): e-commerce (repo de backend aparte, a decidir cuando
  lleguemos a esa fase).
- Nombre del negocio: **Rengue**, en Jerez de la Frontera (Cádiz), +40 años
  de historia, dirigida por Raquel desde hace una década. No fabrica: vende
  piezas propias encargadas y de otras marcas (Morlote, Malvi...) — se puede
  mostrar la caja/etiqueta del fabricante en las fotos, no hay problema.
- Referente en Jerez en complementos de boda, eventos y flamenca. Ha
  participado en varias ediciones de la Pasarela Flamenca de Jerez.
- Stack: Astro + Tailwind CSS.
- Hosting: Vercel.
- Repositorio: público, `github.com/dgNeWork/Rengue`.
- Dominio: **rengue.es** — comprado. Pendiente conectarlo a Vercel.
- Paleta: negro/blanco (a juego con el logo) con dorado como acento puntual.
- A partir de ahora, los commits los hace el usuario desde su propia
  terminal (no Claude) — ver la conversación para el porqué.

## Hecho

- [x] Proyecto Astro + Tailwind, con Header, Hero, monograma decorativo,
      Sobre nosotros, Trayectoria (Pasarela Flamenca), Colección, Valores,
      Contacto (con mapa embebido) y Footer.
- [x] Logo real integrado (wordmark + monograma) en cabecera, hero, favicon
      y detalle decorativo.
- [x] Contenido real escrito: historia de la tienda, trayectoria/Pasarela
      Flamenca, valores de marca, dirección, horario, WhatsApp e Instagram
      — todo en `src/data/site.ts`.
- [x] Fotos organizadas en 4 carpetas según tipo: `coleccion/` (las 9 piezas
      destacadas en portada), `products/` (resto de piezas sueltas),
      `escaparate/` (ambiente/varias piezas), `pasarela/` (Pasarela
      Flamenca de Jerez). Recortadas las fotos que tenían menciones de
      Instagram de terceros.
- [x] Sección "Colección" en portada: muestra las 9 fotos de
      `src/assets/coleccion/` (el usuario ya ha ido sustituyendo las de
      ejemplo por las definitivas).
- [x] Nueva sección "Galería": fotos de `products/`, `escaparate/` y
      `pasarela/` (15 de momento). No incluye `coleccion/` a propósito
      (esas ya se ven en "Colección" — así no sale ninguna foto repetida).
      Foto grande arriba y tira de miniaturas deslizante debajo para
      navegar (sin librerías externas).
- [x] Orden de la Galería controlado por el usuario: el número al principio
      del nombre de archivo decide la posición, contando todas las carpetas
      juntas (antes cada carpeta numeraba por separado). Documentado en
      `src/assets/README.md`.
- [x] Comprobado que no hay fotos duplicadas (por contenido, no solo por
      nombre) entre `products/`, `escaparate/` y `pasarela/`.
- [x] Aviso "Muy pronto: tienda online" añadido en la sección Colección.
- [x] Mapa de Google Maps embebido en Contacto con la dirección real.
- [x] Tipografía script (Alex Brush) a juego con el trazo del logo, usada
      en el nombre "Rengue" de la cabecera. Los títulos de sección siguen
      en Playfair Display (más legible en frases largas).
- [x] SEO: título y descripción reescritos con términos de búsqueda
      naturales (bisutería, complementos, flamenca, Jerez de la Frontera,
      bodas, eventos), datos estructurados (JSON-LD, tipo `JewelryStore`,
      con dirección/horario/teléfono/Instagram para que Google entienda
      que es un negocio físico), etiquetas Open Graph y Twitter Card
      completas, URL canónica, sitemap.xml y robots.txt automáticos
      (`@astrojs/sitemap`). `astro.config.mjs` ya apunta a `rengue.es`.
- [x] Páginas de **Aviso legal** (`/aviso-legal`) y **Política de
      privacidad** (`/politica-privacidad`), enlazadas desde el pie de
      página. Titular: Raquel Domínguez Labajo (NIF 31702281R), nombre
      comercial Rengue. Política de privacidad ajustada a que ahora mismo
      no hay formularios ni cookies propias (solo se menciona el
      alojamiento en Vercel y el mapa de Google incrustado). **Pendiente
      de que alguien de la gestoría le eche un vistazo antes de publicar
      — no es asesoría legal.**
- [x] Prettier + `astro check` + build de producción, todo sin errores.
- [x] Repositorio Git local y remoto creados (sin commits de Claude).

## Pendiente — necesito estos datos del negocio

- [ ] Nombres reales de las piezas (ahora mismo son descripciones
      provisionales sacadas del nombre del archivo).

## Pendiente — técnico

- [ ] Hacer el primer commit (el usuario, desde su terminal) y
      `git push -u origin main`.
- [ ] Desplegar el repo en Vercel y conectar rengue.es.
- [ ] Fuera del código: crear un Perfil de Empresa en Google (gratis) con
      los mismos datos (nombre, dirección, horario, teléfono) — es lo que
      más ayuda a aparecer en Google Maps y en búsquedas locales tipo
      "bisutería Jerez". Los metadatos de la web ayudan, pero esto pesa
      más para un negocio físico.
- [ ] Fase 2 (e-commerce): habrá que ampliar la Política de Privacidad
      (datos de pedidos/pago), añadir Condiciones de venta, derecho de
      desistimiento y banner de cookies si se añade carrito/pasarela de
      pago o analítica.

## Próximos pasos sugeridos

1. El usuario hace el commit y el push.
2. Se despliega en Vercel y se conecta rengue.es.
3. Nombres reales de las piezas, cuando estén.
