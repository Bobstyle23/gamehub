import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: detail, isLoading, error } = useGameDetail(slug!);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  return (
    <Box padding={5}>
      <Heading>{detail?.name}</Heading>
      <Text>{detail?.description_raw}</Text>
    </Box>
  );
}

export default GameDetailPage;
