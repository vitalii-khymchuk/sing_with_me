import { FormControl, Input, Box, IconButton } from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { useSearchStore } from "../../store/store";
import { searchByTextSelector } from "modules/Recorder/store/selectors";
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
  const searchByText = useSearchStore(searchByTextSelector);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    searchByText(query);
    e.target.reset();
  };

  return (
    <Box position="relative">
      <Form onSubmit={onFormSubmit}>
        <FormControl>
          <Input
            type="text"
            name="query"
            placeholder="Type name of lyrics..."
            autoComplete="false"
          />
        </FormControl>
        <IconButton
          aria-label="Search"
          type="submit"
          position="absolute"
          zIndex={3}
          right="5px"
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
      </Form>
    </Box>
  );
};

export { SearchForm };
