import {
  HStack,
  Image,
  List,
  ListItem,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/gameQueryStore";
import GenreSkeleton from "./GenreSkeleton";

function GenreList() {
  const { data: genres, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const setGenreId = useGameQueryStore((store) => store.setGenreId);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return null;

  if (isLoading) {
    skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />);
  }

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      {isLoading &&
        skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}

      <List>
        {genres?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="6px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                fontWeight={genre.id == selectedGenreId ? "bold" : "normal"}
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
