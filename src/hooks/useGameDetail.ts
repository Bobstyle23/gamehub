import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>(`/games`);

export interface GameDetail {
  id: number;
  name: string;
  name_original: string;
  description_raw: string;
}

function useGameDetail(slug: string) {
  return useQuery({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.get(slug!),
    staleTime: ms("24h"),
  });
}

export default useGameDetail;
