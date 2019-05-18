/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { css } from '@emotion/core'

const Home = () => (
  <div css={divContainer}>
    <h1 className="title">Ryan Boris</h1>
    <p>A Developer</p>
  </div>
)

/*
  Component Styles
*/

const divContainer = css`
  & {
    display: flex;
    flex-flow: column nowrap;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-transform: uppercase;
    word-wrap: break-word;

    & h1.title {
      font-weight: 100;
      font-size: 20rem;
      letter-spacing: 29px;
    }

    & p {
      font-size: 7rem;
      font-weight: 100;
      letter-spacing: 15px;
      margin-left: 50%;
      margin-top: 4%;
    }

    @media screen and (max-width: 1300px) {
      h1.title {
        font-size: 15rem;
        letter-spacing: 27px;
      }

      p {
        font-size: 5rem;
        margin-top: 8%;
        letter-spacing: 13px;
      }
    }
    @media screen and (max-width: 1050px) {
      h1.title {
        font-size: 8rem;
        letter-spacing: 25px;
      }

      p {
        font-size: 3rem;
        margin-top: 10%;
        letter-spacing: 11px;
      }
    }
    @media screen and (max-width: 700px) {
      h1.title {
        font-size: 6rem;
        margin-bottom: 3%;
        letter-spacing: 23px;
      }

      p {
        font-size: 2rem;
        margin-top: 10%;
        letter-spacing: 9px;
      }
    }
    @media screen and (max-width: 650px) {
      h1.title {
        font-size: 3rem;
        letter-spacing: 19px;
      }

      p {
        font-size: 2rem;
        letter-spacing: 7px;
        margin-top: 10%;
      }
    }
  }
`

export default hot(Home)
