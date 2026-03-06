import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

function useGenres() {
  return useData<Genre>("/genres");
}

export default useGenres;
