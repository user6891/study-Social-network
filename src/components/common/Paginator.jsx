import React from 'react';
import style from './Paginator.module.css';

function Paginator({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) {
  const [portionNumber, setPortionNumber] = React.useState(1);

  const countPages = Math.ceil(totalItemsCount / pageSize);
  const pages = [];
  for (let i = 1; i <= countPages; i++) pages.push(i);

  const portionCount = Math.ceil(countPages / portionSize);
  const changePortion = (num) => {
    setPortionNumber(portionNumber + num);
  };

  return (
    <div>
      {portionNumber > 1 ? <button onClick={() => changePortion(-1)}>Prev</button> : ''}
      {pages
        .filter((el) => portionSize * (portionNumber - 1) < el && el <= portionSize * portionNumber)
        .map((p) => {
          return (
            <span
              onClick={() => onPageChanged(p)}
              className={currentPage === p && style.activePage}>
              {' ' + p + ' '}
            </span>
          );
        })}
      {portionNumber < portionCount ? <button onClick={() => changePortion(1)}>Next</button> : ''}
    </div>
  );
}

export default Paginator;
