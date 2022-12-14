import { Box, Container, Stack, Text, Image, Flex, VStack, Button, Heading, SimpleGrid, StackDivider, useColorModeValue, List, ListItem, } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartToUser, addItem } from '../store/cart';

const ItemProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [product, setProduct] = useState([]);

  const cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : {}

  const user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : {}

  const addToCartHandler = () => {

    dispatch(addItem({ cartId: cart.id, productId: id }))
    if (user.id) dispatch(cartToUser({ cartId: cart.id, userId: user.id }))
    navigate('/cart')
  }
  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
        <Flex>
          <Image rounded={"md"} alt={"product image"} src={product.img_uno} fit={"cover"} align={"center"} w={"100%"} h={{ base: "100%", sm: "400px", lg: "500px" }} />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "4xl" }} >
              {product.name}
            </Heading>
            <Text color={useColorModeValue("gray.900", "gray.400")} fontWeight={300} fontSize={"3xl"}  >
              $ {product.price}
            </Text>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={"column"}
            divider={<StackDivider borderColor={useColorModeValue("gray.200", "gray.600")} />}  >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"m"} noOfLines={4}>
                {product.description}
              </Text>
            </VStack>
          </Stack>

          {product.stock ? (
            <>
              <Box>
                <Text fontSize={{ base: "16px" }} color={"black.500"} fontWeight={"500"} textTransform={"uppercase"} mb={"-8"} >
                  Stock
                </Text>
              </Box>
              <SimpleGrid>
                <List spacing={2} >
                  <ListItem >{product.stock}</ListItem>
                </List>
              </SimpleGrid>
              <Button onClick={addToCartHandler} ounded={"none"} w={"full"} mt={8} size={"lg"} py={"7"} color={"black.50"} bg={"gray.50"} colorScheme='orange' variant='outline' textTransform={"uppercase"} _hover={{ transform: "translateY(5px)", boxShadow: "lg", }} >
                Add to cart
              </Button>
            </>
          ) : (
            <>
              <Button onClick={addToCartHandler} rounded={"none"} w={"full"} mt={8} size={"lg"} py={"7"} color={"black.50"} bg={"gray.50"} colorScheme='orange' textTransform={"uppercase"} disabled >
                Out of Stock
              </Button>
            </>
          )}
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ItemProduct;