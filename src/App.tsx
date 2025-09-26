import useHTTPData from "./hooks/useHTTPData";

type User = {
  id?: string;
  name: string;
};

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const { loading, error, data, addData, deleteData, updateData } =
    useHTTPData<User>(url);

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error && !loading) {
    return <p>Ah ocurrido un error :c</p>;
  }

  return (
    <ul>
      <button onClick={() => addData({ name: "Bolita Santillan" })}>
        Enviar
      </button>
      <button onClick={() => deleteData(1)}>Eliminar</button>
      <button onClick={() => updateData({ id: "1", name: "Tachi Santillan" })}>
        Actualizar
      </button>
      {data.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default App;
