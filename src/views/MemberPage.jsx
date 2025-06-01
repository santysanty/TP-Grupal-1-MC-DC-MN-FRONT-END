// src/views/MemberPage.jsx

import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { teamMembersDetails } from '../data/teamMembersDetails'; // Asegúrate de que esta ruta sea correcta
import styles from './MemberPage.module.css';

export default function MemberPage() {
  const { name } = useParams();
  const slug = decodeURIComponent(name).toLowerCase();
  const member = teamMembersDetails.find(m => m.id === slug);

  if (!member) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className={styles['member-profile-container']}> {/* Usa styles.clase */}
      <div className={styles['member-header']}>
        <img
          src={member.imageUrl}
          alt={member.fullName}
          className={styles['member-profile-img']}
        />
        <div className={styles['member-header-info']}>
          <h1>{member.fullName}</h1>
          <p className={styles['member-role']}>{member.role}</p>
          <p className={styles['member-bio']}>{member.bio}</p>
          {member.link && (
            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['member-portfolio-btn']}
            >
              Visita mi portfolio →
            </a>
          )}
        </div>
      </div>

      {/* SECCIÓN DE HABILIDADES */}
      {member.skills && member.skills.length > 0 && (
        <div className={styles['profile-section']}>
          <h2 className={styles['section-title']}>Habilidades</h2>
          <div className={styles['skills-grid']}>
            {member.skills.map((skill, index) => (
              <span key={index} className={styles['skill-pill']}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* SECCIÓN DE PROYECTOS */}
        {member.projects && member.projects.length > 0 && (
        <div className={styles['profile-section']}>
          <h2 className={styles['section-title']}>Proyectos</h2>
          <div className={styles['projects-grid']}>
            {member.projects.map((project, index) => (
              <div key={index} className={styles['project-card']}>
                <h3 className={styles['project-title']}>{project.name}</h3>
                <p className={styles['project-description']}>{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles['project-button']} // COMENTARIO ELIMINADO DE AQUÍ
                  >
                    Ver Proyecto
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SECCIÓN DE TECNOLOGÍAS */}
      {member.technologies && member.technologies.length > 0 && (
        <div className={styles['profile-section']}>
          <h2 className={styles['section-title']}>Tecnologías</h2>
          <div className={styles['technologies-grid']}>
            {member.technologies.map((tech, index) => (
              <div key={index} className={styles['tech-item']}>
                {typeof tech.icon === 'string' ? (
                  <img src={tech.icon} alt={tech.name} className={styles['tech-icon-img']} />
                ) : (
                  React.cloneElement(tech.icon, {
                    className: styles['tech-icon-svg'],
                    width: '60px', // Ojo: Este width y height están hardcodeados aquí,
                    height: '60px', // y no están siendo controlados por el CSS Modules.
                                    // Si quieres que el CSS Modules los controle,
                                    // deberías eliminarlos de aquí.
                  })
                )}
                <p className={styles['tech-name']}>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}