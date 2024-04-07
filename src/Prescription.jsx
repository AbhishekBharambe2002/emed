import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { Link} from 'react-router-dom';

const Prescription = () => {
  const [formData, setFormData] = useState({
    medname: '',
    numMedicines: '',
    prescription: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    var reader = new FileReader();
    reader.onload = () => {
      setFormData({
        ...formData,
        prescription: reader.result, // Set prescription to base64 image string
      });
    };
    reader.onerror = () => {
      console.log('Error');
    };
    reader.readAsDataURL(file); // Read the file as data URL
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/prescription", {
      method: 'POST',
      crossDomain:true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        Medname: formData.medname,
        Mednumber: formData.numMedicines,
        image: formData.prescription  
      })
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  };
  
  
  return (
    <div>
      <Box className="registration" p={4} display="flex" justifyContent="center" alignItems="center" height="80vh" mt={120}>
        <Box maxW="md" borderWidth="1px" borderRadius="lg" p={6} boxShadow="lg">
          <Box textAlign="center">
            <Heading as="h2" size="lg" mb={4}>Prescription</Heading>
          </Box>
          <form onSubmit={handleSubmit} className="registration-form">
            <FormControl id="medname" mb={4}>
              <FormLabel>Medicine Name:</FormLabel>
              <Input
                type="text"
                id="medname"
                name="medname"
                value={formData.medname}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="numMedicines" mb={4}>
              <FormLabel>Number of Medicines:</FormLabel>
              <Input
                type="number"
                id="numMedicines"
                name="numMedicines"
                value={formData.numMedicines}
                onChange={handleInputChange}
              />
            </FormControl>
            <FormControl id="prescription" mb={4}>
              <FormLabel>Prescription from Doctor:</FormLabel>
              <Input
                type="file"
                id="prescription"
                name="prescription"
                accept="image/*, application/pdf"
                onChange={handleFileInputChange}
              />
            </FormControl>
            <Button type="submit" colorScheme="blue" mb={4} width="100%">Submit</Button>
            <Link to="/productlist">
              <ChakraLink className="register">Home</ChakraLink>
            </Link>
            <Link to='/buy'>
              <Text>next</Text>
            </Link>
          </form>
        </Box>
      </Box>
    </div>
  );
};

export default Prescription;
