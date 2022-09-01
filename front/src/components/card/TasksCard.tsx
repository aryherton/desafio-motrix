import React from 'react'
import { useSelector } from 'react-redux'

function TasksCard(): JSX.Element {
  const { tasks } = useSelector((state: any) => state.tasks)
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}

export default TasksCard
