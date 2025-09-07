import { useSearchParams } from "react-router-dom";

export function useSearch() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const setQuery = (q: string) => {
    const next = new URLSearchParams(params);
    q ? next.set("q", q) : next.delete("q");
    setParams(next, { replace: true });
  };
  return { query, setQuery };
}
