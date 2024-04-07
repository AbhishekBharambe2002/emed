import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image, Text } from '@chakra-ui/react';
import medical from './medical-logo.jpg';

const DocNavbar = () => {
  return (
    <Flex
      as="nav"
      className="navbar"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="blue.500"
      color="white"
    >
      <Link to="/">
        <Image src={medical} alt="Logo" className="logo" boxSize="50px" />
      </Link>
      <Flex as="ul" className="nav-links" listStyleType="none">
        <Link to="/productlist">
          <Text as="li" mr="4">
            Products
          </Text>
        </Link>
        <Link to="/docprescription">
          <Text as="li" mr="4">
            Prescription
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default DocNavbar;
