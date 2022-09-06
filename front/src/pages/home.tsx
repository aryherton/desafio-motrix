import router from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/header/Header'
import Menu from '../components/menu/Menu'
import { HomeWrapper } from '../styles/pagesStyle/styledHome'
import { getDatas, delteTasks, putUpdateTask } from '../utils/api'
import { changeAllTasks } from '../redux/slice/tasksSlice'
import TasksCard from '../components/card/TasksCard'
import FormTasks from '../components/formTasks/FormTasks'

function Home(): JSX.Element {
  const dispatch = useDispatch()
  const { addTask } = useSelector((state: any) => state.filterSearch)
  const { task } = useSelector((state: any) => state.tasks)

  const handleDelete = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'))
    const arrIdDelete = JSON.parse(localStorage.getItem('arrIdDelete'))

    if (arrIdDelete && (token && arrIdDelete.length > 0)) {
      await delteTasks('message', arrIdDelete, token)

      const userStorage = JSON.parse(localStorage.getItem('user'))
      const user = await getDatas('user/message', userStorage.token)

      dispatch(changeAllTasks(user.arrMessage))
      localStorage.removeItem('arrIdDelete')

    } else {
        alert('Marque uma tarefa para deletar')
    }
  }

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'))

    if (userStorage === null || !userStorage.token) {
      router.push('/')
    }

    (async () => {
      const user = await getDatas('user/message', userStorage.token)
      dispatch(changeAllTasks(user.arrMessage.reverse()))
    })()
  }, [addTask, task])

  return (
    <HomeWrapper>
      <Header />
      <main>
        <Menu />
        {
          addTask === true ? (<FormTasks />) : (
            <>
              <div id="buttonDelete">
                <button
                  type="button"
                  onClick={handleDelete}
                >
                  Deletar
                </button>
              </div>
              <TasksCard />
            </>
          )
        }
      </main>
    </HomeWrapper>
  )
}

export default Home
