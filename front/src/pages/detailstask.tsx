import React from 'react'
import { useSelector } from 'react-redux'
import Link from 'next/link';

import Header from '../components/header/Header';
import { StyledDetailsTask } from '../styles/pagesStyle/styledDetailsTask'
import { convertDateTime } from '../utils/changeDate'
import FormatTxt from '../components/formatTxt/FormatTxt';

function DetailsTask() {
  const { detailsTask } = useSelector((state: any) => state.tasks)

  return (
    <StyledDetailsTask>
      <Header />
      <Link href="home">
        <button type="button" id="link_task_list">Listar tarefas</button>
      </Link>
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
            <p id="pDate">{convertDateTime(detailsTask.updatedAt)}</p>
          </span>
        </section>
        <section id="center_title_txt">
          <div id="title">
            <h1>{detailsTask.title}</h1>
          </div>
          <FormatTxt text={detailsTask.description}/>
        </section>
      </main>
    </StyledDetailsTask>
  )
}

export default DetailsTask
