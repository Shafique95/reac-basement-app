import { useNavigate } from 'react-router-dom';
import { Box, Button, Text, Heading, VStack } from '@chakra-ui/react';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem('token', 'demo-token');
    navigate('/dashboard', { replace: true });
  };

  const goToRegister = () => {
    navigate('/register', { replace: true });
  };

  return (
    <Box p={8} maxW="md" mx="auto" mt={10}>
              <VStack gap={6} align="center">
        <Heading as="h2" size="lg" textAlign="center">
          Login
        </Heading>
        
        <Button 
          colorScheme="blue" 
          size="lg" 
          onClick={handleLogin}
          width="full"
        >
          Login
        </Button>
        
        <Text textAlign="center">
          Don't have an account?{' '}
          <Button
            variant="plain"
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