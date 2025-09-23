import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import SentButton from "./components/SentButton";
import ProductDashboard from "./components/ProductDashboard";
import ProductList from "./components/ProductList";

function App() {
  const [status, setStatus] = useState(true);
  const toggleStatus = () => setStatus(!status);

  const [sent, setSent] = useState(false);
  const handleClick = () => setSent(true);

  const [products, setProducts] = useState([
    {
      id: Math.random().toString(),
      name: "Chaneque",
    },
  ]);

  // Agregar Productos al final
  const agregarProductoAlFinal = () => {
    const newProduct = { id: Math.random().toString(), name: "Barbero Gay" };
    setProducts([...products, newProduct]);
  };

  // Agregar Productos al comienzo
  const agregarProductoAlComienzo = () => {
    const newProduct = { id: Math.random().toString(), name: "Kikis Cajuelas" };
    setProducts([newProduct, ...products]);
  };

  // Modificar un Producto
  // const modificarProducto = () => {
  //   const newProducts = products.map((p) =>
  //     p.id == 1 ? { ...p, name: "Windows" } : p
  //   );
  //   setProducts(newProducts);
  // };

  // Eliminar último Producto
  const eliminarUltimoProducto = () => {
    const newProducts = products.slice(0, -1);
    setProducts(newProducts);
  };

  // Limpiar productos
  const limpiarProductos = () => {
    setProducts([]);
  };

  return (
    <>
      {console.log(products)}
      {/* <Alert status={status} onClick={toggleStatus}>
        Alerta!
      </Alert>

      <SentButton sent={sent} onClick={handleClick}>
        Enviar
      </SentButton> */}
      <div>
        <Button onClick={agregarProductoAlFinal}>
          Agregar Chaneque al Final
        </Button>
        <hr />
        <Button onClick={agregarProductoAlComienzo}>
          Agregar Chaneque al Comienzo
        </Button>
        <hr />
        <Button onClick={limpiarProductos}>Limpiar Chaneques</Button>
        <hr />
        <Button onClick={eliminarUltimoProducto}>
          Eliminar último Chaneque
        </Button>
        <hr />
        <ProductDashboard amount={products.length} />
        <ProductList products={products} />
      </div>
    </>
  );
}

export default App;
