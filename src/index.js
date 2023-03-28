import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <h1>react js pagination example</h1>
      <ProductList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
