import React from 'react';
import CardTeam from '../components/Sidebar/CardTeam';
import { teamMembersDetails } from '../data/teamMembersDetails';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <section className={styles.homePageContainer}>
      {/* Sección de Nuestro Equipo */}
      <div className={styles.teamSectionContainer}>
        <h2 className={styles.teamSectionTitle}>Nuestro Equipo:</h2>
        <div className={styles.teamMembersGrid}>
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

      {/* Sección de Misión, Visión y Valores */}
      <div className={styles.missionVisionValuesSection}>
        <h2 className={styles.sectionTitle}>Nuestra Esencia</h2>
        <div className={styles.valuesGrid}>
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
            <p className={styles.valueCardText}>
              Nos guían la ¬Innovación¬, ¬Colaboración¬, ¬Integridad¬, ¬Calidad¬ y ¬Pasión¬ en cada proyecto, buscando excelencia y un impacto positivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
