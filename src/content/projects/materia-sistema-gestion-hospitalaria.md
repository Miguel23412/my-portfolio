---
title: "Sistema de Gestión y Registro Hospitalario"
description: "Plataforma web integral para la gestión de pacientes, citas médicas, expedientes clínicos y control de inventario de medicamentos."
category: "academic"
subject: "Bases de Datos & Backend"
semester: "5to Semestre - 2026"
professor: "Dra. Carmen Valenzuela"
team: "Equipo de 3 personas (Líder Backend)"
grade: "Calificación: 10/10 (Proyecto Destacado)"
tags: ["PostgreSQL", "Node.js", "Express", "TailwindCSS", "Docker", "JWT"]
image: "/images/projects/hospital.svg"
githubUrl: "https://github.com"
liveUrl: "https://demo.hospital-app.dev"
featured: true
publishDate: "2026-06-15"
highlights: [
  "Diseño relacional en 3FN con más de 18 tablas y procedimientos almacenados en PostgreSQL.",
  "Autenticación basada en roles (Médico, Recepción, Administrador, Paciente) con JWT.",
  "Contenedorizado completo con Docker Compose para desarrollo y despliegue rápido."
]
---

## Descripción del Proyecto

Este proyecto fue desarrollado como entrega final para la asignatura de **Bases de Datos y Backend**. El objetivo primordial consistió en resolver la problemática de desorganización en el flujo de atención hospitalaria mediante una arquitectura escalable, segura y con integridad referencial estricta.

### Objetivos Principales
1. Implementar un esquema de base de datos relacional normalizado hasta la **Tercera Forma Normal (3FN)**.
2. Construir una **API RESTful** segura con control de acceso basado en roles (RBAC).
3. Desarrollar un módulo de auditoría que registre cada modificación a los expedientes clínicos en cumplimiento de normativas de privacidad de datos.

```sql
-- Ejemplo de Trigger implementado para auditoría automática
CREATE OR REPLACE FUNCTION audit_medical_records()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO records_audit_log (record_id, changed_by, old_diagnosis, new_diagnosis, changed_at)
  VALUES (OLD.id, current_user, OLD.diagnosis, NEW.diagnosis, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

## Tecnologías Utilizadas

- **Base de Datos:** PostgreSQL 16 con vistas indexadas y triggers de auditoría.
- **Backend:** Node.js con Express y TypeScript para tipado estricto.
- **Frontend:** Astro + Tailwind CSS para una interfaz médica rápida y accesible.
- **Seguridad:** Cifrado con Bcrypt y tokens JWT con refresco automático.

## Aprendizajes y Desafíos Clave

- **Manejo de Concurrencia:** Se implementó bloqueo optimista en el agendamiento de citas médicas para evitar citas duplicadas en el mismo horario con el mismo especialista.
- **Optimización de Consultas:** Creación de índices compuestos para acelerar la búsqueda de pacientes por DNI y apellido en tablas con más de 100,000 registros simulados.
