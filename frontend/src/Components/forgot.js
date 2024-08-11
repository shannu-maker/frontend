import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Box,
  Heading,
  VStack,
  Text,
  useToast,
} from '@chakra-ui/react';
// import { useNavigate } from 'react-router-dom';

export const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!email) {
      toast({
        title: "Validation Error",
        description: "Please enter your email address.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setLoading(true);

    try {
      await axios.post(`${api}/forgot-password`, { email });
      toast({
        title: "Success",
        description: "Password reset instructions have been sent to your email.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      navigate('/login'); // Navigate to login page after successful request
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgImage="url('/images/forgot-password-bg.png')" // Replace with your background image path
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      color="white"
      px={6}
    >
      <Box
        as="form"
        bg="rgba(0, 0, 0, 0.8)"
        p={12}
        borderRadius="lg"
        boxShadow="2xl"
        maxWidth="500px"
        width="full"
        onSubmit={handleForgotPassword}
      >
        <VStack spacing={8}>
          <Heading as="h2" size="xl" color="red.400">
            Forgot Password
          </Heading>

          <FormControl id="email" isRequired>
            <FormLabel fontSize="lg">Email Address</FormLabel>
            <Input
              type="email"
              size="lg"
              bg="#2b2b2b"
              borderColor="red.400"
              focusBorderColor="red.500"
              _hover={{ borderColor: 'red.500' }}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormHelperText fontSize="md">
              Enter the email address associated with your account.
            </FormHelperText>
          </FormControl>

          <Button
            type="submit"
            colorScheme="red"
            bg="red.400"
            _hover={{ bg: 'red.500' }}
            size="lg"
            width="full"
            isLoading={loading} // Show loading spinner while request is in progress
          >
            Send Reset Link
          </Button>

          <Text fontSize="md" color="gray.300" textAlign="center">
            Remembered your password?{' '}
            <Link color="red.400" href="/login">
              Log in
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};
