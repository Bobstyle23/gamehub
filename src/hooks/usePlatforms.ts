import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatforms() {
  const { data, isLoading, error } = useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/parent_platforms")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
  return { data, isLoading, error };
}

export default usePlatforms;
