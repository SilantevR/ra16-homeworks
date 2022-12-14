import "./App.css";
import Portfolio from "./Portfolio";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Portfolio data={data} />
    </div>
  );
}

export default App;
