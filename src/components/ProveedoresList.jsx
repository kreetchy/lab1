import { useEffect, useState } from 'react';
import { getProveedores, deleteProveedor } from '../api/proveedores';

function ProveedoresList({ onEdit }) {
  const [proveedores, setProveedores] = useState([]);

  async function cargar() {
    const data = await getProveedores();
    setProveedores(data);
  }

  useEffect(() => {
    cargar();
  }, []);

  async function handleDelete(id) {
    if (!confirm('¿Eliminar proveedor?')) return;
    await deleteProveedor(id);
    cargar();
  }

  return (
    <div>
      <h2>Proveedores</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Empresa</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {proveedores.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.nombre}</td>
              <td>{p.empresa}</td>
              <td>{p.telefono}</td>
              <td>
                <button onClick={() => onEdit(p)}>Editar</button>
                <button onClick={() => handleDelete(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProveedoresList;