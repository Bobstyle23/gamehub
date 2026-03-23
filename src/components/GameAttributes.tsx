import { Platform } from "../entities/Platform";
import { Genre } from "../hooks/useGenres";
import { Grid, Heading, GridItem, Text } from "@chakra-ui/react";
import { Publisher } from "../entities/Publisher";
import CriticScore from "./CriticScore";

interface Props {
  platforms: { platform: Platform }[];
  genres: Genre[];
  metascore: number;
  publishers: Publisher[];
}
function GameAttributes({ platforms, genres, metascore, publishers }: Props) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6} marginTop={6}>
      <GridItem>
        <Heading size="sm" color="gray" marginBottom={1}>
          Platforms
        </Heading>
        {platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GridItem>
      <GridItem>
        <Heading size="sm" color="gray" marginBottom={1}>
          Metascore
        </Heading>
        <CriticScore score={metascore} />
      </GridItem>
      <GridItem>
        <Heading size="sm" color="gray" marginBottom={1}>
          Genres
        </Heading>
        {genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GridItem>
      <GridItem>
        <Heading size="sm" color="gray" marginBottom={1}>
          Publishers
        </Heading>
        {publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GridItem>
    </Grid>
  );
}

export default GameAttributes;
