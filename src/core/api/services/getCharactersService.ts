import { axiosClient } from "@/core/api/axiosClient";
import type { CharactersResponse } from "@/types/rickAndMorty";
import { ROUTES_NAME } from "@/core/constants/routes";

export async function getCharactersService(
  name?: string
): Promise<CharactersResponse> {
  const res = await axiosClient.get<CharactersResponse>(ROUTES_NAME.CHARACTER, {
    params: name ? { name } : undefined,
  });
  return res.data;
}
