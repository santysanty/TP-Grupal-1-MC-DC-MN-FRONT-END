// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './views/HomePage';
import MemberPage from './views/MemberPage';
import CarruselPaises from './views/JsonDataPage';
import ApiData from './views/ApiDataPage'
import ChangelogPage from './views/ChangelogPage';
import NotFoundPage from './views/NotFoundPage';
import './styles/index.css';
import RecetaPage from './views/RecetaPage'


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/miembros/:name" element={<MemberPage />} />
          <Route path="/paises-carrusel" element={<CarruselPaises />} />
          <Route path="/api-recetas" element={<ApiData />} />
          <Route path="/receta/:id" element={<RecetaPage />} />
          <Route path="/bitacora" element={<ChangelogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
export default App;