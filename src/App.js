import React from "react";
import Navigation from "./containers/navigation";
import Principal from "./containers/principal";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Principal />
    </div>
  );
}
