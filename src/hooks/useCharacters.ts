import axios from "axios";
import { useEffect, useState } from "react";
import { getCharactersService } from "@/core/api/services/getCharactersService";
import type { Character } from "@/types/rickAndMorty";

type UseCharactersState = {
  data: Character[];
  loading: boolean;
  error: string | null;
};

export function useCharacters(searchValue: string) {
  const [state, setState] = useState<UseCharactersState>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;
    const name = searchValue.trim();

    setState((prev) => ({ ...prev, loading: true }));

    (async () => {
      try {
        const response = await getCharactersService(name || undefined);
        if (!isMounted) return;

        setState({ data: response.results, loading: false, error: null });
      } catch (error) {
        if (!isMounted) return;

        if (axios.isAxiosError(error) && error.response?.status === 404) {
          setState({ data: [], loading: false, error: null });
          return;
        }

        setState({
          data: [],
          loading: false,
          error: (error as Error)?.message ?? "Error",
        });
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [searchValue]);

  return state;
}
