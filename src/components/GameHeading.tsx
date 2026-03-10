import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data } = useGenres();
  const genreName = data.results.find(
    (genre) => genre.id === gameQuery.genreId,
  )?.name;

  const heading = `${gameQuery.platform?.name || ""} ${genreName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
