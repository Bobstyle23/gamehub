import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const { selectedPlatformName } = usePlatform(gameQuery.platformId);

  const genreName = genres.results.find(
    (genre) => genre.id == gameQuery.genreId,
  )?.name;

  const heading = `${selectedPlatformName || ""} ${genreName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
