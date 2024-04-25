import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Text, Grid, Input } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [medicines, setMedicines] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/productlist');
        setMedicines(response.data.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const filteredMedicines = medicines.filter((medicine) =>
    medicine.name.toLowerCase().includes(searchQuery.toLowerCase())||
    medicine.disease.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectProduct = (product) => {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
  };

  return (
    <div>
      <Input
        placeholder="Search by medicine name"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb="4"
      />
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        {filteredMedicines.map((medicine) => (
          <Box key={medicine.id} borderWidth="1px" borderRadius="lg" p="4">
            <Link to="/buy" onClick={() => handleSelectProduct(medicine)}>
              <Button variant="outline">{medicine.name}</Button>
            </Link>
            <Text>Dosage: {medicine.dosage}</Text>
            <Text>Disease: {medicine.disease}</Text>
            <Text>SideEffects: {medicine.sideEffects}</Text>
            <Text>Alternative: {medicine.alternatives}</Text>
          </Box>
        ))}
      </Grid>
    </div>
  );
};

export default ProductList;
