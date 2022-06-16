import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import { Link, Link as ReactRouter } from "react-router-dom";

const ProductCard = ({ product }) => {

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Link to={"/products/" + product.id} as={ReactRouter}>
                <Image src={product.img_uno} />
            </Link>
            <Box p='6'>
                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    noOfLines={1}
                >
                    {product.name}
                </Box>
                <Box>
                    $ {product.price.toFixed(2)}
                </Box>
            </Box>
        </Box>
    )
}

export default ProductCard;