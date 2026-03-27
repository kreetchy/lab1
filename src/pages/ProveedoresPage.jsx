import { useState } from 'react';
import ProveedoresList from '../components/ProveedoresList';
import ProveedorForm from '../components/ProveedorForm';

function ProveedoresPage() {
  const [seleccionado, setSeleccionado] = useState(null);
  const [reload, setReload] = useState(0);

  return (
    <div>
      <h1>Módulo de proveedores</h1>

      <ProveedorForm
        proveedorSeleccionado={seleccionado}
        onSuccess={() => {
          setSeleccionado(null);
          setReload(r => r + 1);
        }}
        onCancel={() => setSeleccionado(null)}
      />

      <ProveedoresList key={reload} onEdit={setSeleccionado} />
    </div>
  );
}

export default ProveedoresPage;