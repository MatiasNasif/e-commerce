// Card de Categorias 
import { Box, Button } from '@chakra-ui/react';

import React from 'react'

const CategoryCard = ({propCat}) => {
  return (
    <Box maxW='sm' borderWidth='10px' borderRadius='lg' overflow='hidden'>
            
                <Box>
                    {propCat.name}
                </Box>
                <Button>Go</Button>
            
    </Box> )

}

export default CategoryCard;

