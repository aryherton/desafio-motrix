import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

import FormLogin from '../components/formLogin/FormLogin'
import CorrectImg from '../assets/images/correct.png'

function Login(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>
          Welcome to
        </h1>
        <Image src={CorrectImg} />
        <FormLogin />
      </main>
    </div>
  )
}

export default Login;
