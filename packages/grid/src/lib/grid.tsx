import React from 'react';
import PropTypes from 'prop-types';
import styles from './grid.module.css';

interface GridProps {
  rows: number;
  columns: number;
  children: React.ReactNode;
}

export function Grid({ rows, columns, children }: GridProps) {
  const gridStyle = {
    display: 'grid',
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: '10px'
  };

  return (
    <div className={styles['container']} style={gridStyle}>
      {children}
    </div>
  );
}

Grid.propTypes = {
  rows: PropTypes.number.isRequired,
  columns: PropTypes.number.isRequired,
  children: PropTypes.node
};

export default Grid;
