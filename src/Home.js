/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { css } from '@emotion/core'

const Home = () => (
  <div css={divContainer}>
    <h1 className="title">Ryan Boris</h1>
  </div>
)

/*
  Component Styles
*/

const divContainer = css`
  & {
    display: flex;
    width: 100vw;
    height: 100vh;

    h1.title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 12rem;
      font-weight: 200;
      letter-spacing: 15px;
    }
  }
`

export default hot(Home)
