# 🧩 Sistema de Gestión (React + Express)

Aplicación web fullstack para la gestión de entidades como:

* 👤 Usuarios
* 📦 Productos
* 🤝 Clientes
* 🏢 Proveedores

Desarrollada con **React (frontend)** y **Express (backend)**, implementando operaciones CRUD completas y navegación con React Router.

---

## 🚀 Características

* CRUD completo para cada módulo:

  * Crear
  * Leer
  * Actualizar
  * Eliminar
* Navegación entre páginas con React Router
* Separación por capas (API, componentes, páginas)
* Comunicación con API REST
* Interfaz simple y funcional

---

## 🛠️ Tecnologías utilizadas

### Frontend

* React
* React Router DOM
* Fetch API
* CSS básico

### Backend

* Node.js
* Express
* API REST

---

## 📁 Estructura del proyecto

```
src/
│
├── api/
│   ├── config.js
│   ├── usuarios.js
│   ├── productos.js
│   ├── clientes.js
│   └── proveedores.js
│
├── components/
│   ├── Menu.jsx
│   ├── UsuariosList.jsx
│   ├── UsuarioForm.jsx
│   ├── ProductosList.jsx
│   ├── ProductoForm.jsx
│   ├── ClientesList.jsx
│   ├── ClienteForm.jsx
│   ├── ProveedoresList.jsx
│   └── ProveedorForm.jsx
│
├── pages/
│   ├── InicioPage.jsx
│   ├── UsuariosPage.jsx
│   ├── ProductosPage.jsx
│   ├── ClientesPage.jsx
│   └── ProveedoresPage.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone <TU_REPO_URL>
cd <NOMBRE_DEL_PROYECTO>
```

---

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Ejecutar el frontend

```bash
npm run dev
```

---

### 4. Ejecutar el backend

Asegúrate de tener el servidor Express corriendo en:

```
http://localhost:3000
```

---

## 🔗 Configuración de API

Archivo:

```
src/api/config.js
```

```js
export const API_BASE_URL = 'http://localhost:3000/api';
```

---

## 📌 Endpoints esperados

### Usuarios

* GET `/api/usuarios`
* POST `/api/usuarios`
* PUT `/api/usuarios/:id`
* DELETE `/api/usuarios/:id`

### Productos

* GET `/api/productos`
* POST `/api/productos`
* PUT `/api/productos/:id`
* DELETE `/api/productos/:id`

### Clientes

* GET `/api/clientes`
* POST `/api/clientes`
* PUT `/api/clientes/:id`
* DELETE `/api/clientes/:id`

### Proveedores

* GET `/api/proveedores`
* POST `/api/proveedores`
* PUT `/api/proveedores/:id`
* DELETE `/api/proveedores/:id`

---

## 🧠 Arquitectura

El proyecto sigue una estructura modular:

* **api/** → Comunicación con backend
* **components/** → UI reutilizable
* **pages/** → Vistas principales
* **App.jsx** → Sistema de rutas

---

## 🧪 Posibles mejoras

* Validación de formularios
* Manejo de errores más robusto
* UI con Tailwind o Material UI
* Autenticación (login)
* Paginación
* Búsqueda y filtros
* Deploy (Vercel + Render)

---

## 🐞 Problemas comunes

### ❌ No aparecen datos después de crear

✔ Verificar que el estado se recargue (`reload`)

### ❌ Error de conexión

✔ Asegurarse que Express esté corriendo

### ❌ CORS error

✔ Configurar CORS en el backend

---

## 👨‍💻 Autor

Proyecto desarrollado con fines educativos para prácticas de:

* React
* APIs REST
* Arquitectura frontend

---

## 📄 Licencia

Uso libre para aprendizaje.
