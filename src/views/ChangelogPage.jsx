// src/views/ChangelogPage.jsx
import React from 'react';
import styles from './ChangelogPage.module.css';

function ChangelogPage() {
  // Datos de la bitácora
  // NOTA: Se ha añadido un .sort() para mostrar las entradas más recientes primero.
  const changelogData = [
    {
      id: 6, // Nuevo ID, asegúrate de que sea único
      date: '2025-06-01', // Fecha actual o la que desees para que sea la más reciente
      version: 'V0.6', // Nueva versión
      author: 'Daniel Coria', // Tu nombre
      type: 'improvement', // Tipo de cambio
      description: 'Implementación de mejoras de diseño y compactación en las páginas de perfil de los miembros, incluyendo reducción de títulos, espaciado y tamaño de iconos para una mejor visualización de todo el contenido en una sola página.',
      impact: 'Optimización de la experiencia de usuario y presentación más eficiente de la información en los perfiles.'
    },
    {
      id: 1,
      date: '2025-06-01',
      version: 'V0.5',
      author: 'Daniel Coria',
      type: 'improvement',
      description: 'Rediseño de la página de la bitácora con un formato de tarjetas más visual y estructurado, aplicando los estilos de diseño del proyecto.',
      impact: 'Mejora la legibilidad y la experiencia del usuario para el seguimiento del progreso del proyecto.'
    },
    {
      id: 2,
      date: '2025-05-31',
      version: 'V0.2',
      author: 'Nazar Maria',
      type: 'update',
      description: 'Implementación de React Router para la navegación entre páginas y definición de los layouts principales de la aplicación.',
      impact: 'Mejora la navegabilidad y la estructura general de la interfaz de usuario.'
    },
    {
      id: 3,
      date: '2025-05-30',
      version: 'V0.1',
      author: 'Nazar Maria',
      type: 'new',
      description: 'Inicio de la configuración de la estructura MVC para el proyecto y configuración del entorno de desarrollo.',
      impact: 'Establecimiento de la base del proyecto.'
    },
    {
      id: 4,
      date: '2025-05-28',
      version: 'V0.3',
      author: 'Correderas Manuel',
      type: 'improvement',
      description: 'Añadimos consumo de API de comidas en tarjetas y capacidad de navegar entre páginas de detalle de comidas.',
      impact: 'Funcionalidad principal de visualización de datos implementada.'
    },
    {
      id: 5,
      date: '2025-05-28',
      version: 'V0.4',
      author: 'Correderas Manuel',
      type: 'new',
      description: 'Implementación de un carrusel con funciones de pausa y reanudar, utilizando un archivo .json con diferentes países ubicado en una carpeta data.',
      impact: 'Añade un componente interactivo y dinámico a la página principal.'
    },
  ].sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordenar por fecha más reciente

  return (
    <div className={styles['changelog-container']}>
      <header className={styles['changelog-header']}>
        <h1 className={styles['changelog-title']}>Bitácora del Proyecto (Changelog)</h1>
        <p className={styles['changelog-subtitle']}>Esta sección documentará los cambios, actualizaciones y progreso del proyecto a lo largo del tiempo.</p>
      </header>

      <section className={styles['changelog-sections-grid']}>
        {changelogData.map((entry) => (
          <div key={entry.id} className={styles['version-entry']}>
            <div className={styles['version-header']}>
              <span className={styles['version-number']}>{entry.version}</span>
              <span className={styles['version-date']}>{entry.date}</span>
            </div>
            <p className={styles['version-author']}>Autor: {entry.author}</p>
            {/* Se agrega una clase dinámica para el color de la etiqueta de tipo */}
            <span className={`${styles['change-type-tag']} ${styles[entry.type]}`}>
              {entry.type}
            </span>
            <p className={styles['version-description']}>{entry.description}</p>
            {entry.impact && ( // Muestra el impacto solo si existe
              <p className={styles['version-impact']}>
                **Impacto:** {entry.impact}
              </p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}

export default ChangelogPage;