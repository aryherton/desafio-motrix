import React from 'react'
import { useDispatch } from 'react-redux';

import { changeSearchDate } from '../../redux/slice/filterSearch';
import { SortDateWrapper } from './styleSortDate';

function SortByDate(): JSX.Element {
  const dispatch = useDispatch();
  const handleSortByDate = (e: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(changeSearchDate(e.currentTarget.value))
  }

  return (
    <SortDateWrapper>
      <p>Ordenar por: </p>
      <div className="shortButtons">
        <button
          className="button_sort_date"
          value="asc"
          onClick={ handleSortByDate }
        >
        Mais recentes
        </button>
        <button
          className="button_sort_date"
          value="desc"
          onClick={ handleSortByDate }
        >
        Mais antigos
        </button>
      </div>
    </SortDateWrapper>
    )
  }

  export default SortByDate
