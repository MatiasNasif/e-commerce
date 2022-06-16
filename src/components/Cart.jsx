import { Flex, Stack, SimpleGrid, useColorModeValue, chakra, WrapItem, Button, Link } from "@chakra-ui/react";
import ItemCart from "./ItemCart"

//solo a modo de prueba
import data from "../utils/fake_api.json"
import { Link as ReactRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { killCart } from '../store/cart';


  


const Cart = () => {
  const dispatch = useDispatch();
  const dataColor = useColorModeValue("white", "gray.800");
  const bg = useColorModeValue("white", "gray.800");
  const bg2 = useColorModeValue("gray.100", "gray.700");

  const killHandler = () => {
    dispatch(killCart())
  }

  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={10}
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
            textTransform="uppercase"
            bg={bg2}
            color={"gray.500"}
            fontSize="md"
            fontWeight="hairline"
            spacingY={4}
            columns={{
              base: 1,
              md: 4,
            }}
            w="full"
            py={2}
            px={150}
          >
            <span>Products</span>

          </SimpleGrid>
        </Flex>

        {data.map((product) => {
          return (
            <ItemCart key={product.id} product={product} />
          );
        })}
        <chakra.span>
          TOTAL: $ 6.179.32
        </chakra.span>

        <WrapItem justify={{ md: "end", }}>
        <Link href='https://www.plataforma5.la/ar/online' isExternal>
          <Button colorScheme='whatsapp'>Purchase on Whatsapp</Button>
          </Link>
        </WrapItem>
        <Button
            onClick={killHandler}
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            remove cart
          </Button>

      </Stack>
    </Flex>
  );

}

export default Cart;