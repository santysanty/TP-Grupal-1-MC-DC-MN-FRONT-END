import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

// Datos de miembros con su propio enlace
const membersData = {
  'daniel-coria': {
    fullName: 'Daniel Coria',
    bio: 'Desarrollador full-stack especializado en APIs y bases de datos.',
    link: 'https://santysanty.github.io/My_Portafolio/'
  },
  'manuel-correderas': {
    fullName: 'Manuel Correderas',
    bio: 'Soy un desarrollador apasionado por la tecnología y el diseño web. Mi misión es crear soluciones digitales innovadoras.',
    link: 'https://manuel-correderas.github.io/ifts29_PFO2/'
  },
  'maria-nazar': {
    fullName: 'María Nazar',
    bio: 'Front-end engineer enfocada en accesibilidad y UX.',
    link: 'https://maria-nazar.github.io'
  },
};

export default function MemberPage() {
  const { name } = useParams();
  const slug = decodeURIComponent(name).toLowerCase();
  const member = membersData[slug];

  // Si no existe ese slug, redirige a la 404
  if (!member) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div>
      <h1>Hola, soy {member.fullName}</h1>
      <p>{member.bio}</p>
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visita mi portfolio →
      </a>
    </div>
  );
}
