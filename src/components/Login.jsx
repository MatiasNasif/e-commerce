import { Flex, Box, FormControl, FormLabel, Input, Stack, Button, Heading, useColorModeValue } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux'
import { userLogin } from '../store/user';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const email = useInput();
  const password = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({
      email: email.value,
      password: password.value,
    }))
      .then(() => navigate("/"))
  }

  return (
    <Flex minH={'50vh'} align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box rounded={'lg'} bg={useColorModeValue('white', 'gray.700')} boxShadow={'lg'} p={8}>
            <Stack spacing={4}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input {...email} type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input {...password} type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Button type='submit' bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}

export default Login;