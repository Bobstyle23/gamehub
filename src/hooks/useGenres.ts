// import useData from "./useData";
import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// function useGenres() {
//   return useData<Genre>("/genres");
// }

function useGenres() {
  return { data: genres, isLoading: false, error: null };
}

export default useGenres;
