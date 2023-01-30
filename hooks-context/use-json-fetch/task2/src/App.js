import useJsonFetch from "./useJsonFetch";

function App() {
  const data = useJsonFetch("http://localhost:7070/data");
  const error = useJsonFetch("http://localhost:7070/error");
  const loading = useJsonFetch("http://localhost:7070/loading");

  return (
    <div className="App">
      <div>{data ? data.status : ""}</div>
      <div>{error ? error.status : ""}</div>
      <div>{loading ? loading.status : ""}</div>
    </div>
  );
}

export default App;
