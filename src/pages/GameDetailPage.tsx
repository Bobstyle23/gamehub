import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ExpandableText from "../components/ExpendableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenShots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGameDetail from "../hooks/useGameDetail";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner margin={5} />;

  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} padding={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw || ""}</ExpandableText>
        <GameAttributes game={game!} />
      </GridItem>

      <GridItem>
        <GameTrailer gameId={game?.id!} />
        <GameScreenShots gameId={game?.id!} />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetailPage;
