import { useEffect, useState } from "react";
import { getCharactersService } from "@/core/api/services/getCharactersService";
import type { Character } from "@/types/rickAndMorty";

type UseCharactersState = {
  data: Character[];
  loading: boolean;
  error: string | null;
};

export function useCharacters() {
  const [state, setState] = useState<UseCharactersState>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const response = await getCharactersService();
        if (!isMounted) return;

        setState({ data: response.results, loading: false, error: null });
      } catch (e: any) {
        if (!isMounted) return;
        setState({
          data: [],
          loading: false,
          error: e?.message ?? "Error",
        });
      }
    })();

    return () => {
      isMounted = false;
    };
  }, []);

  return state;
}