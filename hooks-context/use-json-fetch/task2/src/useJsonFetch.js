import { useEffect, useState } from "react";

export default function useJsonFetch(url) {
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        setResult(result);
      })
      .catch((e) => {
        throw new Error(e.message);
      });
  }, [url]);

  return result;
}
