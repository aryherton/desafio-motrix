import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'

import { changeSearchText } from '../../redux/slice/filterSearch'
import { changeFilterTasks } from '../../redux/slice/tasksSlice'
import { SearchWrapper } from './styleSearch'
import ImgSearch from '../../assets/images/search.png'

function Search(): JSX.Element {
  const dispatch = useDispatch()
  const { searchText } = useSelector((state: any) => state.filterSearch)
  const { allTasks } = useSelector((state: any) => state.tasks)

  const getDataInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    dispatch(changeSearchText(target.value))
  }

  const handleSearch = () => {
    const search = allTasks.filter((task: any) => task.title.toLowerCase().includes(searchText.toLowerCase()))
    dispatch(changeFilterTasks(search))
  }

  return (
    <SearchWrapper>
    <input
      className="inputSearch"
      type="text"
      placeholder="Pesquisar por título"
      onChange={ getDataInput }
    />
    <Image
      className="imgSearch"
      src={ImgSearch}
      alt="search"
      width={ 25 } height={ 25 }
      onClick={ handleSearch }
    />
    </SearchWrapper>
    )
  }

  export default Search
