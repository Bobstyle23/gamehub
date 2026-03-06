import { Badge } from "@chakra-ui/react";

function CriticScore({ score }: { score: number }) {
  let color: string = "";
  if (score > 75) color = "green";
  else if (score > 60) color = "yellow";

  return (
    <Badge
      colorScheme={color}
      fontSize={"14px"}
      paddingX={2}
      borderRadius="2px"
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
