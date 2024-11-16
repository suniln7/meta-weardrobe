import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClothingCombinations = () => {
  const [combinations, setCombinations] = useState([]);

  useEffect(() => {
    const fetchCombinations = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/clothing/combinations');
        setCombinations(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCombinations();
  }, []);

  return (
    <div>
      {combinations.map((combination, index) => (
        <div key={index}>
          <img src={`uploads/${combination.top.image}`} alt={combination.top.name} />
          <img src={`uploads/${combination.bottom.image}`} alt={combination.bottom.name} />
        </div>
      ))}
    </div>
  );
};

export default ClothingCombinations;
