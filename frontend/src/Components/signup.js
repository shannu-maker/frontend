import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Box,
    Heading,
    VStack,
  } from '@chakra-ui/react'
  
  export const Signup = () => {
    return (
      <Box
        minH="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bg="#2b2b2b"
        color="white"
        px={6}
      >
        <Box
          as="form"
          bg="grey"
          p={12}
          borderRadius="lg"
          boxShadow="2xl"
          maxWidth="500px"
          width="full"
        >
          <VStack spacing={8}>
            <Heading as="h2" size="xl" color="WHITE">
              Sign Up
            </Heading>
  
            <FormControl id="email" isRequired>
              <FormLabel fontSize="lg">Email Address</FormLabel>
              <Input
                type="email"
                size="lg"
                bg="#2b2b2b"
                borderColor="yellow.400"
                focusBorderColor="yellow.500"
                _hover={{ borderColor: 'yellow.500' }}
                placeholder="Enter your email"
              />
              <FormHelperText fontSize="md">
                Enter your email ID.
              </FormHelperText>
            </FormControl>
  
            <FormControl id="mobile" isRequired>
              <FormLabel fontSize="lg">Mobile Number</FormLabel>
              <Input
                type="tel"
                size="lg"
                bg="#2b2b2b"
                borderColor="yellow.400"
                focusBorderColor="yellow.500"
                _hover={{ borderColor: 'yellow.500' }}
                placeholder="Enter your mobile number"
              />
              <FormHelperText fontSize="md">
                Enter your mobile number.
              </FormHelperText>
            </FormControl>
  
            <FormControl id="branch" isRequired>
              <FormLabel fontSize="lg">Branch</FormLabel>
              <Input
                type="text"
                size="lg"
                bg="#2b2b2b"
                borderColor="yellow.400"
                focusBorderColor="yellow.500"
                _hover={{ borderColor: 'yellow.500' }}
                placeholder="Enter your branch"
              />
              <FormHelperText fontSize="md">
                Enter your branch.
              </FormHelperText>
            </FormControl>
  
            <FormControl id="password" isRequired>
              <FormLabel fontSize="lg">Password</FormLabel>
              <Input
                type="password"
                size="lg"
                bg="#2b2b2b"
                borderColor="yellow.400"
                focusBorderColor="yellow.500"
                _hover={{ borderColor: 'yellow.500' }}
                placeholder="Create a strong password"
              />
              <FormHelperText fontSize="md">
                Create a strong password.
              </FormHelperText>
            </FormControl>
  
            <FormControl id="confirm-password" isRequired>
              <FormLabel fontSize="lg">Confirm Password</FormLabel>
              <Input
                type="password"
                size="lg"
                bg="#2b2b2b"
                borderColor="yellow.400"
                focusBorderColor="yellow.500"
                _hover={{ borderColor: 'yellow.500' }}
                placeholder="Confirm your password"
              />
              <FormHelperText fontSize="md">
                Confirm your password.
              </FormHelperText>
            </FormControl>
  
            <Button
              type="submit"
              colorScheme="yellow"
              bg="red.400"
              _hover={{ bg: 'white.500' }}
              size="lg"
              width="full"
            >
              Sign Up
            </Button>
          </VStack>
        </Box>
      </Box>
    )
  }