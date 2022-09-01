import router from 'next/router'
import React, { useEffect } from 'react'

import Header from '../components/header/Header'

function Home(): JSX.Element {
  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'))

    if (userStorage === null || !userStorage.token) {
      router.push('/')
    }
  }, [])

  return (
    <div>
      <Header />
    </div>
  )
}

export default Home
