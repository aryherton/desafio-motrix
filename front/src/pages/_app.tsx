import React from 'react'

import GlobalStyle from './styles/global'

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
