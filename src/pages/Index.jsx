import { Box, Container, Heading, Text, VStack, Image, Link, Button, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={5} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Full-Stack Developer | React Expert | Open Source Contributor
        </Text>
        <Box boxSize="sm" mx="auto">
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1536148935331-408321065b18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyfGVufDB8fHx8MTcwOTk3ODMwMnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
        </Box>
        <Text fontSize="md" textAlign="center">
          Hi there! I'm John, a passionate programmer with a love for building web applications that make a difference. I specialize in React, Node.js, and building accessible, user-friendly interfaces.
        </Text>
        <HStack justifyContent="center" spacing={4}>
          <Link href="https://github.com/johndoe" isExternal>
            <Button leftIcon={<Icon as={FaGithub} />} colorScheme="gray" variant="solid">
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/johndoe" isExternal>
            <Button leftIcon={<Icon as={FaLinkedin} />} colorScheme="blue" variant="solid">
              LinkedIn
            </Button>
          </Link>
          <Link href="mailto:john.doe@example.com">
            <Button leftIcon={<Icon as={FaEnvelope} />} colorScheme="red" variant="solid">
              Email Me
            </Button>
          </Link>
          <Link href="GPTENG:get_file('John_Doe_Resume')" isExternal>
            <Button leftIcon={<Icon as={FaFileAlt} />} colorScheme="green" variant="solid">
              Resume
            </Button>
          </Link>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
