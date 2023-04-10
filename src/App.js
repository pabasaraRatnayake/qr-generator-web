import './App.css';
//import QRCodeRenderer from "./Components/QR-Code";
import QRCodeGenerator from "./Components/QR-Code";
//import QRCodeComponent from "./Components/QR-Code";
import React from "react";

function App() {
  return (
      <div className="App">
          <h1>QR Code Generator</h1>
          <QRCodeGenerator/>
      </div>
  );
}

export default App;

//<QRCodeComponent text="Hello, world!" />