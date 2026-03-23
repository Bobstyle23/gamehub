import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";
import { GameTrailer } from "../entities/GameTrailer";

function useGameTrailer(gameId: number) {
  const apiClient = new APIClient<GameTrailer>(`games/${gameId}/movies`);

  return useQuery({
    queryKey: ["gameTrailer", gameId],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("24h"),
  });
}

export default useGameTrailer;
