import React from 'react';

interface PaginationProps {
  totalPages: number;
  handleClick: (num: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ totalPages, handleClick }) => {
  const pages = Array.from(Array(totalPages).keys()).map((num) => num + 1);

  return (
    <div>
      {pages.map((num) => (
        <button key={num} onClick={() => handleClick(num)}>
          {num}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
