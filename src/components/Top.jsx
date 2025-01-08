import React from 'react';
import {
  Box,
  Flex,
  Stack,
  Image,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';
import { FaGithub, FaGoogle, FaLinkedinIn } from 'react-icons/fa6';
import Person from '../utils/images/AhmadRaza.jpg';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Top = () => {
  const fontSizeHeading = useBreakpointValue({ base: '3xl', md: '5xl', lg: '6xl' });
  const fontSizeText = useBreakpointValue({ base: 'sm', md: 'md', lg: 'xl' });
  const imageSize = useBreakpointValue({ base: 200, md: 250, lg: 300 });

  return (
    <>
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        px={{ base: 6, md: 16 }}
        height='100%'
        py={{ base: 20, md: 32 }}
        width="100%"
        // zIndex="0"
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}  // Vertical stack on mobile, row on larger screens
          spacing={{ base: 10, md: 16 }}
        >
          {/* Left Section: Text */}
          <Box width={{ base: '100%', md: '85%' }} order={{ base: 2, md: 1 }}>
            <Flex h={20} alignItems={'center'} justifyContent={{base:'center', lg:'start'}}>
              <Text fontSize={fontSizeHeading} fontWeight={'bold'} >
                Hi, I'm Ahmad Raza 👋
              </Text>
            </Flex>

            <Flex alignItems={'start'} justifyContent={'start'}>
              <Text
              color={useColorModeValue('gray.700', 'gray.300')}
                fontSize={fontSizeText}
                mt={{ base: 2, md: 8, lg:10 }}
                fontWeight={'semibold'}
                textAlign={'justify'}
              >
                I'm a full stack developer (React.js & Express.js) with a focus on
                creating exceptional digital experiences that are fast, accessible, visually appealing, and
                responsive. Even though I have been creating web applications
                for over a year, I still love it as if it was something new.
              </Text>
            </Flex>

            <Flex py={{base:2, md:3,lg:4}} alignItems={'center'} justifyContent={{base:'center', lg: 'start'}}>
              <Text fontSize={fontSizeText} mt={2}
                            color={useColorModeValue('gray.700', 'gray.300')}>
                <FaMapMarkerAlt />
              </Text>
              <Text
                fontSize={fontSizeText}
                mt={2}
                ml={2}
                color={useColorModeValue('gray.700', 'gray.300')}
                fontWeight={'semibold'}
              >
                Lahore, Pakistan
              </Text>
            </Flex>

            <Flex py={{base:3, md:4,lg:5}} alignItems={'center'} justifyContent={{base:'center', lg: 'start'}}>
              <Link fontSize={fontSizeText} mr={3}
              href='https://github.com/ahmadraza1604'
                            color={useColorModeValue('gray.700', 'gray.300')}
                            isExternal
              >
                <FaGithub />
              </Link>
              <Link fontSize={fontSizeText} mr={3}
                            color={useColorModeValue('gray.700', 'gray.300')}
                            href='https://www.linkedin.com/in/ahmadraza1604/'
                            isExternal
              >
                <FaLinkedinIn />
              </Link>
              <Link fontSize={fontSizeText}
                            color={useColorModeValue('gray.700', 'gray.300')}
                            href='mailto:ahmadraza16042002@gmail.com'
                            isExternal
              >
                <FaGoogle />
              </Link>
            </Flex>
          </Box>

          {/* Right Section: Image */}
          <Box width={{ base: '100%', md: '40%' }} justifyContent={'center'} order={{ base: 1, md: 2 }}>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Image
                src={Person}
                height={imageSize}
                alt='Profile'
                rounded={'3xl'}
              />
            </Flex>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Top;
