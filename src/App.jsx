import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  const greeting = "Hello World!";

  return (
    <>
      <Navbar />
      <ItemListContainer test="Prueba" />
    </>
  );
}

export default App;
