import router from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../components/header/Header'
import Menu from '../components/menu/Menu'
import { HomeWrapper } from './styles/pagesStyle/styledHome'
import { getDatas } from '../utils/api'
import { changeAllTasks } from '../redux/slice/tasksSlice'
import TasksCard from '../components/card/TasksCard'

function Home(): JSX.Element {
  const dispatch = useDispatch()
  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'))

    if (userStorage === null || !userStorage.token) {
      router.push('/')
    }

    (async () => {
      const user = await getDatas('user/message', userStorage.token)
      dispatch(changeAllTasks(user.arrMessage))
    })()
  }, [])

  return (
    <HomeWrapper>
      <Header />
      <main>
        <Menu />
        <TasksCard />
      </main>
    </HomeWrapper>
  )
}

export default Home
