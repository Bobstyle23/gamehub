import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../stores/gameQueryStore";

function GameHeading() {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const platformId = useGameQueryStore((store) => store.gameQuery.platformId);

  const { selectedGenreName } = useGenre(genreId || 0);
  const { selectedPlatformName } = usePlatform(platformId || 0);

  const heading = `${selectedPlatformName || ""} ${selectedGenreName || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
}

export default GameHeading;
