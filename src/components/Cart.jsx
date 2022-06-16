import { Box, Flex, chakra, Link, Image, Button, useColorModeValue } from "@chakra-ui/react";
import { Link as ReactRouter } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { killCart } from '../store/cart';


function Cart() {
  const dispatch = useDispatch();

  const killHandler = () => {
    dispatch(killCart())
  }

  return (
    <div>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          mx="auto"
          px={8}
          py={4}
          rounded="lg"
          shadow="lg"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          maxW="2xl"
        >
          <Flex justifyContent="space-between" alignItems="center">
            <chakra.span
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Mar 10, 2019
            </chakra.span>
            <Link
              px={3}
              py={1}
              bg="gray.600"
              color="gray.100"
              fontSize="sm"
              fontWeight="700"
              rounded="md"
              _hover={{
                bg: "gray.500",
              }}
            >
              Design
            </Link>
          </Flex>

          <Box mt={2}>
            <Link
              fontSize="2xl"
              color="gray.700"
              _dark={{
                color: "white",
              }}
              fontWeight="700"
              _hover={{
                color: "gray.600",
                _dark: {
                  color: "gray.200",
                },
                textDecor: "underline",
              }}
            >
              Accessibility tools for designers and developers
            </Link>
            <chakra.p
              mt={2}
              color="gray.600"
              _dark={{
                color: "gray.300",
              }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
              enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
              ratione libero!
            </chakra.p>
          </Box>

          <Flex justifyContent="space-between" alignItems="center" mt={4}>
            <Link
              color="brand.600"
              _dark={{
                color: "brand.400",
              }}
              _hover={{
                textDecor: "underline",
              }}
            >
              Read more
            </Link>

            <Flex alignItems="center">
              <Image
                mx={4}
                w={10}
                h={10}
                rounded="full"
                fit="cover"
                display={{
                  base: "none",
                  sm: "block",
                }}
                src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
                alt="avatar"
              />
              <Link
                color="gray.700"
                _dark={{
                  color: "gray.200",
                }}
                fontWeight="700"
                cursor="pointer"
              >
                Khatab wedaa
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Flex>;
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
    </div>
  );
}

export default Cart;