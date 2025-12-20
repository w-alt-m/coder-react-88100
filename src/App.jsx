import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";

function App() {
  const greeting = "Hello World!";

  return (
    <>
      <Navbar />
      <ItemListContainer saludo="Bienvenidos a mi App!" greeting={greeting} />
    </>
  );
}

export default App;
