# E-commerce App - Coder React 88100

Proyecto frontend desarrollado con React + Vite como práctica final del curso de React en Coderhouse. Este proyecto es una tienda en línea (E-commerce) completamente funcional, que incluye catálogo de productos, carrito de compras y proceso de checkout conectado a una base de datos.

## � Demo en Vivo (Deployment)

Puedes visitar y probar la versión desplegada de la aplicación en el siguiente enlace:
👉 **[https://coder-react-88100.vercel.app/](https://coder-react-88100.vercel.app/)**

## �🌟 Características Principales (Features)

Gracias a la estructura del proyecto en `src/`, la aplicación cuenta con las siguientes funcionalidades:
- **Navegación y Rutas (`react-router-dom`)**:
  - Inicio (`/`) - Muestra todos los productos.
  - Categorías (`/category/:categoryId`) - Filtra productos por categoría específica.
  - Detalle de Producto (`/item/:id`) - Vista detallada de un producto en específico.
  - Carrito (`/cart`) - Visualización de productos agregados, subtotal y total.
  - Checkout (`/checkout`) - Formulario de finalización de compra que genera una orden.
- **Gestión de Estado Global**: Utiliza `CartContext` (`src/context/CartContext.jsx`) para administrar los productos, cantidades y totales del carrito a lo largo de toda la aplicación.
- **Base de Datos (Firebase Firestore)**: Conexión real en `src/service/firebase.jsx` para leer el catálogo de productos y guardar las órdenes generadas en el checkout.
- **Diseño Responsivo**: Interfaz gráfica construida con Tailwind CSS y componentes pre-armados de DaisyUI para garantizar compatibilidad con dispositivos móviles.

## 📦 Dependencias y Librerías (Dependencies & Libraries)

El proyecto utiliza las siguientes tecnologías y librerías clave, según se define en el `package.json`:
- **[React](https://react.dev/)** (`^19.2.3`) - Librería principal para la interfaz de usuario.
- **[React Router DOM](https://reactrouter.com/)** (`^7.13.0`) - Enrutamiento dinámico en el frontend.
- **[Firebase](https://firebase.google.com/)** (`^12.9.0`) - Backend as a Service (Firestore).
- **[Tailwind CSS](https://tailwindcss.com/)** (`^4.1.18`) - Framework de CSS utilitario.
- **[DaisyUI](https://daisyui.com/)** (`^5.5.14`) - Biblioteca de componentes UI.
- **[React Icons](https://react-icons.github.io/react-icons/)** (`^5.5.0`) - Iconografía de la app.
- **[Vite](https://vitejs.dev/)** (`^7.2.4`) - Entorno de desarrollo ultrarrápido.

## � Estructura del Proyecto

```text
src/
├── assets/         # Recursos estáticos.
├── components/     # Componentes de React (Navbar, ItemListContainer, Checkout, CartContainer, etc).
├── context/        # Proveedores de contexto (CartProvider).
├── service/        # Configuración de Firebase (firebase.jsx).
├── App.jsx         # Componente principal y declaración de rutas.
└── main.jsx        # Punto de entrada de la aplicación.
```

## �🚀 Instalación y Configuración (Setup Instructions)

Sigue estos pasos para configurar y ejecutar el proyecto localmente si lo has clonado o copiado a otra computadora:

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/coder-react-88100.git
   ```

2. **Acceder al directorio del proyecto**
   ```bash
   cd coder-react-88100
   ```

3. **Instalar las dependencias**
   ```bash
   npm install
   ```

4. **Variables de Entorno (Firebase)**
   Este proyecto utiliza **Firebase Firestore** como backend. Para que la aplicación pueda leer los productos y guardar órdenes, debes crear un archivo `.env` en la raíz del proyecto y agregar tus propias credenciales de Firebase extraídas de la consola:
   ```env
   VITE_FIREBASE_API_KEY=tu_api_key
   VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
   VITE_FIREBASE_PROJECT_ID=tu_project_id
   VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
   VITE_FIREBASE_APP_ID=tu_app_id
   ```

5. **Iniciar el entorno de desarrollo local**
   Levanta el servidor local:
   ```bash
   npm run dev
   ```
   *La aplicación estará disponible usualmente en `http://localhost:5173`*.
