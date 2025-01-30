import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';

const Grid = ({ rows, columns, children }) => {
  const gridStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '10px'
  };

  return (
    <div style={gridStyle}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default Grid;
