import { axiosClient } from "@/core/api/axiosClient";
import type { CharactersResponse } from "@/types/rickAndMorty";
import { ROUTES_NAME } from "@/core/constants/routes";

export async function getCharactersService(): Promise<CharactersResponse> {
  const res = await axiosClient.get<CharactersResponse>(ROUTES_NAME.CHARACTER);
  return res.data;
}