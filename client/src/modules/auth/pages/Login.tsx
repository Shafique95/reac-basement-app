import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Text, Heading, VStack, Input } from '@chakra-ui/react';
import { InputGroup, InputRightElement } from '@chakra-ui/input';
import { FormControl, FormLabel } from '@chakra-ui/form-control';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    // Here you can add actual login logic (API call, validation, etc.)
    localStorage.setItem('token', 'demo-token');
    navigate('/dashboard', { replace: true });
  };

  const goToRegister = () => {
    navigate('/register', { replace: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box p={8} maxW="md" mx="auto" mt={10}>
      <VStack gap={6} align="stretch">
        <Heading as="h2" size="lg" textAlign="center">
          Login
        </Heading>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input 
            type="email" 
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input 
              type={showPassword ? 'text' : 'password'}
              placeholder="Your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pr="4.5rem"
            />
            <InputRightElement width="4.5rem" height="100%">
              <Box
                as="button"
                onClick={togglePasswordVisibility}
                cursor="pointer"
                display="flex"
                alignItems="center"
                justifyContent="center"
                h="100%"
                w="100%"
                fontSize="lg"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </Box>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <Button colorScheme="blue" size="lg" onClick={handleLogin} width="full">
          Login
        </Button>

        <Text textAlign="center">
          Don't have an account?{' '}
          <Button
            variant="ghost"
            colorScheme="blue"
            onClick={goToRegister}
            p={0}
            h="auto"
            fontWeight="normal"
            textDecoration="underline"
          >
            Register!
          </Button>
        </Text>
      </VStack>
    </Box>
  );
};

export default Login;