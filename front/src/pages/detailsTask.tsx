import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import router from 'next/router';

import Header from '../components/header/Header';
import { changeHistory } from '../redux/slice/tasksSlice'
import { StyledDetailsTask } from '../styles/pagesStyle/styledDetailsTask'
import { convertDateTime } from '../utils/changeDate'

function DetailsTask() {
  const dispatch = useDispatch()
  const { detailsTask } = useSelector((state: any) => state.tasks)
  let text = ''

  if (detailsTask.updatedAt) {
    const parser = new DOMParser()
    const html = parser.parseFromString(detailsTask.description, 'text/html')
    text = html.body.textContent || ''
  }

  return (
    <StyledDetailsTask>
      <Header />
      <button
        type="button"
        id="link_task_list"
        onClick={() => {
          dispatch(changeHistory(''))
          router.back()
        }}
      >
        Listar tarefas
      </button>
      <main id="details_task">
        <section id="menu_info_left">
          <span id="status">
            <p>Status: </p>
            <p id="pStatus">{detailsTask.status}</p>
          </span>
          <span id="priority">
            <p>Prioridade</p>
            <p id="pPriority">{detailsTask.priority}</p>
          </span>
          <span id="date">
            <p>Atualizada</p>
            <p id="pDate">{detailsTask.updatedAt && convertDateTime(detailsTask.updatedAt)}</p>
          </span>
        </section>
        <section id="center_title_txt">
          <div id="title">
            <h1>{detailsTask.title}</h1>
          </div>
          <div id="txt">
            <p>{text}</p>
          </div>
        </section>
      </main>
    </StyledDetailsTask>
  )
}

export default DetailsTask
