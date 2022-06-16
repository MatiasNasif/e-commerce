//Grilla de Categorias
import { Flex, Grid } from "@chakra-ui/react";
import fakeCategory from "../../utils/fake_category.json";
import React, { useState, useEffect } from "react";
import CardCategory from "./CategoryCard";
import AddCategory from "./AddCategory";
//import axios from "axios";

const CategoryProduct = () => {
  const [category, setCategory] = useState([]); // front
  useEffect(
    () => setCategory(fakeCategory),
    /* axios
      .get("/api/categories")
      .then((res) => res.data)
      .then((category) => setCategory(category)) */ // back
    []
  );

  return (
    <>
      <Flex width="100%" align="center" justify="center">
        <Grid
          p="5"
          w="100%"
          templateColumns={["repeat(2,1fr)", "repeat(4,1fr)"]}
          gap={6}
        >
          {category.map((categoria) => (
            <CardCategory propCat={categoria} />
          ))}
        </Grid>
      </Flex>

      <AddCategory />
    </>
  );
};

export default CategoryProduct;