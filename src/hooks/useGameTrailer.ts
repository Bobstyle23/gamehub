import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponse } from "../services/api-client";

export interface GameTrailer {
  id: number;
  name: string;
  preview: string;
  data: { [key: string]: string };
}

const apiClient = new APIClient<FetchResponse<GameTrailer>>("games");

function useGameTrailer(id: number) {
  return useQuery<FetchResponse<GameTrailer>, Error>({
    queryKey: ["gameTrailer", id],
    queryFn: () => apiClient.getTrailer(id, "movies"),
    staleTime: ms("24h"),
  });
}

export default useGameTrailer;
