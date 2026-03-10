import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  selectedPlatformId: number;
  onSelectPlatform: (platformId: number) => void;
}

function PlatformSelector({ onSelectPlatform, selectedPlatformId }: Props) {
  const { data: platforms, error, isLoading } = usePlatforms();
  const { selectedPlatformName } = usePlatform(selectedPlatformId);

  // const selectedPlatformName = platforms.results.find(
  //   (platform) => platform.id == selectedPlatform,
  // )?.name;

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatformName || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform.id)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
