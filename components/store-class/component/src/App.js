import "./App.css";
import ShopItemClass from "./ShopItemClass";
import item from "./item.js";

function App() {
  return (
    <div className="App">
      <ShopItemClass item={item} />
    </div>
  );
}

export default App;
