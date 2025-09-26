import useUsers from "./hooks/useUsers";

function App() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <p>Cargando...</p>;
  }

  if (error && !loading) {
    return <p>Ah ocurrido un error :c</p>;
  }

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default App;
