import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../stores/gameQueryStore";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const setSearchValue = useGameQueryStore((store) => store.setSearchValue);
  const searchRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) setSearchValue(searchRef.current.value);
        navigate("/");
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
