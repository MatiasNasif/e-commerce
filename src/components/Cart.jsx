import { Box, Flex, chakra, Link, Image, Stack, SimpleGrid, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as ReactRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import data from "../utils/fake_api.json"
import ItemCart from "./ItemCart"

function Cart() {

  const cart = useSelector((state)=>state.cart)
  console.log("CART EN MODELO CART", cart)

   
    const dataColor = useColorModeValue("white", "gray.800");
    const bg = useColorModeValue("white", "gray.800");
    const bg2 = useColorModeValue("gray.100", "gray.700");
    return (
      <Flex
        w="full"
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        alignItems="center"
        justifyContent="center"
      >
        <Stack
          direction={{
            base: "column",
          }}
          w="full"
          bg={{
            md: bg,
          }}
          shadow="lg"
        >
          <Flex
                direction={{
                  base: "row",
                  md: "column",
                }}
                bg={dataColor}
    
              >
                <SimpleGrid
                  spacingY={3}
                  columns={{
                    base: 1,
                    md: 3,
                  }}
                  w={{
                    base: 120,
                    md: "full",
                  }}
                  textTransform="uppercase"
                  bg={bg2}
                  color={"gray.500"}
                  py={{
                    base: 1,
                    md: 4,
                  }}
                  px={{
                    base: 2,
                    md: 10,
                  }}
                  fontSize="md"
                  fontWeight="hairline"
                >
                  <span>Products</span>
        
                </SimpleGrid>
                </Flex>

          {data.map((product) => {
            return (
              <ItemCart key={product.id} product={product}/>
            );
          })}
        </Stack>
      </Flex>
    );

}

export default Cart;