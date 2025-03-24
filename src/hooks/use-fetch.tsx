import { useEffect, useState } from "react";

interface UseFetchProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (data: any) => void;
  url: string;
}

export const useFetch = ({ callback, url }: UseFetchProps) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchInitialData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      const initialData = await response.json();
      callback(initialData);
    } catch (error) {
      console.error("Failed to fetch table data:", error);
      setError("Failed to fetch initial data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  return { loading, error, fetchInitialData };
};
