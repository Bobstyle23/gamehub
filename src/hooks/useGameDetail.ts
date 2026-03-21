import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchSingleDataResponse } from "../services/api-client";
import ms from "ms";

export interface GameDetail {
  id: number;
  name: string;
  name_original: string;
  description_raw: string;
}

function useGameDetail(slug: string | null) {
  const apiClient = new APIClient<GameDetail>(`games/${slug}`);
  return useQuery<FetchSingleDataResponse<GameDetail>, Error>({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.get(),
    staleTime: ms("24h"),
  });
}

export default useGameDetail;
