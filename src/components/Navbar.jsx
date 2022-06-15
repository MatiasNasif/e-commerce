// function Navbar() {
//   return (
//     <div className={style.navbar}>
//       <Link to="/"> <img src={logo} alt="Logo" /> </Link>
//       <Link to="/products" > <div> Products</div> </Link>
//       <Link to="/categories" > <div> Categories</div> </Link>
//       <Link to="/search" > <div> Search</div> </Link>
//       <Link to="/register" > <div> Register</div> </Link>
//       <Link to="/login" > <div> Login</div> </Link>
//       <Link to="/cart" >  <div> Cart</div> </Link>
//       <br></br>
//     </div>
//   )
// }
// export default Navbar;

import logo from "../utils/logo.jpg";
import products from "../utils/fake_api.json";
import { Link as ReactRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Box, Flex, Image, Text, IconButton, Button, extendTheme, Stack, Collapse, Icon, Popover, PopoverTrigger, PopoverContent, useColorModeValue, Link, Input, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";


export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("#1A1A1A", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align="center"
        // position="fixed"
        // w="100%"
        // as="header"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />

          {/* LOGO */}
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Box boxSize="80PX">
            {/* NO TOMA EL LINK PARA EL LOGO AL LANDING PAGE*/}

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

        {/* BOTONES REGISTER */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >

       <Link as={ReactRouter} to="/register">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"#D4B742"}
              bg={"#1A1A1A"}
              href={"#"}
              _hover={{
                bg: "#1A1A1A",
              }}
            >
              Sign up
            </Button>
          </Link>

          {/* BOTONES LOGIN  */}
          <Link as={ReactRouter} to="/login">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              color={"black"}
              bg={"#D4B742"}
              href={"#"}
              _hover={{
                bg: "#D4B742",
              }}
            >
              Log In
            </Button>
          </Link>

          {/* BOTONES - CART */}
          <Link as={ReactRouter} to="/cart">
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              variant="outline"
              color={"white"}
              href={"#"}
              _hover={{
                bg: "#D4B742",
              }}
            >
              <FaShoppingCart />
            </Button>
          </Link>

        </Stack>
      </Flex>

      {/* <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse> */}
    </Box>
  );
}

// PRODUCTOS - MARCAS
const DesktopNav = () => {
  const linkColor = useColorModeValue("white", "gray.200");
  const linkHoverColor = useColorModeValue("lightgrey", "white");
  const popoverContentBgColor = useColorModeValue("gray.100", "gray.800");
  
  // const theme = extendTheme({
  //   fonts: {
  //     body: `'Abel', sans-serif`,
  //   },
  // });

  // PRODUCTS Y BRANDS
  return (
    <Stack direction={"row"} spacing={2}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                as={ReactRouter}
                to={`/${navItem.label.toLowerCase()}`}
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"3xl"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
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
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

// ESTRUCTURA HACIA ABAJO
const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "#D4B742" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#D4B742"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue("white", "gray.800")}
//       p={4}
//       display={{ md: "none" }}
//     >
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? "#"}
//         justify={"space-between"}
//         align={"center"}
//         _hover={{
//           textDecoration: "none",
//         }}
//       >
//         <Text
//           fontWeight={600}
//           color={useColorModeValue("gray.600", "gray.200")}
//         >
//           {label}
//         </Text>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={"all .25s ease-in-out"}
//             transform={isOpen ? "rotate(180deg)" : ""}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//           align={"start"}
//         >
//           {children &&
//             children.map((child) => (
//               <Link key={child.label} py={2} href={child.href}>
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

const NAV_ITEMS = [
  {
    label: "Products",
    children: [
      {
        label: "Cuerdas",
      },
      {
        label: "Vientos",
      },
      {
        label: "Teclas",
      },
      {
        label: "Percusion",
      },
    ],
  },
  {
    label: "Category",
  },
];

