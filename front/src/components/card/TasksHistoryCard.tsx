import React from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import Card from './Card'
import CardHistory from './CardHistory'
import { TasksHistoryCardWrapper } from './styleTasksHistoryCard'
import Voltar from '../../assets/images/voltar.png'

function TasksHistoryCard({ task }): JSX.Element {
  console.log(task.historyUpdate.length);

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
        {
          task.historyUpdate.length > 0
            ? task.historyUpdate.map((hist: any) => (
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
