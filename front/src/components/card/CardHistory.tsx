import React from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import { convertDateTime } from '../../utils/changeDate'
import { CardHistoryWrapper } from './styleCardHistoryWrapper'
import CorrectImg from '../../assets/images/correct.png'
import DeleteImg from '../../assets/images/delete.png'

function CardHistory({
  key,
  id,
  title,
  description,
  status,
  updatedAt,
}): JSX.Element {

  return (
    <CardHistoryWrapper key={id + key}>
      <div className="main_info">
        <div className="titleAndTxt">
          <div className="titleTask">
            <p>{title}</p>
          </div>
          <div className="txtTask">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="datas_info">
        <span className="statusTask">
          <p>status:</p>
          <p>{status}</p>
        </span>
        <span className="dateTask">
          <p>Atualizada:</p>
          <p>{convertDateTime(updatedAt)}</p>
        </span>
      </div>
    </CardHistoryWrapper>
  )
}

export default CardHistory
