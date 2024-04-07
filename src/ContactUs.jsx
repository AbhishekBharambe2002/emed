import React from 'react';
import { Box, Flex, Heading, Text, Input, Textarea, Button } from '@chakra-ui/react';

const ContactUs = () => {
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Contact Us</Heading>
      <Text mb={4}>Have a question or feedback? Reach out to us!</Text>
      <Flex direction="column" maxW="md">
        <Input type="text" placeholder="Your Name" name='name' mb={4} />
        <Input type="email" placeholder="Your Email" name='email' mb={4} />
        <Textarea placeholder="Your Message" name="message" mb={4} />
        <Button colorScheme="blue">Submit</Button>
      </Flex>
    </Box>
  );
};

export default ContactUs;
