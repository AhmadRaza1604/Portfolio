import React from 'react';
import {
  Box,
  Button,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Image,
  Text,
  Link,
} from '@chakra-ui/react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
  const imagew = useBreakpointValue({ base: 'full'});
  const imageh = useBreakpointValue({ base: 200, md: 250, lg: 270 });
  const fontSizeTitle = useBreakpointValue({ base: 'lg', md: 'xl', lg: '2xl' });
  const fontSizeText = useBreakpointValue({ base: 'xs', md: 'sm', lg: 'md' });

  return (
    <>
      <Box
        id='work'
        bg={useColorModeValue('gray.100', 'gray.800')}
        px={{ base: 4, md: 16 }}
        height='110%'
        pt={{ base: 6, md: 10 }}
        pb={24}
        width="100%"
        justifyContent='center'
        alignItems='center'
        zIndex="0"
      >
        <Flex justify={'center'} mb={10}>
          <Button rounded={'xl'} size={{base:'sm', md:'md', lg:'lg'}} bg={useColorModeValue('gray.300', 'gray.600')}>Work</Button>
        </Flex>

<Box w='100%'   align={'center'}>
        <Flex w='90%' mb='6'  direction={{base:'column', lg:'row'}} h='fit-content' shadow={'xl'} rounded={'3xl'}>
          <Box w={{base:'100%', lg:'50%'}} bg={useColorModeValue('gray.200','gray.600')} roundedTopLeft='xl' roundedBottomLeft={{base:'none', lg:'xl'}} roundedTopRight={{base:'xl', lg:'none'}} p={{base:'4',md:'8',lg:'12'}}>
            <Link href='https://www.swipelover.com' isExternal mt={'4'} fontSize={'lg'} textColor={useColorModeValue('gray.600','gray.400')}>
            <Image src='/files/SwipeLover.png'  rounded='xl' w={imagew} h={imageh} _hover={{transform:'scale(1.05)'}} transitionDuration={'0.5s'}/>
            </Link>
          </Box>
          <Box w={{base:'100%', lg:'50%'}} bg={useColorModeValue('gray.100','gray.700')} textAlign={'start'} roundedBottomRight='xl' roundedTopRight={{base:'none', lg:'xl'}} roundedBottomLeft={{base:'xl', lg:'none'}}  p={{base:'4',md:'8',lg:'12'}}>
            <Text fontSize={fontSizeTitle}>Swipe Lover</Text>
            <Text fontSize={fontSizeText}>Landing Page of a platform Swipe Lover which is a secure, AI-powered app where you can meet authentic connections and enjoy live interactions. </Text>
            <Flex gap='2' flexWrap='wrap' direction='row' my='6' >
              <Text bg={useColorModeValue('gray.300', 'gray.600')} rounded='2xl' px='4' >ReactJS</Text>
              <Text bg={useColorModeValue('gray.300', 'gray.600')} rounded='2xl' px='4' >Chakra UI</Text>
            </Flex>

            <Link href='https://www.swipelover.com' isExternal mt={'4'} fontSize={'lg'} textColor={useColorModeValue('gray.600','gray.400')}>
            <FaExternalLinkAlt/>
            </Link>

          </Box>
        </Flex>
        <Flex w='90%' direction={{base:'column', lg:'row'}} h='fit-content' shadow={'xl'} rounded={'xl'}>
          <Box order={{base:2, lg:1}}  w={{base:'100%', lg:'50%'}} bg={useColorModeValue('gray.100','gray.700')} textAlign={'start'} roundedTopLeft={{base:'none', lg:'xl'}} roundedBottomLeft='xl' roundedBottomRight={{base:'xl', lg:'none'}}  p={{base:'4',md:'8',lg:'12'}}>
            <Text fontSize={fontSizeTitle}>TourToPk</Text>
            <Text fontSize={fontSizeText}>Tourism Platform for Tourists in Pakistan, With Places Info, Hotels Booking, Tour Packages and much more. Also Platform for Hotel Managers and Tour Operators to display there rooms and packages. </Text>
            <Flex gap='2' flexWrap='wrap' direction='row' my='6' >
              <Text bg={useColorModeValue('gray.300', 'gray.600')} rounded='2xl' px='4' >ReactJS</Text>
              <Text bg={useColorModeValue('gray.300', 'gray.600')} rounded='2xl' px='4' >ExpressJS</Text>
              <Text bg={useColorModeValue('gray.300', 'gray.600')} rounded='2xl' px='4' >NodeJS</Text>
              <Text bg={useColorModeValue('gray.300', 'gray.600')} rounded='2xl' px='4' >MongoDB</Text>
              <Text bg={useColorModeValue('gray.300', 'gray.600')} rounded='2xl' px='4' >Bootstrap</Text>
            </Flex>

            <Link href='https://tourtopk.vercel.app/' isExternal mt={'4'} fontSize={'lg'} textColor={useColorModeValue('gray.600','gray.400')}>
            <FaExternalLinkAlt/>
            </Link>

          </Box>
          <Box order={{base:1,lg:2}} w={{base:'100%', lg:'50%'}} bg={useColorModeValue('gray.200','gray.600')} roundedBottomRight={{base:'none', lg:'xl'}} roundedTopRight='xl' roundedTopLeft={{base:'xl', lg:'none'}}p={{base:'4',md:'8',lg:'12'}}>
            
            <Link href='https://tourtopk.vercel.app/' isExternal mt={'4'} fontSize={'lg'} textColor={useColorModeValue('gray.600','gray.400')}>
            <Image src='/files/TourToPk.png'  rounded='xl' w={imagew} h={imageh} _hover={{transform:'scale(1.05)'}} transitionDuration={'0.5s'}/>
            </Link>

          </Box>
        </Flex>
</Box>
        
      </Box>
    </>
  );
};

export default Work;
