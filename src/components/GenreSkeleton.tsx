import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";

function GenreSkeleton() {
  return (
    <List>
      <ListItem>
        <HStack align="center" spacing={5} paddingY={2}>
          <SkeletonCircle size="32px" />
          <Skeleton height="32px" width="140px" />
        </HStack>
      </ListItem>
    </List>
  );
}

export default GenreSkeleton;
