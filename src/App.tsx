import { useState } from "react";
import Alert from "./components/Alert";
import SentButton from "./components/SentButton";

function App() {
  const [status, setStatus] = useState(true);
  const toggleStatus = () => setStatus(!status);

  const [sent, setSent] = useState(false);
  const handleClick = () => setSent(true);

  return (
    <>
      <Alert status={status} onClick={toggleStatus}>
        Alerta!
      </Alert>

      <SentButton sent={sent} onClick={handleClick}>
        Enviar
      </SentButton>
    </>
  );
}

export default App;
