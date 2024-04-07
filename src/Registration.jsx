import React, { useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Heading, Link as ChakraLink, Image } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginpageimg from './loginpageimg.jpg';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', formData)
    .then(results=>{console.log(results)
    navigate("/")
    })
    .catch(err=> console.log(err))
  };

  return (
    <Box className="registration" p={4} display="flex" justifyContent="center" alignItems="center" height="80vh" mt={120}>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" p={6} boxShadow="lg">
        <Box textAlign="center">
          <Image src={loginpageimg} alt="logo" mb={4} />
          <Heading as="h2" size="lg" mb={4}>Register</Heading>
        </Box>
        <form onSubmit={handleSubmit} className="registration-form">
          <FormControl id="username" mb={4}>
            <FormLabel>Username:</FormLabel>
            <Input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="email" mb={4}>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" mb={4} width="100%">Register</Button>
          <Link to="/">
            <ChakraLink className="register">Home</ChakraLink>
          </Link>
        </form>
      </Box>
    </Box>
  );
}

export default Registration;
