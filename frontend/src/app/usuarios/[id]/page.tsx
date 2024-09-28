"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { Usuario } from '../types';

const EditarUsuario = () => {
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');
  const router = useRouter();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetch(`/api/usuarios/${id}`)
        .then(response => response.json())
        .then((data: Usuario) => {
          setNombre(data.nombre);
          setCorreo(data.correo);
        });
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch(`/api/usuarios/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, correo, contrasena }),
    });
    router.push('/usuarios');
  };

  return (
    <div className="edit-user-container">
      <h1 className="title">Editar Usuario</h1>
      <form onSubmit={handleSubmit} className="edit-user-form">
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
        <button type="submit" className="submit-btn">Guardar</button>
      </form>
    </div>
  );
};

export default EditarUsuario;
