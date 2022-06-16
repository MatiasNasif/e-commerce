import { Flex, Stack, SimpleGrid, useColorModeValue, chakra, WrapItem, Button, Link } from "@chakra-ui/react";
import ItemCart from "./ItemCart"
import axios from "axios";
import { useState } from "react";

const Cart = () => {
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");

  const [products, setProducts] = useState([])

  const cart = localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : {}

  axios.get(`http://localhost:3001/api/carts/${cart.id}`)
    .then(res => setProducts(res.data[0].products))

  return (
    <Flex w="full" bg="#edf3f8" _dark={{ bg: "#3e3e3e", }} p={10} alignItems="center" justifyContent="center">
      <Stack direction={{ base: "column", }} w="full" bg={{ md: bg, }} shadow="lg" >
        <Flex direction={{ base: "row", md: "column", }} bg={dataColor} >
          <SimpleGrid textTransform="uppercase" bg={bg2} color={"gray.500"} fontSize="md" fontWeight="hairline" spacingY={4} columns={{ base: 1, md: 4, }} w="full" py={2} px={150} >
            <span>Products</span>
          </SimpleGrid>
        </Flex>

        {products.map((product, i) => {
          return (
            <>
              <ItemCart key={i} product={product} />
            </>
          );
        })}
        <chakra.span>
          TOTAL: $ {products.reduce((a, b) => { a += b.price; return a }, 0)}
        </chakra.span>

        <WrapItem justify={{ md: "end", }}>
          <Link href='https://www.plataforma5.la/ar/online' isExternal>
            <Button colorScheme='whatsapp'>Purchase on Whatsapp</Button>
          </Link>
        </WrapItem>

      </Stack>
    </Flex>
  );
}

export default Cart;