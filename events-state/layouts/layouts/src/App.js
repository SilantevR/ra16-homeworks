import "./App.css";
import Store from "./Store";
import products from "./products";

function App() {
  return (
    <div className="App">
      <Store products={products} />
    </div>
  );
}

export default App;
