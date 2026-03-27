import { useEffect, useState } from 'react';
import { getClientes, deleteCliente } from '../api/clientes';

function ClientesList({ onEdit, reload }) {
  const [clientes, setClientes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  async function cargar() {
    try {
      setCargando(true);
      setError(null);
      const data = await getClientes();
      setClientes(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  // 🔥 CLAVE: ahora depende de reload
  useEffect(() => {
    cargar();
  }, [reload]);

  async function handleDelete(id) {
    if (!confirm('¿Eliminar cliente?')) return;

    try {
      await deleteCliente(id);
      cargar(); // recarga después de eliminar
    } catch (err) {
      alert('Error al eliminar: ' + err.message);
    }
  }

  if (cargando) return <p>Cargando clientes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Lista de clientes</h2>

      {clientes.length === 0 ? (
        <p>No hay clientes registrados.</p>
      ) : (
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.nombre}</td>
                <td>{c.correo}</td>
                <td>{c.telefono}</td>
                <td>
                  <button onClick={() => onEdit(c)}>Editar</button>
                  <button onClick={() => handleDelete(c.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={cargar}>Recargar</button>
    </div>
  );
}

export default ClientesList;