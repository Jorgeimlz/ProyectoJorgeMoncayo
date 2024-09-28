"use client";

import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1 className="title">Bienvenido a la Gestión de Usuarios</h1>
        <p className="subtitle">Administra tus usuarios de manera fácil y eficiente.</p>
      </header>
      <main className="main-content">
        <div className="card-container">
          <div className="card">
            <h2 className="card-title">Ver Usuarios</h2>
            <p className="card-description">Explora la lista completa de usuarios registrados en tu aplicación.</p>
            <Link href="/usuarios">
              <button className="card-button">Ir a Usuarios</button>
            </Link>
          </div>
          <div className="card">
            <h2 className="card-title">Crear Usuario</h2>
            <p className="card-description">Agrega nuevos usuarios al sistema de manera rápida y sencilla.</p>
            <Link href="/usuarios/crear">
              <button className="card-button">Crear Usuario</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
