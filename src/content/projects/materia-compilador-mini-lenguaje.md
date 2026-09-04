---
title: "Compilador para Mini-Lenguaje Tipado (MiniLang)"
description: "Diseño y construcción de un compilador completo que traduce un subconjunto de lenguaje imperativo a código intermedio y ensamblador."
category: "academic"
subject: "Teoría de la Computación y Compiladores"
semester: "6to Semestre - 2026"
professor: "Ing. Santiago Morales"
team: "Equipo de 2 personas"
grade: "En Curso - Entregable Fase 2 Aprobado"
tags: ["TypeScript", "Compiladores", "Parsing", "AST", "LLVM", "Gramáticas"]
image: "/images/projects/compiler.svg"
githubUrl: "https://github.com"
featured: false
publishDate: "2026-05-10"
highlights: [
  "Analizador léxico con expresiones regulares y máquina de estados finitos (DFA).",
  "Parser sintáctico con árbol de sintaxis abstracta (AST) usando descenso recursivo.",
  "Analizador semántico con tabla de símbolos jerárquica y chequeo de tipos estático."
]
---

## Descripción de MiniLang

MiniLang es un lenguaje de programación educativo con tipado estático, soporte para funciones, bucles, condicionales y estructuras de datos básicas.

### Fases del Compilador
1. **Lexer:** Tokenización de código fuente reconociendo palabras clave, identificadores y operadores.
2. **Parser:** Construcción del AST respetando la precedencia de operadores mediante análisis descendente recursivo.
3. **Type Checker:** Detección de incompatibilidad de tipos, variables no declaradas o ámbitos inválidos.
4. **Generador de Código:** Emisión de código intermedio de tres direcciones (TAC).
