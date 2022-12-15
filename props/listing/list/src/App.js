import "./App.css";
import Listing from "./Listing";
import etsy from "./data/etsy";

const data = etsy;

function App() {
  return (
    <div className="App">
      <Listing items={data} />
    </div>
  );
}

export default App;
