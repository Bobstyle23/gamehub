import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetail from "../hooks/useGameDetail";

function GameDetailPage() {
  const { slug } = useParams();

  const { data } = useGameDetail(slug);

  return (
    <Box padding={5}>
      <Heading>{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </Box>
  );
}

export default GameDetailPage;
