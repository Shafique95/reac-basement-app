import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Button, 
  Input, 
  VStack, 
  Heading, 
  Text
} from '@chakra-ui/react';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register logic here
    // You might want to call API and then:
    localStorage.setItem('token', 'fake-token'); // simulate auth token
    navigate('/dashboard', { replace: true }); // redirect after register
  };

  return (
    <Box 
      maxW="400px" 
      mx="auto" 
      mt="50px" 
      p={5} 
      border="1px solid" 
      borderColor="gray.200" 
      borderRadius="md"
      shadow="sm"
    >
      <Heading as="h2" size="lg" mb={6} textAlign="center">
        Register
      </Heading>
      
      <form onSubmit={handleRegister}>
        <VStack gap={4} align="stretch">
          <Box>
            <Text mb={2} fontWeight="medium">Name:</Text>
            <Input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your full name"
              required
            />
          </Box>

          <Box>
            <Text mb={2} fontWeight="medium">Email:</Text>
            <Input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />
          </Box>

          <Box>
            <Text mb={2} fontWeight="medium">Password:</Text>
            <Input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              required
            />
          </Box>

          <Button 
            type="submit" 
            colorScheme="blue" 
            size="lg"
            mt={4}
          >
            Register
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Register;