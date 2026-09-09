# Rengue

Web de presentación para una tienda de alta bisutería y complementos.

Primera versión: sitio visual de una sola página, pensado para dar a conocer
el negocio (catálogo visual, historia de la marca, contacto). Sin carrito ni
pagos todavía — eso llegará en una segunda fase como tienda online.

## Stack

- [Astro](https://astro.build) (sitio estático)
- [Tailwind CSS](https://tailwindcss.com)
- Despliegue en [Vercel](https://vercel.com)

## Desarrollo local

```sh
npm install
npm run dev
```

Sitio disponible en `http://localhost:4321`.

## Estructura

```text
src/
├── components/   # Secciones de la página (Header, Hero, Catalog, Contact...)
├── layouts/      # Layout base (head, fuentes, estilos globales)
├── pages/        # Rutas (index.astro = página principal)
└── styles/       # Estilos globales y tema de colores (Tailwind)
```

## Comandos

| Comando           | Acción                                      |
| :----------------- | :------------------------------------------ |
| `npm install`       | Instala dependencias                        |
| `npm run dev`       | Servidor local en `localhost:4321`          |
| `npm run build`     | Genera la versión de producción en `./dist/` |
| `npm run preview`   | Previsualiza el build antes de desplegar    |

## Estado del proyecto

Ver [PROGRESS.md](./PROGRESS.md).
