import React, { useState } from 'react'
import { Container, Input, Flex, Button, StackDivider, VStack, Grid, FormControl, Text } from '@chakra-ui/react'
import useInput from '../hooks/useInput'
import axios from 'axios';
import ProductCard from './ProductCard';

const Search = () => {
    const search = useInput();
    const [typeOfSearch, setTypeOfSearch] = useState("name");
    const [products, setProducts] = useState([]);
    const searchName = () => setTypeOfSearch("name");
    const searchCategory = () => setTypeOfSearch("category");
    const searchDescription = () => setTypeOfSearch("description");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
        .get(`http://localhost:3001/api/products/search/${typeOfSearch}/${search.value}`)
        .then((res) => setProducts(res.data))
        .catch(error => console.log(error))
    }

    return (
        <Container maxW={"7xl"}>
            <Text fontSize={"lg"}>Type of search</Text>
            <Button onClick={() => searchName()} display={{ base: "none", md: "inline-flex" }} m={5} mr={4} fontSize={"sm"} fontWeight={600} color={"black"} bg={"#D4B742"} hover={{ bg: "#D4B742" }}>
                Name
            </Button>

            <Button onClick={() => searchCategory()} display={{ base: "none", md: "inline-flex" }} m={5} mr={4} fontSize={"sm"} fontWeight={600} color={"black"} bg={"#D4B742"} hover={{ bg: "#D4B742" }}>
                Category
            </Button>

            <Button onClick={() => searchDescription()} display={{ base: "none", md: "inline-flex" }} m={5} mr={4} fontSize={"sm"} fontWeight={600} color={"black"} bg={"#D4B742"} hover={{ bg: "#D4B742" }}>
                Description
            </Button>

            <VStack divider={<StackDivider borderColor='gray.200' />} spacing={4} align='center' justify={'center'}>
            <form onSubmit={handleSubmit}>
                <FormControl id="search">
                <Input {...search} type="text" placeholder={`instrument ${typeOfSearch}`} size='lg' w="100"/>
                </FormControl>
                <Button type='submit' bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500', }} width='100%'>Search</Button>
            </form>

            <Flex width="100%" align="center" justify="center" >
                <Grid p="3" w="100%" templateColumns={["repeat(4,5fr)", "repeat(3,3fr)"]} gap={6} >
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product}/>
                        ))}
                </Grid>
            </Flex>
            </VStack>
        </Container>
    )
}

export default Search;
