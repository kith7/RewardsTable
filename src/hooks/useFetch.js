import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [usersData, setUsersData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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
      }, 2000);
    };

    fetchData();
    return () => clearTimeout(fetchData);
  }, [url]);
  return { usersData, isPending, hasError };
};

export default useFetch;
