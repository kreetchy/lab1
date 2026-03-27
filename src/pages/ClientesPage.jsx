import { useState } from 'react';
import ClientesList from '../components/ClientesList';
import ClienteForm from '../components/ClienteForm';

function ClientesPage() {
  const [seleccionado, setSeleccionado] = useState(null);
  const [reload, setReload] = useState(0);

  return (
    <div>
      <h1>Módulo de clientes</h1>

      <ClienteForm
        clienteSeleccionado={seleccionado}
        onSuccess={() => {
          setSeleccionado(null);
          setReload(r => r + 1);
        }}
        onCancel={() => setSeleccionado(null)}
      />

      <ClientesList reload={reload} onEdit={setSeleccionado} /> 
    </div>
  );
}

export default ClientesPage;