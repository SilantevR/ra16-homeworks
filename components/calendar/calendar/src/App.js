import "./App.css";
import Calendar from "./Calendar";

const date = new Date();

function App() {
  return (
    <div className="App">
      <Calendar date={date} />
    </div>
  );
}

export default App;
