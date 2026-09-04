# 🚀 Portafolio Web en Astro (Materias Universitarias & Proyectos Personales)

¡Bienvenido a tu portafolio web personal y académico creado con **Astro 5**, **Tailwind CSS** y **Content Collections**!

---

## 📁 Estructura del Proyecto

```
astro-portfolio/
├── src/
│   ├── config/
│   │   └── site.ts             <-- ✏️ Configura aquí tu nombre, universidad, bio y redes
│   ├── content/
│   │   ├── config.ts           <-- Esquema de validación para proyectos
│   │   └── projects/           <-- 📝 Aquí agregas tus proyectos en Markdown (.md)
│   │       ├── materia-*.md    <-- Proyectos de materias universitarias
│   │       └── personal-*.md   <-- Proyectos personales
│   ├── components/             <-- Navbar, Footer, ProjectCard, Filtros, etc.
│   ├── layouts/
│   │   └── Layout.astro        <-- Layout principal con modo claro/oscuro
│   └── pages/
│       ├── index.astro         <-- Página de Inicio
│       ├── projects/           <-- Galería con filtro en tiempo real y vista individual
│       ├── about.astro         <-- Sobre Mí y trayectoria académica
│       └── contact.astro       <-- Formulario y enlaces de contacto
├── public/                     <-- Imágenes y recursos estáticos
└── package.json
```

---

## 🛠️ Cómo Iniciar el Proyecto

1. Abre una terminal en la carpeta del proyecto:
   ```bash
   cd "C:\Users\USER\.gemini\antigravity\scratch\astro-portfolio"
   ```

2. Instala las dependencias (si aún no lo has hecho):
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver tu portafolio.

4. Para compilar a producción:
   ```bash
   npm run build
   ```

---

## ✏️ Cómo Personalizar tus Datos

### 1. Modifica tu Información General
Abre el archivo [`src/config/site.ts`](src/config/site.ts) y edita:
- Tu nombre y carrera.
- Tu universidad y semestre actual.
- Tu correo electrónico y enlaces a GitHub y LinkedIn.

### 2. Cómo Agregar un Nuevo Proyecto de una Materia
Crea un archivo `.md` dentro de `src/content/projects/` (ej. `materia-mi-asignatura.md`):

```markdown
---
title: "Nombre del Proyecto"
description: "Breve resumen de lo que hace el proyecto."
category: "academic"
subject: "Nombre de la Materia (ej. Inteligencia Artificial)"
semester: "6to Semestre - 2026"
professor: "Nombre del Profesor"
grade: "10/10"
tags: ["Python", "TensorFlow", "FastAPI"]
featured: true
publishDate: "2026-08-28"
highlights: [
  "Logro o desafío técnico superado 1",
  "Logro o desafío técnico superado 2"
]
---

## Descripción Detallada
Escribe aquí la documentación, objetivos, arquitectura y capturas del proyecto.
```

### 3. Cómo Agregar un Nuevo Proyecto Personal
Crea un archivo `.md` con `category: "personal"`:

```markdown
---
title: "Mi Proyecto Personal"
description: "Descripción de tu aplicación o librería."
category: "personal"
tags: ["Astro", "React", "Supabase"]
githubUrl: "https://github.com/tu-usuario/repo"
liveUrl: "https://demo.dev"
featured: true
publishDate: "2026-08-28"
---

## ¿Por qué lo construí?
Explica tu motivación, arquitectura y tecnologías utilizadas.
```

---

## 🌐 Cómo Publicar tu Portafolio en Internet (Gratis)
Puedes subir este repositorio a GitHub y desplegarlo en un clic con:
- **Vercel**: `https://vercel.com`
- **Netlify**: `https://netlify.com`
- **Cloudflare Pages**: `https://pages.cloudflare.com`
