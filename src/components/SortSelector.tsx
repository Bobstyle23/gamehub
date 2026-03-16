import { Menu, Button, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";

export type SortOrder = {
  value: string;
  label: string;
};

function SortSelector() {
  const sortOrder = useGameQueryStore((store) => store.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((store) => store.setSortOrder);
  const sortOrders: SortOrder[] = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date Added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Released Date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average Rating",
    },
  ];

  const currentSortOrder =
    sortOrders.find((order) => order.value == sortOrder)?.label ||
    "Order by: Relevance";

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentSortOrder}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
