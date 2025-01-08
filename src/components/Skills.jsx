import React from 'react';
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
  useBreakpointValue,
  Link,
} from '@chakra-ui/react';

const skills = [
  {
    title: 'ReactJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    link: 'https://reactjs.org/',
  },
  {
    title: 'NodeJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    link: 'https://nodejs.org/',
  },
  {
    title: 'ExpressJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    link: 'https://expressjs.com/',
  },
  {
    title: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    link: 'https://www.mongodb.com/',
  },
  {
    title: 'JavaScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    title: 'TailwindCSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', // Correct logo
    link: 'https://tailwindcss.com/',
  },
  {
    title: 'Git',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    link: 'https://git-scm.com/',
  },
  {
    title: 'TypeScript',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'NextJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    link: 'https://nextjs.org/',
  },
  {
    title: 'Python',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    link: 'https://www.python.org/',
  },
];

const Skills = () => {
  const fontSizeText = useBreakpointValue({ base: 'sm', md: 'md', lg: 'lg' });

  return (
    <Box
      id="skills"
      color={useColorModeValue('gray.700', 'gray.300')}
      bg={useColorModeValue('gray.50', 'gray.900')}
      px={{ base: 4, md: 16 }}
      pt={{ base: 6, md: 10 }}
      pb={{ base: 10, md: 16 }}
      width="100%"
      zIndex="0"
    >
      {/* Section Header */}
      <Flex justify={'center'} mb={10}>
        <Button rounded={'3xl'} size={{base:'sm', md:'md', lg:'lg'}} bg={useColorModeValue('gray.300', 'gray.600')}>
          Skills
        </Button>
      </Flex>
      <Flex justify={'center'} mb={10} textAlign={'center'}>
        <Text fontSize={'2xl'}>The Skills, tools, and technologies I am good at:</Text>
      </Flex>

      {/* Skills Grid */}
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }}
        gap={6}
        justifyItems="center"
        alignItems="center"
      >
        {skills.map((skill) => (
          <GridItem key={skill.title} textAlign="center">
            <Link href={skill.link} isExternal>
              <Image
                src={skill.logo}
                alt={skill.title}
                boxSize={{ base: '50px', md: '70px' }}
                mb={4}
              />
            </Link>
            <Text fontSize={fontSizeText} fontWeight="bold">
              {skill.title}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
