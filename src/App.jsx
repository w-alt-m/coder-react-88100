import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemCount from "./components/ItemCount.jsx";

function App() {
  const greeting = "Hello World!";

  return (
    <>
      <Navbar />
      <ItemCount /> {/* No entra en la entrega */}
      <ItemListContainer saludo="Bienvenidos a mi App!" greeting={greeting} />
    </>
  );
}

export default App;
