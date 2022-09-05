import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

import Card from './Card'
import CardHistory from './CardHistory'
import SortByDate from '../sort/SortByDate'
import { getSortByDate } from '../../utils/api'
import { TasksHistoryCardWrapper } from './styleTasksHistoryCard'

function TasksHistoryCard({ task }): JSX.Element {
  const [taskHistory, setTaskHistory] = useState([])
  const { searchDate } = useSelector((state: any) => state.filterSearch)

  useEffect(() => {
    if (searchDate) {
      (async () => {
        const body = {
          typeSort: searchDate,
        }
        const { token } = await JSON.parse(localStorage.getItem('user'))
        const { message } = await getSortByDate(`message/${task._id}`, body, token)

        if (message.length > 0) {
          setTaskHistory(message[0].historyUpdate)
        }
      })()
    } else {
      setTaskHistory(task.historyUpdate)
    }
  }, [searchDate])

  return (
    <TasksHistoryCardWrapper>
      <Card
        key={nanoid()}
        id={task._id}
        title={task.title}
        description={task.description}
        priority={task.priority}
        status={task.status}
        updatedAt={task.updatedAt}
      />
      <p id="pHistory">
        Histórico de atualizações
      </p>
      <div id="historyCard">
        <SortByDate />
        {
          taskHistory && taskHistory.length > 0
            ? taskHistory.map((hist: any) => (
                <CardHistory
                  key={nanoid()}
                  id={hist._id}
                  title={hist.title}
                  description={hist.description}
                  status={hist.status}
                  updatedAt={hist.updatedAt}
                />
              ))
            : (
              <span id="notHistory">
                Não há histórico de atualizações
              </span>
            )
        }
      </div>
    </TasksHistoryCardWrapper>
  )
}

export default TasksHistoryCard
