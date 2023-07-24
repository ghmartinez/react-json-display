import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 150px;
  height: 50px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
`;

const ComponentA = ({ data, onClick }) => {
  const { txt, value } = data;

  return (
    <Box style={{ background: value === 1 ? 'green' : 'pink' }}>
      {txt}
      <button onClick={() => onClick(txt)}>Show Value</button>
    </Box>
  );
};

export default ComponentA;
