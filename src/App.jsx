import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error";
// importar proveedor
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <CartProvider>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:type" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
