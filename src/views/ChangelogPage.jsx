import React from 'react';
import styles from './ChangelogPage.module.css';

function ChangelogPage() {
  // Datos corregidos con tipos que coinciden con las clases CSS
  const changelogData = [
    {
      id: '1',
      version: 'v1.0.0',
      date: '2025-05-01',
      author: 'Daniel Coria',
      type: 'new',
      description: 'Lanzamiento inicial del proyecto con funcionalidades básicas.',
      impact: 'Alta - Base para desarrollo futuro'
    },
    {
      id: '2',
      version: 'v1.1.0',
      date: '2025-05-15',
      author: 'María Nazar',
      type: 'improvement',
      description: 'Se agregó módulo de autenticación y registro de usuarios.',
      impact: 'Media - Mejor experiencia y seguridad'
    },
    {
      id: '3',
      version: 'v1.1.1',
      date: '2025-05-20',
      author: 'Manuel Correderas',
      type: 'update',
      description: 'Corrección de errores en el formulario de login.',
      impact: 'Baja - Mejora estabilidad'
    }
  ].sort((a, b) => new Date(b.date) - new Date(a.date));

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

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
