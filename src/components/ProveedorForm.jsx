import { useState, useEffect } from 'react';
import { createProveedor, updateProveedor } from '../api/proveedores';

const inicial = { nombre: '', empresa: '', telefono: '' };

function ProveedorForm({ proveedorSeleccionado, onSuccess, onCancel }) {
  const [form, setForm] = useState(inicial);

  useEffect(() => {
    if (proveedorSeleccionado) {
      setForm(proveedorSeleccionado);
    } else {
      setForm(inicial);
    }
  }, [proveedorSeleccionado]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (proveedorSeleccionado?.id) {
      await updateProveedor(proveedorSeleccionado.id, form);
    } else {
      await createProveedor(form);
    }

    onSuccess();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{proveedorSeleccionado ? 'Editar' : 'Nuevo'} Proveedor</h2>

      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} />
      <input name="empresa" placeholder="Empresa" value={form.empresa} onChange={handleChange} />
      <input name="telefono" placeholder="Teléfono" value={form.telefono} onChange={handleChange} />

      <button type="submit">Guardar</button>

      {proveedorSeleccionado && (
        <button type="button" onClick={onCancel}>Cancelar</button>
      )}
    </form>
  );
}

export default ProveedorForm;