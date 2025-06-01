// src/components/Sidebar/CardTeam.jsx

import { Link } from 'react-router-dom';
import React from 'react';

// IMPORTA TUS ESTILOS CSS MODULES DESDE Sidebar.module.css
// ¡ASEGÚRATE DE QUE ESTA LÍNEA NO ESTÉ COMENTADA!
import styles from './Sidebar.module.css'; // <<<<< ¡ESTA LÍNEA DEBE ESTAR ACTIVA!

export default function CardTeam({ nombre, imagen, id, role, expertise }) {
  return (
    <div className={styles.memberCard}> {/* Usamos styles.memberCard */}
      <img
        src={imagen}
        alt={nombre}
        className={styles.memberAvatar} // Usamos styles.memberAvatar
      />
      <h3 className={styles.memberCardH3}>{nombre}</h3> {/* Usamos styles.memberCardH3 */}

      {role && <p className={styles.memberRoleTitle}>{role}</p>}
      {expertise && <p className={styles.memberExpertise}>{expertise}</p>}

      <Link to={`/miembros/${id}`} className={styles.memberPortfolioBtn}> {/* Usamos styles.memberPortfolioBtn */}
        Ver más
      </Link>
    </div>
  );
}