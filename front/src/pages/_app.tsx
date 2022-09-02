import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store from '../redux/store/store'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
