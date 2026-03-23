import { useState } from "react";
import { Text, Button } from "@chakra-ui/react";

interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [expand, setExpand] = useState(false);

  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expand ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        fontWeight="bold"
        colorScheme="yellow"
        onClick={() => setExpand(!expand)}
        marginLeft={1}
      >
        {expand ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
