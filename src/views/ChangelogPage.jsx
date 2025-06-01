import React from 'react';
import styles from './ChangelogPage.module.css';

function ChangelogPage() {
  // Ejemplo de datos para el changelog, reemplaza o importa según corresponda
  const changelogData = [
    // ... mismos datos
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  // Función para capitalizar la primera letra de una palabra
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Función para formatear la fecha en español (Argentina)
  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('es-AR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <div className={styles['changelog-container']}>
      <header className={styles['changelog-header']}>
        <h1 className={styles['changelog-title']}>Bitácora del Proyecto (Changelog)</h1>
        <p className={styles['changelog-subtitle']}>
          Esta sección documentará los cambios, actualizaciones y progreso del proyecto a lo largo del tiempo.
        </p>
      </header>

      <section className={styles['changelog-sections-grid']}>
        {changelogData.map(({ id, version, date, author, type, description, impact }) => (
          <div key={id} className={styles['version-entry']}>
            <div className={styles['version-header']}>
              <span className={styles['version-number']}>{version}</span>
              <span className={styles['version-date']}>{formatDate(date)}</span>
            </div>

            <p className={styles['version-author']}>Autor: {author}</p>

            <span className={`${styles['change-type-tag']} ${styles[type]}`}>
              {capitalize(type)}
            </span>

            <p className={styles['version-description']}>{description}</p>

            {impact && (
              <p className={styles['version-impact']}>
                <strong>Impacto:</strong> {impact}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default ChangelogPage;
