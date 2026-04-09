export default {
  metadata: {
    title: "Portafolio de Larry Aviles - Ingeniero de Software",
    description:
      "Ingeniero de Software con más de 5 años de experiencia en aplicaciones web. Especializado en el desarrollo web, utilizando la IA para mejorar la eficiencia y automatizar procesos.",
  },
  languageLabel: "Idioma",
  languageOptions: {
    es: "Español",
    en: "Inglés",
  },

  nav: {
    home: "Inicio",
    experience: "Experiencia",
    projects: "Proyectos",
    contact: "Contacto",
  },

  hero: {
    hello: "Hola Mundo",
    title: "Hola que tal, soy Larry",
    badge: "Ingeniero de Software",
    subtitle: "+6 años de experiencia.",
    subtitle02: "Full Stack",
    description:
      "Ingeniero de Software con más de 6 años de experiencia en aplicaciones web. Especializado en el desarrollo web, utilizando la IA para mejorar la eficiencia y automatizar procesos.",
    contact: "Contáctame",
  },

  experience: {
    title: "Experiencia",
    subtitle: "Habilidades",
    subtitle02: "Certificaciones",
    items: [
      {
        date: "Enero 2024 - Actualmente...",
        title: "Ingeniero de Software en MayanSoft",
        description:
          "Desarrollo y mantenimiento de sitios web institucionales, integraciones con whatsapp, correos, calendarios, messenger, CRM de ventas como HubSpot, etc.., Utilizando tecnologías como HTML, CSS, JavaScript, PHP, jQuery, Laravel, SQL, Astro, WordPress, GoDaddy, Azure y herramientas de Webmaster.",
        link: "https://mayansoft.com/",
      },
      {
        date: "Septiembre 2021 - Mayo 2023",
        title: "Ingeniero de Software en DivorceHelp123",
        description:
          "Desarrollo web de una aplicación para abogados, automatizando los procesos y creando nuevos módulos, se utilizó el framework Angular y PHP para la API. Pruebas de software manuales y automatizadas, utilizando herramientas como Jira y Postman.",
        link: "https://www.divorcehelp123.com/",
      },
      {
        date: "Octubre 2019 - Mayo 2020",
        title: "Desarrollador Web en la Universidad Modelo",
        description:
          "Desarrollo web de una aplicación diseñada para maestros y estudiantes universitarios, enfocada en el control académico utilizando el framework Laravel.",
        link: "https://www.unimodelo.edu.mx/merida",
      },
      {
        date: "Octubre 2017 - Mayo 2019",
        title: "Desarrollador Web en Sistemex",
        description:
          "Desarrollador de páginas web para PyMes utilizando tecnologías como Laravel, Wordpress y Bootstrap, enfocado a los requerimientos de los clientes. Desarrollo de un CRM en Laravel para un especialista en nutriología utilizando cálculos y medidas autocalculables en la aplicación.",
        link: "https://sistemex.com/",
      },
    ],
    certifications: [
      {
        date: "2024",
        title: "Microsoft Certified: Asociado de administrador de Azure",
        altTitle:
          "Imagen del certificado de Microsoft Certified: Asociado de administrador de Azure",
        image: "/images/certifications/microsoft-certified-associate-badge.svg",
        link: "https://learn.microsoft.com/api/credentials/share/es-es/LarryIvanAvilesCastillo-6799/1E03F90E554EC580?sharingId=4E78E29982EE1BD9",
      },
      {
        date: "2025",
        title:
          "Microsoft Certified: Experto en arquitecto de soluciones de Azure",
        altTitle:
          "Imagen del certificado de Microsoft Certified: Experto en arquitecto de soluciones de Azure",
        image: "/images/certifications/microsoft-certified-expert-badge.svg",
        link: "https://learn.microsoft.com/api/credentials/share/es-es/LarryIvanAvilesCastillo-6799/D4AEE0E69083711E?sharingId=4E78E29982EE1BD9",
      },
    ],
    more: "Saber más ...",
  },

  projects: {
    title: "Proyectos",
    titlePersonal: "Proyectos Personales",
    titleColab: "Proyectos Colaborativos",
    itemsPersonal: [
      {
        title: "Blog PHP/Laravel",
        description: "Un blog desarrollado en PHP y Laravel.",
        image: "/images/project-blog.webp",
        link: "#",
        github: "#",
        tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
        more: "Ver más",
      },
    ],
    itemsColab: [
      {
        title: "Sitio Web de Grupo Blue Ocean",
        description:
          "Desarrollo e implementación del sitio web de Grupo Blue Ocean con Astro, Tailwind CSS y JavaScript. Trabajando con el equipo de Innovación para el diseño y contenido.",
        image: "/images/grupoblueocean-website.webp",
        link: "https://grupoblueocean.com/",
        github: "#",
        tags: ["Astro", "Tailwind CSS", "JavaScript"],
        more: "Ver Sitio",
      },
      {
        title: "Sitio Web del Tecnológico de Software",
        description:
          "Desarrollo y publicación del sitio web del Tecnológico de Software usando WordPress con CSS y JavaScript. Trabajando con el equipo de Marketing para el diseño y contenido.",
        image: "/images/tec-website.webp",
        link: "https://tecdesoftware.edu.mx/",
        github: "#",
        tags: ["WordPress", "CSS", "JavaScript"],
        more: "Ver Sitio",
      },
      {
        title: "Sitio Web de eGob",
        description:
          "Desarrollo y publicación del sitio web de eGob usando WordPress con CSS y JavaScript. Trabajando con el equipo de Marketing para el diseño y contenido.",
        image: "/images/egob-website.webp",
        link: "https://egob.com/",
        github: "#",
        tags: ["WordPress", "CSS", "JavaScript"],
        more: "Ver Sitio",
      },
      {
        title: "Aplicación Web de Ecce Homo",
        description:
          "Responsable del desarrollo y despliegue de una aplicación web de Ecce Homo usando NextJS y Strapi. Trabajando con el equipo de Innovación para el diseño y contenido.",
        image: "/images/eccehomo-website.webp",
        link: "https://eccehomo.org/",
        github: "#",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Strapi"],
        more: "Ver Sitio",
      },
    ],
  },
  contact: {
    title: "Contacto",
    subTitle: "Colaboremos en tu siguiente desafío tecnológico.",
    placeHolder: "Ingresa tu correo electrónico",
    message: "Puedes dejarme un mensaje",
    label: "Déjame tu correo y lo analizamos juntos.",
    button: "Empecemos 🚀",
    description:
      "Como ingeniero de software, disfruto resolver problemas complejos y optimizar procesos mediante código. Si necesitas apoyo en desarrollo, arquitectura o automatización, cuéntame tu caso.",
    form: {
      sending: "Enviando...",
      success: "¡Gracias! Te contactaré pronto.",
      error: "Hubo un error. Por favor, intenta de nuevo.",
      duplicate: "Este correo ya está registrado.",
      validation: {
        emailRequired: "El correo electrónico es requerido",
        emailInvalid: "Correo electrónico inválido",
        messageRequired: "El mensaje es requerido",
      },
    },
  },

  footer: {
    email: "hi@larryaviles.com",
  },
};
