import { useState } from 'react';
import { useRouter } from 'next/router';

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
    <form onSubmit={handleSubmit}>
      <h1>Crear Usuario</h1>
      <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} placeholder="Nombre" required />
      <input type="email" value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo" required />
      <input type="password" value={contrasena} onChange={e => setContrasena(e.target.value)} placeholder="Contraseña" required />
      <button type="submit">Crear</button>
    </form>
  );
};

export default CrearUsuario;
