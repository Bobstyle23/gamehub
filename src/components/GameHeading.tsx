import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { selectedGenreName } = useGenre(gameQuery.genreId);
  const { selectedPlatformName } = usePlatform(gameQuery.platformId);

  const heading = `${selectedPlatformName || ""} ${selectedGenreName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
