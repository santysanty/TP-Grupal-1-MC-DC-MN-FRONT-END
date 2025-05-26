// src/views/HomePage.jsx
import React from 'react';
import styles from './HomePage.module.css'; // Estilos para la página

function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Bienvenido a nuestro TP Grupal de Front-end</h1>
      <p>Aquí presentaremos a nuestro increíble equipo y el trabajo realizado en esta Single Page Application.</p>
    </div>
  );
}
export default HomePage;