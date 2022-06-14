import { Box, Image, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link, Link as ReactRouter } from "react-router-dom";

const ProductCard = ({ product }) => {
    console.log(product)
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Link to={"/products/" + product.id} as={ReactRouter}>
                 <Image src={product.img} />
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
                    $ {product.price}
                </Box>
                <Button value={product}
                    colorScheme='yellow' variant='outline' w={[55, 100]} fontSize='sm'>
                    Add to Cart
                </Button>

            </Box>
        </Box>
    )
}

export default ProductCard;
