import { Box, Flex, chakra, Link, Image, Stack, SimpleGrid, Button, useColorModeValue } from "@chakra-ui/react";

const ItemCart = ({product}) => {
  return (
    <SimpleGrid
    spacingY={3}
    columns={{
      base: 1,
      md: 3,
    }}
    w="full"
    py={2}
    px={30}
    fontWeight="hairline"
  >
    <chakra.span noOfLines={2}>{product.name}</chakra.span>
    <chakra.span
      textOverflow="ellipsis"
      overflow="hidden"
      whiteSpace="nowrap"
    >
      {product.stock}
    </chakra.span>
    <Flex
      justify={{
        md: "end",
      }}
    >
      <Button variant="solid" colorScheme="red" size="sm">
          X
      </Button>
    </Flex>
  </SimpleGrid>
  )
}

export default ItemCart