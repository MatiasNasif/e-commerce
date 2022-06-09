import { FormControl, FormLabel, Button, Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const AddCategory = () => {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    event.preventDefault();
    setInput(event.target.value);
  };
  //function onSubmit: pending

  console.log(input);
  return (
    <div>
      <h1>Add a new Category</h1>

      <Box>
        <FormControl id="nameCategory" isRequired onSubmit={""}>
          <FormLabel>Category name</FormLabel>
          <Input type="text" onChange={handleInput} value={input} />
          <Button
            loadingText="Submit"
            size="lg"
            bg={"blue.500"}
            color={"white"}
            _hover={{
              bg: "red.400",
            }}
          >
            Add
          </Button>
        </FormControl>
      </Box>
    </div>
  );
};

export default AddCategory;
