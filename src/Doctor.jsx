import React, { useState } from 'react';
import {Text, Box, Button, Input, FormControl, FormLabel, Heading, Image } from '@chakra-ui/react'; // Removed unused import
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginpageimg from './loginpageimg.jpg';

function Doctor() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    axios.post('http://localhost:3001/doctor', { username, password })
      .then(results => {
        console.log(results)
        if (results.data === "Success") {
          navigate("/docprescription")
        }
      })
      .catch(err => console.log(err))
  };

  return (
    <>


    <Box className="login-container" p={4} display="flex" justifyContent="center" alignItems="center" height="80vh" mt={40}>
      <Box maxW="md" borderWidth="1px" borderRadius="lg" p={6} boxShadow="xl" position="relative" zIndex="1">
        <Box textAlign="center">
          <Image src={loginpageimg} alt="logo" mb={4} />
          <Heading as="h2" size="lg" mb={4}>Login</Heading>
          <Text fontSize='2xl'>Hello</Text>
        </Box>
        <form onSubmit={handleLogin} className="login-form">
          <FormControl id="username" mb={4}>
            <FormLabel>Username:</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password:</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
          </FormControl>
          <Button type="submit" colorScheme="blue" mb={4} width="100%" variant="solid">Login</Button>
            <Link to="/DoctorReg">
            <Button colorScheme="blue" mb={4} width="100%" variant="solid">Register</Button>
            </Link>
        </form>
      </Box>
    </Box>
    </>
  );
}

export default Doctor;
