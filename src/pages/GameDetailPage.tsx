import { Box, Heading, Spinner } from "@chakra-ui/react";
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
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw || ""}</ExpandableText>
      <GameAttributes game={game!} />
      <GameTrailer gameId={game?.id!} />
      <GameScreenShots gameId={game?.id!} />
    </Box>
  );
}

export default GameDetailPage;
