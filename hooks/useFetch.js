import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url, token) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setError(null);
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setData(null);
        setError(error.message);
        setLoading(false);
      });
  },[]);

  return { data, error, loading };
};

export default useFetch;