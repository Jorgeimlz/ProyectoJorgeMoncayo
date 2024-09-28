import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Usuario } from '../types'; // Importa la interfaz de usuario

const EditarUsuario = () => {
  const [nombre, setNombre] = useState<string>('');
  const [correo, setCorreo] = useState<string>('');
  const [contrasena, setContrasena] = useState<string>('');
  const router = useRouter();
  const { id } = router.query;

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
    <form onSubmit={handleSubmit}>
      <h1>Editar Usuario</h1>
      <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
      <input type="email" value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo" required />
      <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" />
      <button type="submit">Guardar</button>
    </form>
  );
};

export default EditarUsuario;
