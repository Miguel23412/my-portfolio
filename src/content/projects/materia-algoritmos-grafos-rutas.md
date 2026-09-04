---
title: "Visualizador de Algoritmos de Grafos y Rutas Óptimas"
description: "Herramienta interactiva para visualizar y comparar el rendimiento de Dijkstra, A*, BFS y DFS en mapas de transporte urbano."
category: "academic"
subject: "Estructuras de Datos y Algoritmos"
semester: "4to Semestre - 2025"
professor: "Dr. Roberto Mendoza"
team: "Individual"
grade: "Calificación: 9.8/10"
tags: ["Python", "Algoritmos", "Grafos", "Visualización", "C++", "Pygame"]
image: "/images/projects/graphs.svg"
githubUrl: "https://github.com"
featured: true
publishDate: "2025-11-20"
highlights: [
  "Implementación desde cero de colas de prioridad con Min-Heap binario.",
  "Visualización paso a paso de exploración de nodos en tiempo real.",
  "Análisis de complejidad temporal y espacial en grafos con más de 10,000 vértices."
]
---

## Resumen del Proyecto

Desarrollado para la materia de **Estructuras de Datos y Algoritmos**, este proyecto implementa y compara experimentalmente algoritmos fundamentales de búsqueda de caminos mínimos sobre grafos ponderados dirigidos.

### Algoritmos Implementados
- **Dijkstra:** Búsqueda del camino más corto con cola de prioridad optimizada (`O((V + E) log V)`).
- **A* (A-Star):** Algoritmo heurístico con distancia euclidiana y Manhattan para acelerar la convergencia.
- **Floyd-Warshall:** Cálculo de caminos más cortos para todos los pares de nodos (`O(V^3)`).
- **Árbol de Expansión Mínima (Kruskal & Prim):** Con estructura de conjuntos disjuntos (*Disjoint-Set / Union-Find*).

## Resultados y Conclusiones

La heurística en A* demostró una reducción del 68% en los nodos explorados comparado con Dijkstra en redes de transporte con obstáculos densos, manteniendo la exactitud de la solución óptima.
