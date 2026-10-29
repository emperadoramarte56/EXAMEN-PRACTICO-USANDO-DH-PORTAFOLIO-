# Derek Huizar — Portafolio

Portafolio personal construido con **Vite + React + JavaScript** y **Tailwind CSS v4**.

## Requisitos
- Node.js 18 o superior

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre la URL que muestra la terminal (por defecto http://localhost:5173).

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/
    GalaxyBackground.jsx  → fondo animado de galaxia ASCII (canvas)
    Hero.jsx               → encabezado con efecto de escritura tipo terminal
    IDEWindow.jsx           → ventana tipo editor con explorador de archivos
    PaneSections.jsx        → contenido de about / skills / projects / contact
  data/
    portfolio.js            → datos editables: skills, proyectos y contacto
```

Para editar el contenido (nombre, skills, proyectos, correo, GitHub), modifica `src/data/portfolio.js`.
