import { Box, Image, Button } from '@chakra-ui/react';
import React, { useState } from 'react';


const ProductCard = ({ product }) => {

    const [products, setProduct] = useState()

    // ESTE FUNCIONAMIENTO TAMBIÉN DEBERIA IR AL DETALLE DEL PRODUCTO INDIVIDUAL
    const handleAddToCart = (e) => {
        setProduct(e.target.event);
    }

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
                {/* RETORNA UNDEFINED PORQUE NO TIENE DE DONDE TOMAR INFORMACION */}
                <Button onClick={handleAddToCart} value={product}
                    colorScheme='yellow' variant='outline' w={[55, 100]} fontSize='sm'>
                    Add to Cart
                </Button>

            </Box>
        </Box>
    )
}

export default ProductCard;
