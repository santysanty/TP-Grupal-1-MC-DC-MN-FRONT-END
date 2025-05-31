// src/views/NotFoundPage.jsx
import React from 'react';

function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#f8f8f8', minHeight: 'calc(100vh - 40px)' }}>
      <h1>404 - Página No Encontrada</h1>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <p>Por favor, verifica la URL o usa la navegación para encontrar lo que necesitas.</p>
      {/* Opcional: un enlace para volver a la página de inicio */}
      <a href="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', backgroundColor: '#007bff', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
        Volver a la Página Principal
      </a>
    </div>
  );
}

export default NotFoundPage;