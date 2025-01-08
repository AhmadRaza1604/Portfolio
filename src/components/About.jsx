import React from 'react';
import {
  Box,
  Button,
  Flex,
  Stack,
  Image,
  Text,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

const About = () => {
  const imageh = useBreakpointValue({ base: 200, md: 300, lg: 470 });
  const fontSizeTitle = useBreakpointValue({ base: 'xl', md: '2xl', lg: '3xl' });
  const fontSizeText = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

  return (
    <>
      <Box
        id='about'
        bg={useColorModeValue('gray.100', 'gray.800')}
        px={{ base: 4, md: 16 }}
        pt={{ base: 6, md: 10 }}
        pb={4}
        width="100%"
        zIndex="0"
      >
        <Flex justify={'center'} mb={10}>
          <Button rounded={'full'} size={{base:'sm', md:'md', lg:'lg'}} bg={useColorModeValue('gray.300', 'gray.600')}>About Me</Button>
        </Flex>
        
        <Stack
          direction={{ base: 'column', md: 'row' }}
        >
          {/* Image Section */}
          <Box width={{ base: '100%', md: '50%' }} justifyContent={'center'}>
            <Flex justifyContent={'center'} alignItems={'center'} w={{base:'full', lg:'fit-content'}}>
              <Image
                src={'/files/AR2.jpg'}
                
                height={imageh}
                mt={'3'}
                shadow={'2xl'}
                alt='Profile'
                rounded={'lg'}
              />
            </Flex>
          </Box>

          {/* Text Section */}
          <Box width={{ base: '100%', md: '50%' }} color={useColorModeValue('gray.700', 'gray.300')}          >
              <Text pb={{base:1, md:2, lg:3}} fontSize={fontSizeTitle} fontWeight={'bold'} textAlign={{base:'center', lg:'start'}}>
                Want to Know about me?
              </Text>
            
              <Text
                fontSize={fontSizeText}
                fontWeight={'semibold'}
                textAlign={'justify'}
                py={{base:1, md:2, lg:3}}
              >
                I'm a passionate, self-proclaimed Developer who specializes in full stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.
              </Text>
              <Text
                fontSize={fontSizeText}
                fontWeight={'semibold'}
                textAlign={'justify'}
                py={{base:1, md:2, lg:3}}
              >
                I began my journey as a web developer in 2024, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Tailwindcss, Chakra UI and much more.
              </Text>
              <Text
                fontSize={fontSizeText}
                fontWeight={'semibold'}
                textAlign={'justify'}
                py={{base:1, md:2, lg:3}}
              >
                When I'm not in full-on developer mode, you can find me hovering around on LinkedIn, witnessing the journey of early startups or enjoying some free time. You can follow me on LinkedIn, or you can follow me on GitHub.
              </Text>
              <Text
                fontSize={fontSizeText}
                fontWeight={'semibold'}
                textAlign={'justify'}
                py={{base:1, md:2, lg:3}}
              >
One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉              </Text>
            
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default About;
