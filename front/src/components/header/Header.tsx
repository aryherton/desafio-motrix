import React, { useEffect } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import { LoginWrapper } from './styleHeader'
import Sair from '../../assets/images/sair.png'
import Logo from '../../assets/images/logo.png'
import { changeUser } from '../../redux/slice/userSlice';
import { getDatas } from '../../utils/api';

function Header(): JSX.Element {
  const router = useRouter()
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user)
  const exitApp = () => {
    localStorage.removeItem('user')
    router.push('/')
    dispatch(changeUser(''));
  }

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'))

    if (userStorage) {
      const token = userStorage.token
      if (token) {
        (async () => {
          const userDatas = await getDatas('user/message', token);

          dispatch(changeUser(userDatas));
        })();
      }
    }
  }, [])

  return (
    <LoginWrapper>
      <div id="header_info_user">
        <p>Olá,</p>
        <p>{ user.name }</p>
      </div>
      <div id="header_img_log">
        <Image src={Logo} alt="img_exit" onClick={exitApp} />
      </div>
      <div id="header_img_exit">
        <a onClick={ exitApp }>
          <Image src={ Sair } alt="img_exit"/>
        </a>
      </div>
    </LoginWrapper>
  )
}

export default Header
