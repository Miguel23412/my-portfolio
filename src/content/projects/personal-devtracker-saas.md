---
title: "DevTracker - Plataforma de Productividad para Desarrolladores"
description: "Aplicación web que centraliza repositorios de GitHub, tareas de Jira/Linear y métricas de commits con analíticas de productividad personal."
category: "personal"
tags: ["Astro", "React", "TypeScript", "TailwindCSS", "Supabase", "GitHub API"]
image: "/images/projects/saas.svg"
githubUrl: "https://github.com"
liveUrl: "https://devtracker.dev"
featured: true
publishDate: "2026-07-01"
highlights: [
  "Integración bidireccional con la API GraphQL de GitHub y webhooks en tiempo real.",
  "Autenticación OAuth y almacenamiento en PostgreSQL administrado con Supabase.",
  "Modo offline con sincronización en segundo plano utilizando Service Workers."
]
---

## Motivación del Proyecto

Como desarrollador que compagina asignaturas universitarias con proyectos personales y contribuciones open source, sentía la necesidad de contar con un único panel que me mostrara mi progreso semanal de código sin tener que cambiar constantemente entre pestañas.

### Características Principales

- **Dashboard Unificado:** Métricas de Pull Requests abiertas, commits del día y issues asignadas.
- **Pomodoro Integrado:** Temporizador sincronizado con el estado de actividad de GitHub.
- **Rendimiento Ultrarrápido:** Construido con Astro y componentes interactivos cargados mediante islas de React (`client:visible`).
