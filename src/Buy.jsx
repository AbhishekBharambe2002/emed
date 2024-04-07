import React from 'react';
import { Box, Button, Image, Text, Center, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Buy = () => {
  const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

  if (!selectedProduct) {
    return <Text>No product selected</Text>;
  }

  const { title, description, imageUrl } = selectedProduct;

  return (
    <Center>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" p={6} boxShadow="lg" mt={8}>
        <Image src={imageUrl} alt={title} mb={4} />
        <Text fontSize="xl" fontWeight="bold" mb={2}>{title}</Text>
        <Text mb={4}>{description}</Text>
        <Stack direction="column" spacing={2}>
          <Link to='/prescription'>
            <Button colorScheme='blue'>Prescription</Button>
          </Link>
        </Stack>
      </Box>
    </Center>
  );
};

export default Buy;
