import { Box, Image, Text, Flex, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom"


const ProductCard = ({ product }) => {

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Link to={product.id}> <Image src={product.imagen_uno} /></Link>
            <Box p='6'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {product.nombre}
                </Box>

                <Box>
                    $ {product.precio}
                </Box>
                <Button>Add to Cart</Button>
            </Box>
        </Box>
    )
}

export default ProductCard;
