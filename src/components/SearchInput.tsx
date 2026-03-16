import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";

function SearchInput() {
  const setSearchValue = useGameQueryStore((store) => store.setSearchValue);
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) setSearchValue(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
