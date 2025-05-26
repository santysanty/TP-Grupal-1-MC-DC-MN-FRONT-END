// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './views/HomePage';
import MemberPage from './views/MemberPage';
import JsonDataPage from './views/JsonDataPage';
import ApiDataPage from './views/ApiDataPage';
import ChangelogPage from './views/ChangelogPage';
import NotFoundPage from './views/NotFoundPage';
import './styles/index.css'; // Asegúrate de que index.css esté en src/styles/

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/miembros/:name" element={<MemberPage />} />
          <Route path="/json-data" element={<JsonDataPage />} />
          <Route path="/api-data" element={<ApiDataPage />} />
          <Route path="/bitacora" element={<ChangelogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
export default App;