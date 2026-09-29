# Rengue

Web de Rengue, tienda de alta bisutería y complementos en Jerez de la
Frontera con más de 40 años de historia.

**En producción: [www.rengue.es](https://www.rengue.es)**

Primera versión: web de escaparate para dar a conocer el negocio (colección,
galería, historia de la tienda y contacto). Sin carrito ni pagos todavía: la
tienda online llegará en una segunda fase.

## Funcionalidades

- **Catálogo y galería automáticos**: se generan a partir de las fotos de
  `src/assets/`. El nombre y la categoría de cada pieza salen del nombre del
  archivo, y el número inicial decide el orden (ver
  [`src/assets/README.md`](./src/assets/README.md)).
- **Imágenes optimizadas** en el build con `astro:assets` (WebP y miniaturas).
- **Galería con carrusel** propio en TypeScript, sin librerías.
- **Contenido centralizado** en un único archivo tipado: `src/data/site.ts`.
- **SEO local**: metadatos, Open Graph, Twitter Card, datos estructurados
  JSON-LD (`JewelryStore`), URL canónica, `sitemap.xml` y `robots.txt`.
- **Contacto** por WhatsApp e Instagram, con dirección, horario y mapa.
- **Páginas legales**: aviso legal y política de privacidad.

## Stack

- [Astro](https://astro.build) 7 (sitio estático) con TypeScript en modo
  estricto
- [Tailwind CSS](https://tailwindcss.com) 4
- Despliegue continuo en [Vercel](https://vercel.com) en cada push a `main`
- Calidad: `astro check`, Prettier y análisis con
  [SonarCloud](https://sonarcloud.io) en GitHub Actions

## Desarrollo local

Requiere Node.js 22.12 o superior.

```sh
npm install
npm run dev
```

Sitio disponible en `http://localhost:4321`.

## Estructura

```text
src/
├── assets/       # Logo y fotos (coleccion, products, escaparate, pasarela)
├── components/   # Una sección de la página por componente
├── data/         # Textos y datos de la tienda (site.ts)
├── layouts/      # Layout base (SEO, fuentes) y layout de páginas legales
├── pages/        # Portada, aviso legal y política de privacidad
└── styles/       # Estilos globales y tema de colores (Tailwind)
```

## Comandos

| Comando                | Acción                                        |
| :--------------------- | :-------------------------------------------- |
| `npm install`          | Instala dependencias                          |
| `npm run dev`          | Servidor local en `localhost:4321`            |
| `npm run build`        | Genera la versión de producción en `./dist/`  |
| `npm run preview`      | Previsualiza el build antes de desplegar      |
| `npm run check`        | Comprueba tipos y componentes (`astro check`) |
| `npm run format`       | Formatea el código con Prettier               |
| `npm run format:check` | Comprueba el formato sin modificar nada       |

## Estado del proyecto

Ver [PROGRESS.md](./PROGRESS.md).
