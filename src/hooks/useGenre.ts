import useGenres from "./useGenres";

function useGenre(selectedGenreId: number) {
  const { data: genres } = useGenres();

  const selectedGenreName = genres.results.find(
    (genre) => genre.id == selectedGenreId,
  )?.name;

  return { selectedGenreName };
}

export default useGenre;
