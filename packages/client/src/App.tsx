import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button.tsx";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className={"p-4"}>
      <p className={"font-bold"}>{message}</p>
      <Button>Click me</Button>
    </div>
  );
}

export default App;
