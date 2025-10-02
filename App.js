import React from "react"; // uvozi react iz reacta

function Greeting() {
  // funkcija greeting
  return <h2>Welcome to React 🚀</h2>; // vrni naslov welcome
}

export default function App() {
  // izvozi funkcijo app()
  return (
    // vrni, naredi div, hi hello react, zapri div
    <div>
      <h1>Hello React!</h1>
      <Greeting />
    </div>
  );
}
