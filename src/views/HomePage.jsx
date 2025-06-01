// src/views/HomePage.jsx

import React from 'react';
import CardTeam from '../components/Sidebar/CardTeam';

// ASUMO QUE TENDRÁS teamMembersDetails EN src/data/teamMembersDetails.js
import { teamMembersDetails } from '../data/teamMembersDetails';

// Importamos los estilos desde HomePage.module.css para la sección del equipo
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <section className={styles.homePageContainer}> {/* Contenedor principal de la Home Page */}

      {/* Sección de Nuestro Equipo (primera sección) */}
      <div className={styles.teamSectionContainer}> {/* Contenedor de la sección del equipo */}
        <h2 className={styles.teamSectionTitle}>Nuestro Equipo:</h2> {/* Título de la sección */}
        <div className={styles.teamMembersGrid}> {/* Cuadrícula para las tarjetas */}
          {teamMembersDetails.map(member => (
            <CardTeam
              key={member.id}
              id={member.id}
              nombre={member.name}
              imagen={member.imageUrl}
              role={member.role}
            />
          ))}
        </div>
      </div>

      {/* Sección de Misión, Visión y Valores (segunda sección, a continuación del equipo) */}
      <div className={styles.missionVisionValuesSection}>
        <h2 className={styles.sectionTitle}>Nuestra Esencia</h2> {/* Título general para esta sección */}

        <div className={styles.valuesGrid}> {/* Cuadrícula para Misión, Visión y Valores */}
          <div className={styles.valueCard}>
            <h3 className={styles.valueCardTitle}>Misión</h3>
            <p className={styles.valueCardText}>
              Desarrollar soluciones tecnológicas innovadoras para impulsar el crecimiento y la eficiencia, creando experiencias de usuario excepcionales y sostenibles.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3 className={styles.valueCardTitle}>Visión</h3>
            <p className={styles.valueCardText}>
              Ser líderes en desarrollo de software, reconocidos por nuestra excelencia, creatividad y el impacto positivo a través de la tecnología en la sociedad.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3 className={styles.valueCardTitle}>Valores</h3>
            {/* VALORES COMO UNA SOLA ORACIÓN, AHORA MÁS COMPACTA */}
            <p className={styles.valueCardText}>
              Nos guían la ¬Innovación¬, ¬Colaboración¬, ¬Integridad¬, ¬Calidad¬ y ¬Pasión¬ en cada proyecto, buscando excelencia y un impacto positivo.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}