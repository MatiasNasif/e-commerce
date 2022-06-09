import { Flex, Grid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import products from "../utils/fake_api.json"

const Products = () => {

  return (
    <Flex width="100%" align="center" justify="center" >
      <Grid p="5" w="100%"
      templateColumns={["repeat(2,1fr)", "repeat(4,1fr)"]} gap={6} >
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </Grid>
    </Flex>


  )


}
export default Products;


