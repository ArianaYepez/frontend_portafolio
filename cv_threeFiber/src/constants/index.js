import {
    mobile,
    backend,
    creator,
    web,
    javascript,
   
    html,
    css,
    reactjs,
    tailwind,
    nodejs,

    
    mysql,
    laravel,
    vitelogo,
    vsc,
    phplogo,

    git,
   
    solitario,
    crud,

    threejs,
    biblioteca,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Acerca de",
    },
    {
      id: "works",
      title: "Proyectos",
    },

    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: " Multimedia Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
  
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
  
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Vite",
      icon: vitelogo,
    },
    {
      name: "Visual Studio Code",
      icon: vsc,
    },
    {
      name: "PHP",
      icon: phplogo,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
  
  ];
  
 
  
  const testimonials = [
    {
      testimonial:
        
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      name: "Maria Lozada",
      designation: "CEO",
      company: "U Contact Us",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        
        "It has survived not only five centuries, but also the leap into electronic typesetting",
      name: "Carlos Calderón",
      designation: "CEO",
      company: "Nucopsa S.A.",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        
        "Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.",
      name: "Luisa León",
      designation: "DMM",
      company: "Agencia de Marketing La Chola",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Solitario JS",
      description:
        
        "Plataforma web que permite jugar solitario bajo el conjunto de reglas establecidas",      
        tags: [
        {
          name: "js",
          color: "blue-text-gradient",
        },
        {
          name: "html5",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: solitario,
      source_code_link: "https://github.com/ArianaYepez/solitario",
    },
    {
      name: "Biblioteca Musical",
      description:
        "Aplicación web que permite el stream de albums musicales en línea.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "green-text-gradient",
        },
        {
          name: "ts",
          color: "pink-text-gradient",
        },
      ],
      image: biblioteca,
      source_code_link: "https://github.com/",
    },
    {
      name: "CRUD",
      description:
        "Aplicación web que permite operaciones CRUD por medio de formularios en una base de datos.",
      tags: [
        {
          name: "laravel",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, testimonials, projects };