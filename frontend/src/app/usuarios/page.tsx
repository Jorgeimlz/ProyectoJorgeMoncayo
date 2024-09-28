import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Usuario } from './types'; // Importa la interfaz de usuario

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    fetch('/api/usuarios')
      .then(response => response.json())
      .then(data => setUsuarios(data));
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            {usuario.nombre} - {usuario.correo} <Link href={`/usuarios/${usuario.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
      <Link href="/usuarios/crear">Crear Nuevo Usuario</Link>
    </div>
  );
};

export default Usuarios;
