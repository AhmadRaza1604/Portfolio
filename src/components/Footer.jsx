import React from 'react';
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

const Footer = () => {
  const fontSizeText = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });
  const currentYear = new Date().getFullYear();
  return (
    <Box
      id="skills"
      color={useColorModeValue('gray.700', 'gray.300')}
      bg={useColorModeValue('gray.100', 'gray.800')}
      px={{ base: 4, md: 16 }}
      py={{ base: 3, md: 6 }}
    //   pb={{ base: 4, md: 8 }}
      width="100%"
      zIndex="0"
    >
    <Flex justify={'center'} textAlign={'center'}>
      <Text fontSize={fontSizeText}>&copy; {currentYear} | Developed by Ahmad Raza</Text>
    </Flex>
    </Box>
  );
};

export default Footer;
