export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  bio: string;
  tagline: string;
  university: string;
  career: string;
  currentSemester: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  navLinks: { name: string; href: string }[];
  socialLinks: SocialLink[];
  stats: {
    academicProjectsCount: string;
    personalProjectsCount: string;
    techCount: string;
    academicGPA: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Miguel Angel Andrade Arnez",
  role: "Estudiante de Ingeniería de Software & Desarrollador Fullstack",
  tagline: "Construyendo soluciones eficientes a través de proyectos académicos y desarrollo de software moderno.",
  bio: "Soy estudiante universitario apasionado por la creación de software, el diseño de arquitecturas limpias y el aprendizaje continuo. Me especializo en desarrollo web moderno, algoritmos y bases de datos, combinando el rigor académico con la innovación de proyectos personales.",
  university: "Universidad Privada Franz Tamayo", // Tu universidad
  career: "Ingeniería de Software / Sistemas Computacionales", // Tu carrera
  currentSemester: "5to Semestre", // Tu semestre actual
  location: "Cochabamba, Bolivia / Remoto", // Tu ubicación
  email: "miguelangelandradearnez@gmail.com", // Tu correo
  github: "https://github.com/Miguel23412", // Tu perfil de GitHub
  linkedin: "https://linkedin.com", // Tu LinkedIn
  resumeUrl: "#", // Enlace a tu CV / Curriculum en PDF

  navLinks: [
    { name: "Inicio", href: "/" },
    { name: "Proyectos", href: "/projects" },
    { name: "Sobre Mí", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ],

  socialLinks: [
    { name: "GitHub", url: "https://github.com/Miguel23412", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { name: "Email", url: "mailto:miguelangelandradearnez@gmail.com", icon: "mail" },
  ],

  stats: {
    academicProjectsCount: "8+",
    personalProjectsCount: "6+",
    techCount: "15+",
    academicGPA: "9.4 / 10",
  }
};
