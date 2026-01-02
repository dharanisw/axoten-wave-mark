import { useEffect, useState } from "react";
import { testAPI } from "./apiTest";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    testAPI().then(data => setMsg(data.message));
  }, []);

  return <h1>{msg}</h1>;
}

export default App;
