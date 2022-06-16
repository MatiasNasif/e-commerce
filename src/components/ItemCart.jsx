import { Flex, chakra, SimpleGrid, Button } from "@chakra-ui/react";

const ItemCart = ({ product }) => {
  return (
    <>
      <SimpleGrid
        spacingY={4}
        columns={{
          base: 1,
          md: 4,
        }}
        w="full"
        py={2}
        px={150}
        fontWeight="hairline"
      >
        <chakra.span noOfLines={2}>{product.name}</chakra.span>
        <chakra.span>
          U: 1 {/* {product.stock} */}
        </chakra.span>
        <chakra.span>
          Price: $ {product.price}
        </chakra.span>
        <Flex justify={{ md: "end", }}>
          <Button variant="solid" colorScheme="gray" size="sm">
            X
          </Button>
        </Flex>
      </SimpleGrid>
    </>
  )
}

export default ItemCart;