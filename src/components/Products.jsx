import { Flex, Grid } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {

  const [products, setProduct] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3001/api/products")
    .then((res) => setProduct(res.data))
    .catch(error => console.log(error))
  }, [])

  return (
    <Flex width="100%" align="center" justify="center" >
      <Grid p="3" w="100%"
      templateColumns={["repeat(4,5fr)", "repeat(3,3fr)"]} gap={6} >
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </Grid>
    </Flex>
  )
}

export default Products;


