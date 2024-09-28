"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CrearUsuario = () => {
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch('/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, correo, contrasena }),
    });
    router.push('/usuarios');
  };

  return (
    <div className="crear-usuario-container">
      <h1 className="title">Crear Usuario</h1>
      <form onSubmit={handleSubmit} className="crear-usuario-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Nombre"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={e => setCorreo(e.target.value)}
            placeholder="Correo"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={e => setContrasena(e.target.value)}
            placeholder="Contraseña"
          />
        </div>
        <button type="submit" className="submit-btn">Crear</button>
      </form>
    </div>
  );
};

export default CrearUsuario;
