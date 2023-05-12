import { FormControl, Input, Box, IconButton } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { useSearchStore } from "../../store/store";
import { searchByTextSelector } from "modules/Recorder/store/selectors";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const SearchForm = () => {
  const searchByText = useSearchStore(searchByTextSelector);
  const [query, setQuery] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    searchByText(query);
  };

  const onInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const clearForm = () => {
    setQuery("");
  };

  return (
    <Box position="relative">
      <Form onSubmit={onFormSubmit}>
        <FormControl>
          <Input
            pl="35px"
            type="text"
            name="query"
            placeholder="Type name of lyrics..."
            autoComplete="false"
            onChange={onInputChange}
            value={query}
          />
        </FormControl>
        <IconButton
          aria-label="Search"
          type="submit"
          position="absolute"
          zIndex={3}
          top="50%"
          transform="translateY(-50%)"
          bg="transparent"
          icon={<AiOutlineSearch size="20" />}
          style={{
            ":hover": {
              backgroundColor: "transparent",
            },
          }}
        />
        {query && (
          <IconButton
            onClick={clearForm}
            aria-label="Search"
            type="button"
            position="absolute"
            zIndex={3}
            right="5px"
            top="50%"
            transform="translateY(-50%)"
            bg="transparent"
            icon={<AiOutlineClose size="20" />}
            style={{
              ":hover": {
                backgroundColor: "transparent",
              },
            }}
          />
        )}
      </Form>
    </Box>
  );
};

export { SearchForm };
