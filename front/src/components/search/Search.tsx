import React from 'react'
import { useDispatch } from 'react-redux'
import Image from 'next/image'

import { changeSearchText } from '../../redux/slice/filterSearch'
import { SearchWrapper } from './styleSearch'
import ImgSearch from '../../assets/images/search.png'

function Search(): JSX.Element {
  const dispatch = useDispatch()

  const getDataInput = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement
    dispatch(changeSearchText(target.value))
  }

  // const handleSearch = () => {
  //   console.log(search, 'pesquisaaaaaaaaaaaaaaaaaaaaaa')
  // }

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
      // onClick={ handleSearch }
    />
    </SearchWrapper>
    )
  }

  export default Search
