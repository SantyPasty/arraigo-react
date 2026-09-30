# Arraigo — Landing en React

Versión en React de la [landing de Arraigo](https://github.com/SantyPasty/landing-page). Sirve para probar animaciones de [React Bits](https://reactbits.dev) sin tocar el HTML original.

- **Sitio en vivo:** https://santypasty.github.io/arraigo-react/
- **Laboratorio de animaciones:** https://santypasty.github.io/arraigo-react/#/laboratorio

Equipo: Santiago Muñoz y Rommy Gómez · Sandbox para Emprendedores, Universidad EAN

## Correr el proyecto en tu computador

```bash
npm install
npm run dev
```

Luego abre http://localhost:5173/arraigo-react/.

## Agregar una animación de React Bits

1. En reactbits.dev, elige la animación y la variante **JS + CSS**.
2. Instálala con su comando, por ejemplo:

   ```bash
   npx shadcn@latest add @react-bits/SplitText-JS-CSS
   ```

   El archivo queda en `src/components/`.
3. Agrega una tarjeta en `src/lab/Laboratorio.jsx`: un objeto nuevo dentro de la lista `demos`.
4. Si convence, úsala en la sección que corresponda en `src/sections/`.

## Cómo está organizado

| Carpeta | Qué hay |
|---|---|
| `src/sections/` | Cada sección de la landing: Hero, Costo, Solución, etc. |
| `src/components/` | Componentes instalados de React Bits |
| `src/lab/` | Página del laboratorio |
| `src/hooks/` | Lógica reutilizable: contador, aparición al hacer scroll, rutas |
| `src/styles/landing.css` | El CSS original de la landing, sin cambios |
| `public/` | Favicons y la foto de MaskedHeading |

## Publicar

Cada `git push` a `main` publica solo en GitHub Pages, mediante `.github/workflows/deploy.yml`.

## Créditos

- Foto provisional (`public/operativos.jpg`): Fons Heijnsbroek, Amsterdam 2022, dominio público (CC0), vía Wikimedia Commons. Pendiente de reemplazar por una foto propia de campo.
- Animaciones: [React Bits](https://reactbits.dev) (MIT + Commons Clause).
