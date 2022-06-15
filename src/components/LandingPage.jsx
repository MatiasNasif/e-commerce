import { Center, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import Products from './Products';

const LandingPage = () => {
  return (
    <>
      <Image
        my='-1'
        objectFit='cover'
        src='https://bairesrocks.vteximg.com.br/arquivos/ids/237295/ibanez_banner_web.jpg?v=637902022830000000'
        alt='Good Vibes'
      />

      <Center>
        <Heading size='lg' fontSize='50px' m='45px'>Instrumentos Músicales</Heading>
      </Center>
      <Products />
    </>
  );
}

export default LandingPage