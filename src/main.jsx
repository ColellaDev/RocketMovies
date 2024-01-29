import React from 'react'
import ReactDOM from 'react-dom/client'
import  theme  from "./styles/theme"
import { ThemeProvider } from 'styled-components'
import { Routes }  from './routes'
import GlobalStyles from './styles/global.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

    <GlobalStyles/>
    <Routes />
    
    </ThemeProvider>
  </React.StrictMode>,
)
