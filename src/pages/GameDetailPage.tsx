import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpendableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetail from "../hooks/useGameDetail";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: detail, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner margin={5} />;

  if (error) throw error;

  return (
    <Box padding={5}>
      <Heading>{detail?.name}</Heading>
      <ExpandableText>{detail?.description_raw || ""}</ExpandableText>
      <GameAttributes
        platforms={detail?.parent_platforms}
        genres={detail?.genres}
        metascore={detail?.metacritic}
        publishers={detail?.publishers}
      />
    </Box>
  );
}

export default GameDetailPage;
