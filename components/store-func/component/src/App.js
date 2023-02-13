import "./App.css";
import ShopItemFunc from "./ShopItemFunc";
import item from "./item.js";

function App() {
  return (
    <div className="App">
      <ShopItemFunc item={item} />
    </div>
  );
}

export default App;
