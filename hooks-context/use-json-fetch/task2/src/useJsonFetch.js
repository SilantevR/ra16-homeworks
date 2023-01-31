import { useEffect, useState } from "react";

export default function useJsonFetch(url) {
  const [data, setData] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => setData(result.status))
      .catch((error) => setError(error.status))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, error, isLoading };
}
