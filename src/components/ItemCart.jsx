import { chakra, SimpleGrid } from "@chakra-ui/react";

const ItemCart = ({ product }) => {

  return (
    <>
      <SimpleGrid spacingY={4} columns={{ base: 1, md: 4, }} w="full" py={2} px={150} fontWeight="hairline" >
        <chakra.span noOfLines={2}>{product.name}</chakra.span>
        <chakra.span>
          U: 1
        </chakra.span>
        <chakra.span>
          Price: $ {product.price}
        </chakra.span>
      </SimpleGrid>
    </>
  )
}

export default ItemCart;