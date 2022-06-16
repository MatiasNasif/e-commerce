import React from 'react'
import { Link as ReactRouter } from "react-router-dom";
import { useNavigate } from 'react-router'
import { FaShoppingCart } from "react-icons/fa";
import { chakra, Box, Flex, Image, Text, IconButton, Button, Stack, Icon, Popover, PopoverTrigger, PopoverContent, useColorModeValue, Link, Input, useDisclosure, Center } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronRightIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.jpg";
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../store/user';
import { addCart } from '../store/cart';



export default function WithSubnavigation() {

  //console.log('CART ID ES', cart.id)
  

  const cart = localStorage.getItem('cart')
               ? JSON.parse(localStorage.getItem('cart'))
               : {}
  //const cart = useSelector((state) => state.cart)
  const user = localStorage.getItem('user')
               ? JSON.parse(localStorage.getItem('user'))
               : {}
  //const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  if (!cart.id) dispatch(addCart())

  const handleLogout = () => {
    dispatch(userLogout())
    .then(() => {
      localStorage.removeItem('user')
      return navigate("/")
    })
  }

  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex bg={useColorModeValue("#1A1A1A", "gray.800")} color={useColorModeValue("gray.600", "white")} minH={"60px"} py={{ base: 2 }} px={{ base: 4 }} borderBottom={1} borderStyle="solid" borderColor={useColorModeValue("gray.200", "gray.900")} align="center"  >
        <Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }} >
          <IconButton onClick={onToggle} icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />} variant={"ghost"} aria-label={"Toggle Navigation"} />

          {/* LOGO */}
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box boxSize="80PX">
            <Link to="/" as={ReactRouter}>
              <Image src={logo} alt="Good Vibes" />
            </Link>
          </Box>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        {/* BUSCADOR */}
        <Stack spacing={3} paddingRight="5">
          <Input placeholder="Search" size="sm" />
        </Stack>

        {/* BOTONES */}

        {user.id ? (
          <Stack
            flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
            {/* BOTON LOGOUT  */}
            <Link as={ReactRouter} to="/">
              <Button onClick={handleLogout} m={5} mr={0} display={{ base: "none", md: "inline-flex" }} fontSize={"sm"} fontWeight={600} color={"#D4B742"} bg={"#1A1A1A"} _hover={{ bg: "#1A1A1A" }}>
                LogOut
              </Button>
            </Link>
            {/* SALUDO  */}
            <Center w='150px' py='25px' >
              <Text fontSize='md' color='white' >Hi, {user.name}!</Text>
            </Center>

          </Stack>
        ) : (

          <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
            {/* BOTON REGISTER  */}
            <Link as={ReactRouter} to="/register">
              <Button display={{ base: "none", md: "inline-flex" }} m={5} mr={-5} fontSize={"sm"} fontWeight={600} color={"#D4B742"} bg={"#1A1A1A"} _hover={{ bg: "#1A1A1A" }}>
                Register
              </Button>
            </Link>

            {/* BOTON LOGIN  */}
            <Link as={ReactRouter} to="/login">
              <Button display={{ base: "none", md: "inline-flex" }} m={5} mr={4} fontSize={"sm"} fontWeight={600} color={"black"} bg={"#D4B742"} hover={{ bg: "#D4B742" }}>
                Log In
              </Button>
            </Link>
          </Stack>
        )}

        <Stack>

          {/* BOTON - CART */}
          <Link as={ReactRouter} to="/cart">
            <Button
              display={{ base: "none", md: "inline-flex" }} marginLeft='10px' fontSize={"sm"} fontWeight={600} variant="outline" color={"white"} _hover={{ bg: "#D4B742" }}>

              <FaShoppingCart />
              {/* CONDICIONAL PARA QUE SI NO HAY PRODUCTOS QUE NO LO MUESTRE */}
              <chakra.span
                pos="absolute"
                top="-1px"
                right="-1px"
                px={2}
                py={1}
                fontSize="xs"
                fontWeight="bold"
                lineHeight="none"
                color="red.100"
                transform="translate(50%,-50%)"
                bg="red.600"
                rounded="full"
              >
                2
                {/* NUMERO A CAMBIAR */}

              </chakra.span>

            </Button>
          </Link>

        </Stack>
      </Flex>
    </Box>
  );
}

// PRODUCTOS - MARCAS
const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("lightgrey", "white");
  const popoverContentBgColor = useColorModeValue("gray.100", "gray.800");

  // PRODUCTS Y BRANDS
  return (
    <Stack direction={"row"} spacing={2}>
      <Box>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link as={ReactRouter} to="/products" w='40px' fontSize={"2xl"} color={linkColor} _hover={{ textDecoration: "none", color: linkHoverColor }} >
              <Center w='150px' py='25px' >
                <h6>Products</h6>
              </Center>
            </Link>
          </PopoverTrigger>

          {/* {navItem.children && (
              <PopoverContent
                border={0}
                
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )} */}
        </Popover>
      </Box>
    </Stack>
  );
};

// ESTRUCTURA HACIA ABAJO
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link href={href} role={"group"} display={"block"} p={2} rounded={"md"} _hover={{ bg: useColorModeValue("pink.50", "gray.900") }} >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} _groupHover={{ color: "#D4B742" }} fontWeight={500} >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex transition={"all .3s ease"} transform={"translateX(-10px)"} opacity={0} _groupHover={{ opacity: "100%", transform: "translateX(0)" }} justify={"flex-end"} align={"center"} flex={1} >
          <Icon color={"#D4B742"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
