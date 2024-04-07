import React, { useEffect, useState } from 'react';
import { Box,Heading, SimpleGrid, Text } from '@chakra-ui/react';
import axios from 'axios';

const DocPrescription = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/docprescription')
      .then(response => {
        setPrescriptions(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const renderImage = (image) => {
    return <img src={image} alt="Prescription" />;
  };
  return (
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>Prescriptions</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
        {prescriptions.map(prescription => (
          <Box key={prescription._id} borderWidth="1px" borderRadius="lg" p={4}>
            <Heading as="h2" size="md" mb={2}>{prescription.Medname}</Heading>
            <Text>Number of Medicines: {prescription.Mednumber}</Text>
            <Box mt={2}>
              {renderImage(prescription.image)}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default DocPrescription;
