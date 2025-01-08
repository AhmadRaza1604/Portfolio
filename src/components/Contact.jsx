import React from 'react';
import {
  Box,
  Button,
  Flex,
  Link,
  Text,
  useBreakpointValue,
  useColorModeValue,
  IconButton,
  useClipboard,
  Icon,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, CopyIcon } from '@chakra-ui/icons';
import { FaGithub, FaGoogle, FaLinkedinIn } from 'react-icons/fa6';

const Contact = () => {
  const fontSizeText = useBreakpointValue({ base: 'md', md: 'lg', lg: '2xl' });
  const { hasCopied: hasCopiedEmail, onCopy: onCopyEmail } = useClipboard('ahmadraza16042002@gmail.com');
  const { hasCopied: hasCopiedPhone, onCopy: onCopyPhone } = useClipboard('+923265948478');

  return (
    <>
      <Box
        id='contact'
        bg={useColorModeValue('gray.50', 'gray.900')}
        px={{ base: 4, md: 16 }}
        height='110%'
        pt={{ base: 6, md: 10 }}
        pb={24}
        width='100%'
        zIndex="0"
      >
        <Flex justify={'center'} mb={10}>
          <Button rounded={'3xl'} size={{ base: 'sm', md: 'md', lg: 'lg' }} bg={useColorModeValue('gray.300', 'gray.600')}>Get In Touch</Button>
        </Flex>
        <Flex justify={'center'} mb={10}>
          <Text fontSize={{ base: 'lg', md: '2xl' }} px={{ base: 1, md: 1 }} textAlign={'center'} >Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</Text>
        </Flex>
        <Flex justifyContent={'center'} mb={1} >
          <Text fontSize={{ base: 'md', md: '3xl' }} px={{ base: 1, md: 1 }} textAlign={'center'} >
            <EmailIcon /> ahmadraza16042002@gmail.com
            <Icon
              aria-label="Copy email"
              size="lg" 
              ml={{base:'1', md:'4'}}
              bg='transparent'
              onClick={onCopyEmail}
              _hover={{cursor:'pointer'}}
            > <CopyIcon /></Icon>
            {hasCopiedEmail && <Text as="span" ml={2} color="green.500">Copied</Text>}
          </Text>
        </Flex>
        <Flex justify={'center'} mb={10} >
          <Text fontSize={{ base: 'md', md: '3xl' }} px={{ base: 1, md: 1 }} textAlign={'center'} >
            <PhoneIcon /> +923265948478
            <Icon
              aria-label="Copy email"
              size="lg" 
              ml={{base:'1', md:'4'}}
              bg='transparent'
              onClick={onCopyPhone}
              _hover={{cursor:'pointer'}}
            > <CopyIcon /></Icon>
            {hasCopiedPhone && <Text as="span" ml={2} color="green.500">Copied</Text>}
          </Text>
        </Flex>
        <Flex justify={'center'} mb={4} >
          <Text fontSize={{ base: 'md', md: 'lg' }} px={{ base: 1, md: 1 }} textAlign={'center'} >You may also find me on these platforms!</Text>
        </Flex>
        <Flex py={{ base: 3, md: 4, lg: 5 }} alignItems={'center'} justifyContent={'center'}>
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
    </>
  );
};

export default Contact;
