import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ComponentA from './ComponentA';
import data from './data.json';

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [numberOfElements, setNumberOfElements] = useState(0);
  const [starWarsCharacter, setStarWarsCharacter] = useState(null);

  useEffect(() => {
    // Get the number of elements in the data array
    setNumberOfElements(data.length);
  }, []);

  useEffect(() => {
    // Fetch Star Wars character based on the number of elements in data array
    const fetchStarWarsCharacter = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${numberOfElements}/`);
        setStarWarsCharacter(response.data.name);
      } catch (error) {
        console.error('Error fetching Star Wars character:', error);
      }
    };

    if (numberOfElements > 0) {
      fetchStarWarsCharacter();
    }
  }, [numberOfElements]);

  const handleClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <h1>ComponentA List</h1>
      <AppContainer>
        {data.map((item, index) => (
          <ComponentA key={index} data={item} onClick={() => handleClick(index)} />
        ))}
      </AppContainer>
      {selectedValue !== null && <p>Selected Value: {selectedValue}</p>}
      {starWarsCharacter && <p>Star Wars Character: {starWarsCharacter}</p>}
    </div>
  );
};

export default App;
