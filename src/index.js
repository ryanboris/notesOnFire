import React from 'react'
import ReactDOM from 'react-dom'
import Home from './Home'
import { Global, css } from '@emotion/core'

ReactDOM.render(
  <>
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          font-size: 62.5%;
        }
      `}/>
    <Home />
  </>,
  document.getElementById('app')
)
