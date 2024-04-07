import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image, Text } from '@chakra-ui/react';
import medical from './medical-logo.jpg';

const Navbar = () => {
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
        <Link to="/About">
          <Text as="li" mr="4">
            About
          </Text>
        </Link>
        <Link to="/contact">
          <Text as="li" mr="4">
            Contact Us
          </Text>
        </Link>
        <Link to="/Feedback">
          <Text as="li" mr="4">
            Feedback
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Navbar;
