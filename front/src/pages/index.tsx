import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import FormLogin from '../components/formLogin/FormLogin'
import { LoginWrapper } from './styles/pagesStyle/styledLogin'
import Logo from '../assets/images/logo.png'

function Login(): JSX.Element {
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
