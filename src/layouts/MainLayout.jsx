// src/layouts/MainLayout.jsx
import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from './MainLayout.module.css';

function MainLayout({ children }) {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
export default MainLayout;