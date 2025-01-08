import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Links = ['About', 'Skills', 'Work', 'Contact'];

const NavLink = ({ children, to }) => {
  const hoverColor = useColorModeValue('gray.900', 'gray.100'); // Adjust hover color
  return (
    <ScrollLink
      to={to}
      smooth={true}
      duration={500}
      spy={true}
      offset={-70} 
    >
      <Box
        px={2}
        py={1}
        fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
        fontWeight={'semibold'}
        rounded={'md'}
        color={useColorModeValue('gray.600', 'gray.400')}
        _hover={{
          textDecoration: 'none',
          cursor: 'pointer',
          color: hoverColor,
        }}
      >
        {children}
      </Box>
    </ScrollLink>
  );
};

const Navbar = () => {
  const hoverColor = useColorModeValue('gray.900', 'gray.100');
  const hoverBG = useColorModeValue('gray.700', 'gray.300');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=16DtVhz2EtUQpuaNjbgvZZxFOHVfle8Lz'; // Replace with your file's direct download link
    link.download = 'Ahmad_Raza_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  

  return (
    <>
      <Box 
        bg={useColorModeValue('rgba(249, 250, 251, 0.6)', 'rgba(23, 24, 37, 0.6)')} 
        backdropFilter="blur(15px)" px={{ base: 4, md: 8, lg: 16 }} position="fixed" width="100%" zIndex="100 ">
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Flex h={{ base: 12, md: 16, lg: 20 }} alignItems={'center'}>
            <HStack spacing={8} alignItems={'center'}>
              <Box
                fontWeight="bold"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                cursor="pointer"
                onClick={() => scroll.scrollToTop()} // Scroll to top
              >
                {'<AR/>'}
              </Box>
            </HStack>
          </Flex>

          <Flex h={{ base: 12, md: 16, lg: 20 }} alignItems={'center'}>
            <IconButton
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link} to={link.toLowerCase()}>{link}</NavLink>
              ))}
            </HStack>
            <Flex alignItems={'center'} display={{ base: 'none', md: 'flex' }}>
              <Button onClick={toggleColorMode} size={{ base: 'sm', md: 'md', lg: 'lg' }}
                mr={4} bg={(null)}
                color={useColorModeValue('gray.600', 'gray.400')}
                _hover={{
                  color: hoverColor
                }}
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                onClick={handleDownloadCV} // Trigger download on click
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
                bg={useColorModeValue('gray.900', 'gray.100')}
                color={useColorModeValue('gray.100', 'gray.900')}
                _hover={{
                  bg: hoverBG
                }}
              >
                Download CV
              </Button>
            </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={2} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={3}>
              {Links.map((link) => (
                <NavLink key={link} to={link.toLowerCase()}>{link}</NavLink>
              ))}
              <Button onClick={toggleColorMode} size={{ base: 'sm', md: 'md', lg: 'lg' }}
                w={'fit-content'}
              >
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
              <Button
                onClick={handleDownloadCV} // Trigger download on click
                w={'fit-content'}
                size={{ base: 'sm', md: 'md', lg: 'lg' }}
              >
                Download CV
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
