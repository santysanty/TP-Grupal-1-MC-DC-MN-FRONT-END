// src/data/teamMembersDetails.js

// Importa las imágenes de perfil (ajusta las rutas si es necesario)
import danielProfileImage from '../assets/img/DC.png'; // Asumiendo src/assets/img/DC.png
import mariaProfileImage from '../assets/img/MN.png'; // Asumiendo src/assets/img/MN.png

// Importa los iconos de tecnologías (ajústalos si es necesario)
import html5Icon from '../assets/icons/html5.svg';
import css3Icon from '../assets/icons/css3.svg';
import jsIcon from '../assets/icons/javascript.svg';
import reactIcon from '../assets/icons/react.svg';
import nodejsIcon from '../assets/icons/nodejs.svg';
import expressIcon from '../assets/icons/express.svg';
import pythonIcon from '../assets/icons/python.svg';
import cplusplusIcon from '../assets/icons/cplusplus.svg';
import gitIcon from '../assets/icons/git.svg';
import figmaIcon from '../assets/icons/figma.svg';

export const teamMembersDetails = [
  {
    id: 'daniel-coria',
    name: 'Daniel Coria',
    fullName: 'Daniel Osvaldo Coria',
    imageUrl: danielProfileImage,
    role: 'Full-Stack Developer & Data Analyst',
    bio: 'Profesional IT con una sólida trayectoria en el desarrollo de soluciones de software robustas, desde interfaces de usuario dinámicas hasta sistemas backend complejos y análisis de datos. Apasionado por la optimización del rendimiento y la innovación tecnológica.',
    skills: [
      'Desarrollo Frontend (React, JavaScript, HTML5, CSS3)',
      'Desarrollo Backend (Node.js, Express.js, Python)',
      'Diseño de APIs RESTful',
      'Análisis y Procesamiento de Datos',
      'Programación de Sistemas (C++)',
      'Control de Versiones (Git)',
      'Optimización de Rendimiento'
    ],
    projects: [
      { name: 'E-Commerce y Sistema de Rastreo de Productos', description: 'Plataforma de comercio electrónico...', link: 'https://santysanty.github.io/My_Portafolio/' },
      { name: 'Sistema de Automatización Ganadera', description: 'Sistema que automatiza la alimentación...', link: 'https://santysanty.github.io/My_Portafolio/' },
      { name: 'Análisis y Optimización del Flujo de Tráfico Urbano', description: 'Proyecto enfocado en medir el flujo vehicular...', link: 'https://santysanty.github.io/My_Portafolio/' }
    ],
    technologies: [
      { name: 'React', icon: reactIcon },
      { name: 'Node.js', icon: nodejsIcon },
      { name: 'Express.js', icon: expressIcon },
      { name: 'Python', icon: pythonIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'C++', icon: cplusplusIcon },
      { name: 'HTML5', icon: html5Icon },
      { name: 'CSS3', icon: css3Icon },
      { name: 'Git', icon: gitIcon }
    ]
  },
  {
    id: 'maria-nazar',
    name: 'María Nazar',
    fullName: 'María Nazar',
    imageUrl: mariaProfileImage,
    role: 'Front-end Engineer & UX Enthusiast',
    bio: 'Front-end engineer enfocada en accesibilidad y experiencia de usuario. Crea interfaces intuitivas y eficientes con un fuerte compromiso por las buenas prácticas y la accesibilidad web.',
    skills: [
      'Desarrollo Frontend (React, JavaScript, HTML5, CSS3)',
      'Diseño UX/UI (Figma)',
      'Accesibilidad Web',
      'Prototipado',
      'Responsive Design',
      'Metodologías Ágiles'
    ],
    projects: [
      {
        name: 'Portfolio Personal',
        description: 'Un sitio personal que muestra mis proyectos y habilidades en desarrollo frontend y diseño UX.',
        link: 'https://maria-nazar1.github.io/NEW_PORTAFOLIO/#sobre-mi'
      },
      {
        name: 'E-commerce Rediseño UX',
        description: 'Rediseño de la interfaz de usuario de una plataforma e-commerce existente, mejorando la navegación y el flujo de compra.',
        link: 'https://maria-nazar1.github.io/NEW_PORTAFOLIO/#sobre-mi'
      },
      {
        name: 'Aplicación de Gestión de Tareas',
        description: 'Desarrollo de una aplicación web para la gestión de tareas, con funcionalidades de creación, edición y seguimiento.',
        link: 'https://maria-nazar1.github.io/NEW_PORTAFOLIO/#sobre-mi'
      }
    ],
    technologies: [
      { name: 'React', icon: reactIcon },
      { name: 'JavaScript', icon: jsIcon },
      { name: 'HTML5', icon: html5Icon },
      { name: 'CSS3', icon: css3Icon },
      { name: 'Figma', icon: figmaIcon },
      { name: 'Git', icon: gitIcon }
    ]
  }
];
