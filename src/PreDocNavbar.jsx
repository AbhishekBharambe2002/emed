import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Image} from '@chakra-ui/react';
import medical from './medical-logo.jpg';

const PreDocNavbar = () => {
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
    </Flex>
  );
}

export default PreDocNavbar;
