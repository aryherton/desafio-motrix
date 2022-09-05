import React from 'react'
import { useDispatch } from 'react-redux'

import { changeSearchDate } from '../../redux/slice/filterSearch'
import { SortDateWrapper } from './styleSortByDate'

function SortByDate(): JSX.Element {
  const dispatch = useDispatch()

  const handleSortDate = ({ target }) => {
    dispatch(changeSearchDate(target.value))
  }

  return (
    <SortDateWrapper>
      <p>Ordenar por data:</p>
      <span id="sortDate">
        <label htmlFor="maisRecente">
          <input
            type="radio"
            name="sortDate"
            id="maisRecente"
            className="radioSortDate"
            value="desc"
            onClick={ handleSortDate }
          />
          Mais recente
        </label>
        <label htmlFor="maisAntiga">
          <input
            type="radio"
            name="sortDate"
            id="maisAntiga"
            className="radioSortDate"
            value="asc"
            onClick={handleSortDate}
          />
          Mais antiga
        </label>
      </span>
    </SortDateWrapper>
  )
}

export default SortByDate
