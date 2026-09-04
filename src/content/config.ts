import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['academic', 'personal']),
    // Campos específicos para materias académicas
    subject: z.string().optional(),
    semester: z.string().optional(),
    professor: z.string().optional(),
    team: z.string().optional(), // ej. "Individual", "Equipo de 3 personas"
    grade: z.string().optional(), // ej. "10/10 - Proyecto Destacado"
    
    // Campos generales
    tags: z.array(z.string()),
    image: z.string().default('/images/projects/default.svg'),
    githubUrl: z.string().optional(),
    liveUrl: z.string().optional(),
    featured: z.boolean().default(false),
    publishDate: z.string(),
    highlights: z.array(z.string()).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
