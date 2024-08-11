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
    Link,
  } from '@chakra-ui/react'

  
  export const Signin = () => {
    
    return (
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#black" // Light background color
        color="gray.800" // Dark text color for contrast
        px={6}
      >
        <Box
          bg="grey" // White background for the form
          p={12}
          borderRadius="md"
          boxShadow="md"
          maxWidth="500px"
          width="full"
        >
          <VStack spacing={6}>
            <Heading as="h2" size="xl" color="teal.600">
              Sign In
            </Heading>
  
            <FormControl id="email">
              <FormLabel fontSize="lg" color="gray.700">
                Email address
              </FormLabel>
              <Input
                type="email"
                size="lg"
                bg="gray.50" // Light gray input background
                borderColor="teal.400"
                focusBorderColor="teal.500" onClick={''}
                _hover={{ borderColor: 'teal.500' }}
                placeholder="Enter your email"
              />
              <FormHelperText fontSize="md" color="gray.600">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
  
            <FormControl id="password">
              <FormLabel fontSize="lg" color="gray.700">
                Password
              </FormLabel>
              <Input
                type="password"
                size="lg"
                bg="blue.50" // Light gray input background
                borderColor="teal.400"
                focusBorderColor="teal.500"
                _hover={{ borderColor: 'teal.500' }}
                placeholder="Enter your password"
              />
              <FormHelperText fontSize="md" color="gray.600">
                Enter your password.
              </FormHelperText>
            </FormControl>
  
            <Box width="full" textAlign="right">
              <Link color="teal.600" _hover={{ color: 'teal.700' }}>
                Forgot Password?
              </Link>
            </Box>
  
            <Button
              colorScheme="teal"
              bg="teal.500"
              _hover={{ bg: 'teal.600' }}
              size="lg"
              width="full"
            >
              Sign In
            </Button>
  
            <Text color="gray.700">
              Don't have an account?{' '}
              <Link color="teal.600" _hover={{ color: 'teal.700' }}>
                Sign Up
              </Link>
            </Text>
          </VStack>
        </Box>
      </Box>
    )
  }