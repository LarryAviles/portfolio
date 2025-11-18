export default {
  metadata: {
    title: "Larry Aviles Portfolio - Software Engineer",
    description:
      "Software Engineer with over 5 years of experience in web applications. Specialized in web development, using AI to improve efficiency and automate processes.",
  },
  languageLabel: "Language",
  languageOptions: {
    es: "Spanish",
    en: "English",
  },

  nav: {
    home: "Home",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
  },

  hero: {
    hello: "Hello World",
    title: "Hi there, I'm Larry",
    badge: "Software Engineer",
    subtitle: "+5 years of experience.",
    subtitle02: "Full Stack",
    description:
      "Software Engineer with over 5 years of experience in web applications. Specialized in web development, using AI to improve efficiency and automate processes.",
    contact: "Contact Me",
  },
  experience: {
    title: "Experience",
    subtitle: "Skills",
    subtitle02: "Certifications",
    items: [
      {
        date: "January 2024 - Currently...",
        title: "Software Engineer at MayanSoft",
        description:
          "Development and maintenance of institutional websites, integrations with WhatsApp, emails, calendars, messenger, sales CRM like HubSpot, etc. Using technologies such as HTML, CSS, JavaScript, PHP, jQuery, Laravel, SQL, Astro, WordPress, GoDaddy, Azure and Webmaster tools.",
        link: "https://mayansoft.com/",
      },
      {
        date: "September 2021 - May 2023",
        title: "Software Engineer at DivorceHelp123",
        description:
          "Web development of an application for lawyers, automating processes and creating new modules, using Angular framework and PHP for the API. Manual and automated software testing, using tools like Jira and Postman.",
        link: "https://www.divorcehelp123.com/",
      },
      {
        date: "October 2019 - May 2020",
        title: "Web Developer at Universidad Modelo",
        description:
          "Web development of an application designed for teachers and university students, focused on academic control using the Laravel framework.",
        link: "https://www.unimodelo.edu.mx/merida",
      },
      {
        date: "October 2017 - May 2019",
        title: "Web Developer at Sistemex",
        description:
          "Developer of web pages for SMEs using technologies such as Laravel, WordPress and Bootstrap, focused on client requirements. Development of a CRM in Laravel for a nutrition specialist using calculations and auto-calculable measurements in the application.",
        link: "https://sistemex.com/",
      },
    ],
    certifications: [
      {
        date: "2024",
        title: "Microsoft Certified: Azure Administrator Associate",
        altTitle: "Image of the Microsoft Certified: Azure Administrator Associate certificate",
        image: "/images/certifications/microsoft-certified-associate-badge.svg",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/LarryIvanAvilesCastillo-6799/1E03F90E554EC580?sharingId=4E78E29982EE1BD9",
      },
      {
        date: "2025",
        title: "Microsoft Certified: Azure Solutions Architect Expert",
        altTitle: "Image of the Microsoft Certified: Azure Solutions Architect Expert certificate",
        image: "/images/certifications/microsoft-certified-expert-badge.svg",
        link: "https://learn.microsoft.com/api/credentials/share/en-us/LarryIvanAvilesCastillo-6799/D4AEE0E69083711E?sharingId=4E78E29982EE1BD9",
      },
    ],
    more: "Learn more ...",
  },
  projects: {
    title: "Projects",
    titlePersonal: "Personal Projects",
    titleColab: "Collaborative Projects",
    itemsPersonal: [
      {
        title: "PHP/Laravel Blog",
        description: "A blog developed in PHP and Laravel.",
        image: "/images/project-blog.webp",
        link: "#",
        github: "#",
        tags: ["PHP", "Laravel", "Bootstrap", "MySQL"],
        more: "See more",
      },
    ],
    itemsColab: [
      {
        title: "Blue Ocean Group Website",
        description:
          "Development and implementation of the Grupo Blue Ocean website using Astro, Tailwind CSS, and JavaScript. Working with the Marketing team for design and content.",
        image: "/images/grupoblueocean-website.webp",
        link: "https://grupoblueocean.com/",
        github: "#",
        tags: ["Astro", "Tailwind CSS", "JavaScript"],
        more: "View Site",
      },
      {
        title: "Software Technology Institute Website",
        description:
          "Development and publication of the Tecnológico de Software website using WordPress with CSS and JavaScript. Working with the Marketing team for design and content.",
        image: "/images/tec-website.webp",
        link: "https://tecdesoftware.edu.mx/",
        github: "#",
        tags: ["WordPress", "CSS", "JavaScript"],
        more: "View Site",
      },
      {
        title: "eGob Website",
        description:
          "Development and publication of the eGob website using WordPress with CSS and JavaScript. Working with the Marketing team for design and content.",
        image: "/images/egob-website.webp",
        link: "https://egob.com/",
        github: "#",
        tags: ["WordPress", "CSS", "JavaScript"],
        more: "View Site",
      },
      {
        title: "Ecce Homo Web Application",
        description:
          "Responsible for the development and deployment of the Ecce Homo web application using Next.js and Strapi. Working with the Innovation team for design and content.",
        image: "/images/eccehomo-website.webp",
        link: "https://eccehomo.org/",
        github: "#",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Strapi"],
        more: "View Site",
      },
    ],
  },
  contact: {
    title: "Contact",
    subTitle: "Let's collaborate on your next tech challenge.",
    placeHolder: "Enter your email",
    message: "You can leave me a message",
    label:
      "Leave your email, and let's discuss how I can contribute to your goals.",
    button: "Let's Connect 🚀",
    description:
      "As a software engineer, I enjoy solving complex problems and optimizing processes through clean, efficient code. Whether you need help with development, architecture, or automation, I'd love to hear about your project.",
    form: {
      sending: "Sending...",
      success: "Thanks! I'll contact you soon.",
      error: "There was an error. Please try again.",
      duplicate: "This email is already registered.",
      validation: {
        emailRequired: "Email is required",
        emailInvalid: "Invalid email address",
        messageRequired: "Message is required",
      },
    },
  },
};
