// src/App.jsx
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './views/HomePage';
import MemberPage from './views/MemberPage';
import JsonDataPage from './views/JsonDataPage';
import ApiDataPage from './views/ApiDataPage';
import RecetaPage from './views/RecetaPage';
import ChangelogPage from './views/ChangelogPage';
import NotFoundPage from './views/NotFoundPage';

import './styles/index.css';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/miembros/:id" element={<MemberPage />} /> {/* <-- Asegúrate de que sea :id */}
          <Route path="/paises" element={<JsonDataPage />} />
          <Route path="/api-recetas" element={<ApiDataPage />} />
          <Route path="/receta/:id" element={<RecetaPage />} />
          <Route path="/bitacora" element={<ChangelogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
export default App;
