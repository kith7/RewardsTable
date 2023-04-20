import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [usersData, setUsersData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!url) return;
      setIsPending(true);
      //use setTimeout for debouncing purposes and to simulate data fetching
      setTimeout(() => {
        fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then((res) => {
            if (!res.ok) {
              throw Error(
                "Something went wrong, could not fetch this resource"
              );
              setIsPending(false);
            }
            return res.json();
          })
          .then((data) => {
            setIsPending(false);
            setUsersData(data);

            setHasError(null);
          })
          .catch((err) => {
            setIsPending(false);
            setHasError(err.message);
          });
      }, 1000);
    };

    fetchData();
    return () => clearTimeout(fetchData);
  }, [url]);
  return { usersData, isPending, hasError };
};

export default useFetch;
