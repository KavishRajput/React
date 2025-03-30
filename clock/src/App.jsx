import { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
      setTime(new Date()); 
    }, 1000);

    time.toLocaleTimeString().includes("PM")?document.body.style.backgroundColor="yellow":document.body.style.backgroundColor="gray";

    

  return (
    <>
      <h1>{time.toLocaleTimeString()}</h1>
    </>
  );
}
