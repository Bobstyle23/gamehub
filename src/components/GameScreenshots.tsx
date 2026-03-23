import { Grid, GridItem, Image, SimpleGrid, Spinner } from "@chakra-ui/react";
import useGameScreenShots from "../hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

function GameScreenShots({ gameId }: Props) {
  const { data: screenshots, isLoading, error } = useGameScreenShots(gameId);

  if (isLoading) return <Spinner margin={5} />;

  if (error) throw error;

  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={3}>
        {screenshots?.results.map((screenshot) => (
          <GridItem key={screenshot.id}>
            <Image src={screenshot.image} />
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GameScreenShots;
