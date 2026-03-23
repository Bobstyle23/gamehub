import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import ExpandableText from "../components/ExpendableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetail from "../hooks/useGameDetail";
import useGameTrailer from "../hooks/useGameTrailer";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetail(slug!);

  const { data: trailer } = useGameTrailer(game?.id!);

  if (isLoading) return <Spinner margin={5} />;

  if (error) throw error;

  return (
    <Box padding={5}>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw || ""}</ExpandableText>
      <GameAttributes game={game!} />
      {trailer?.results.map((video) => (
        <video key={video.id} controls width="100%">
          <source src={video?.data["480"]} type="video/mp4" />
          <source src={video?.data["max"]} type="videp/mp4" />
        </video>
      ))}
    </Box>
  );
}

export default GameDetailPage;
