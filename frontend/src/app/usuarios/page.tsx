"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Usuario } from './types';
import { useRouter } from 'next/navigation';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);  // Estado para almacenar los usuarios
  const router = useRouter();

  useEffect(() => {
    fetch('/api/usuarios')  // Petición GET al backend para obtener los usuarios
      .then(response => response.json())
      .then(data => setUsuarios(data));  // Actualizamos el estado con los usuarios
  }, []);

  // Función para eliminar un usuario
  const eliminarUsuario = async (id: number) => {
    await fetch(`/api/usuarios/${id}`, {
      method: 'DELETE',  // Petición DELETE al backend
    });
    setUsuarios(usuarios.filter(usuario => usuario.id !== id));  // Actualizamos el estado para eliminar el usuario
  };

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
                <button className="delete-btn" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
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
