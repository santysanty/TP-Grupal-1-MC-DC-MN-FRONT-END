// src/views/ChangelogPage.jsx
import React from 'react';

function ChangelogPage() {
  return (
    <div>
      <h1>Bitácora del Proyecto (Changelog)</h1>
      <p>Esta sección documentará los cambios, actualizaciones y progreso del proyecto a lo largo del tiempo.</p>
      <ul>
        <li>25 de Mayo, 2025: Inicio de la configuración de la estructura MVC.</li>
        <li>26 de Mayo, 2025: Implementación de React Router y Layouts.</li>
        <li>28 de Mayo, 2025: Añadimos consumo de API de comidas en tarjetas y navegar entre páginas.</li>
        <li>28 de Mayo, 2025:un archivo .json con Carrusel de pausa y reanuadar con diferentes países ubicado en una carpeta data.</li>
        {/* Agrega más entradas a medida que avances */}
      </ul>
    </div>
  );
}

export default ChangelogPage;