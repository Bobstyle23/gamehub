import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CriticScore from "../components/CriticScore";
import DefinitionItem from "../components/DefinitionItem";
import ExpandableText from "../components/ExpendableText";
import GameAttributes from "../components/GameAttributes";
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
      <GameAttributes game={game} />
    </Box>
  );
}

export default GameDetailPage;
