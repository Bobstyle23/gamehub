import { Box, Spinner } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  gameId: number;
}

function GameTrailer({ gameId }: Props) {
  const { data: trailer, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return <Spinner margin={5} />;

  if (error) throw error;

  return (
    <Box>
      {trailer?.results.map((video, index) => (
        <video
          poster={trailer.results[0].preview}
          key={video.id}
          controls
          width="100%"
          style={{ marginBottom: "24px" }}
        >
          <source src={video?.data["480"]} type="video/mp4" />
          <source src={video?.data["max"]} type="videp/mp4" />
        </video>
      ))}
    </Box>
  );
}

export default GameTrailer;
