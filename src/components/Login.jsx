import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';

export default function Login() {

  // VERIFICAR COMO HACER QUE CHAKRA TOME EL ONSUBMIT PARA EL FORM ASI FUNCIONA ESTE CODIGO
  // const navigate = useNavigate();
  // const email = useInput();
  // const password = useInput();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios
  //   .post("/api/login", {
  //     email: email.value,
  //     password: password.value,
  //   })
  //   .then((user) => {
  //     console.log("este es el user del login: ", user);
  //     return navigate(`/products`)
  //   })
  //   .catch(() => navigate("/404"));
  // }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        {/* <form onSubmit={handleSubmit}> */}
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
          onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input {...email} type="email"/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input {...password} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
        {/* </form> */}
        
      </Stack>
    </Flex>
  );
}