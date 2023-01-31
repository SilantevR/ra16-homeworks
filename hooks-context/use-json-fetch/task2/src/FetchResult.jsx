import useJsonFetch from "./useJsonFetch";

export default function FetchResult(props) {
  const { data, error, isLoading } = useJsonFetch(props.url);

  return (
    <div className="component">
      <div>{data}</div>
      {isLoading && <div>Загрузка...</div>}
      <div>{error}</div>
    </div>
  );
}
