import React from 'react';
import { Box, Button, Text, Center, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Buy = () => {
  const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

  if (!selectedProduct) {
    return <Text>No product selected</Text>;
  }

  const { name, dosage, manufacturer, price } = selectedProduct;

  return (
    <Center>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" p={6} boxShadow="lg" mt={8}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>{name}</Text>
        <Text>Dosage: {dosage}</Text>
        <Text>Manufacturer: {manufacturer}</Text>
        <Text>Price: {price}</Text>
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
