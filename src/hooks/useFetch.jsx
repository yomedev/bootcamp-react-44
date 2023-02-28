import { useEffect, useState } from "react";

export const useFetch = (callback, page, search) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const resData = await callback({ page, search });
        setData(resData);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [callback, page, search]);

  return { data, isLoading, isError };
};
