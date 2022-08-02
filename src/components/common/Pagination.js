
import React from 'react';
import './styles/Pagination.css'

const Pagination = ({ gamesPerPage, totalGames, paginate, currentPage }) => {
  const pageNumbers = [];
  console.log(totalGames)
  console.log(currentPage)

  for (let i = 1; i <= Math.ceil(totalGames / gamesPerPage); i++) {
    pageNumbers.push(i);
    console.log(pageNumbers)
  }

  const highlight = () => {

  }

  return (
    <nav>
      <ul className='pagination'>
          <a href="#" onClick={() => paginate(currentPage-1)} >&laquo;</a>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)}  className='page-link'>
              {currentPage==number ? <button className='page active'>{number}</button> : <button className='page'>{number}</button>  }
            </a>
          </li>
        ))}
        <a href="#" onClick={() => paginate(currentPage+1)} >&raquo;</a>
      </ul>
    </nav>
  );
};

export default Pagination;