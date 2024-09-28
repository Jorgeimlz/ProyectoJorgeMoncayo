"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Usuario } from './types';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch('/api/usuarios')
      .then(response => response.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <div className="usuarios-container container">
      <h1 className="title">Lista de Usuarios</h1>
      <table className="usuarios-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.correo}</td>
              <td>
                <Link href={`/usuarios/${usuario.id}`}>
                  <button className="edit-btn">Editar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link href="/usuarios/crear">
        <button className="create-btn">Crear Nuevo Usuario</button>
      </Link>
    </div>
  );
};

export default Usuarios;
