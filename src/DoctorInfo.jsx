import React from 'react';
import { Flex, Box, Text} from '@chakra-ui/react';

const DoctorInfo = () => {
  const doctors = [
    {
      name: 'Dr. Rajesh Kumar',
      timings: '1PM-3PM',
      contactNumber: '+91 9876543210',
    },
    {
      name: 'Dr. Priya Sharma',
      timings: '7PM-9PM',
      contactNumber: '+91 9876543211',
    },
    {
      name: 'Dr. Ramesh Singh',
      timings: '9AM-11AM',
      contactNumber: '+91 9876543212',
    },
  ];

  return (
    <Flex direction="column" align="center">
      <Flex justify="center" flexWrap="wrap" mt="20px">
        {doctors.map((doctor, index) => (
          <Box key={index} w="300px" m="10px" p="20px" borderWidth="1px" borderRadius="md">
            <Text fontSize="xl" fontWeight="bold">{doctor.name}</Text>
            <Text>Timings: {doctor.timings}</Text>
            <Text>Contact: {doctor.contactNumber}</Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

export default DoctorInfo;
