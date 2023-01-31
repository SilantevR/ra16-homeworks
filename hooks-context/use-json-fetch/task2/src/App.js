import FetchResult from "./FetchResult";

function App() {
  return (
    <div className="App">
      <FetchResult url="http://localhost:7070/data" />
      <FetchResult url="http://localhost:7070/error" />
      <FetchResult url="http://localhost:7070/loading" />
    </div>
  );
}

export default App;
