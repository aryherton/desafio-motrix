import React, { useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import FormLogin from '../components/formLogin/FormLogin'
import { LoginWrapper } from './styles/pagesStyle/styledLogin'
import Logo from '../assets/images/logo.png'

function Login(): JSX.Element {
  const router = useRouter()

  useEffect(() => {
    const userStorage = JSON.parse(localStorage.getItem('user'))

    if (userStorage !== null && userStorage.token) {
      router.push('/home')
    }
  }, [])

  return (
    <LoginWrapper>
      <main>
        <Image src={Logo} alt="img_logo" />
        <FormLogin />
      </main>
    </LoginWrapper>
  )
}

export default Login;
