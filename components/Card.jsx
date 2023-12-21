import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow-night-blue.css'
import Buttons from './Buttons'

const Card = ({ title, code, selector, animationPause, animationStart, animationReverse, animationRestart }) => {
  const fred = useRef(null)

  useLayoutEffect(() => {
    hljs.highlightAll()
  }, [])

  return (
    <CardWrap>
      <CardTitle>{title}</CardTitle>
      <CardButtons>
        <Buttons
          selector={selector}
          fred={fred}
          animationPause={animationPause}
          animationStart={animationStart}
          animationReverse={animationReverse}
          animationRestart={animationRestart}
        />
      </CardButtons>
      <CardImages>
        {selector === 'stagger' ? (
          <>
            <Fred src='https://assets.codepen.io/16327/flair-2.png' data={selector} />
            <Fred src='https://assets.codepen.io/16327/flair-4.png' data={selector} />
            <Fred src='https://assets.codepen.io/16327/flair-4.png' data={selector} />
          </>
        ) : (
          <Fred src='https://assets.codepen.io/16327/flair-2.png' data={selector} />
        )}
      </CardImages>
      <CardCodeWrap>
        <CardPre>
          <CardCode
            className='language-javascript'
            dangerouslySetInnerHTML={{
              __html: code,
            }}
          />
        </CardPre>
      </CardCodeWrap>
    </CardWrap>
  )
}

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.div`
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
`

const CardPre = styled.pre`
  border-radius: ${rem(10)};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const CardCode = styled.code`
  border-radius: ${rem(10)};
  flex-grow: 1;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`

const CardImages = styled.div`
  display: flex;
  align-items: flex-end;
  height: ${rem(230)};
  background-image: linear-gradient(
      12deg,
      rgba(193, 193, 193, 0.05) 0%,
      rgba(193, 193, 193, 0.05) 2%,
      rgba(129, 129, 129, 0.05) 2%,
      rgba(129, 129, 129, 0.05) 27%,
      rgba(185, 185, 185, 0.05) 27%,
      rgba(185, 185, 185, 0.05) 66%,
      rgba(83, 83, 83, 0.05) 66%,
      rgba(83, 83, 83, 0.05) 100%
    ),
    linear-gradient(
      321deg,
      rgba(240, 240, 240, 0.05) 0%,
      rgba(240, 240, 240, 0.05) 13%,
      rgba(231, 231, 231, 0.05) 13%,
      rgba(231, 231, 231, 0.05) 34%,
      rgba(139, 139, 139, 0.05) 34%,
      rgba(139, 139, 139, 0.05) 71%,
      rgba(112, 112, 112, 0.05) 71%,
      rgba(112, 112, 112, 0.05) 100%
    ),
    linear-gradient(
      236deg,
      rgba(189, 189, 189, 0.05) 0%,
      rgba(189, 189, 189, 0.05) 47%,
      rgba(138, 138, 138, 0.05) 47%,
      rgba(138, 138, 138, 0.05) 58%,
      rgba(108, 108, 108, 0.05) 58%,
      rgba(108, 108, 108, 0.05) 85%,
      rgba(143, 143, 143, 0.05) 85%,
      rgba(143, 143, 143, 0.05) 100%
    ),
    linear-gradient(
      96deg,
      rgba(53, 53, 53, 0.05) 0%,
      rgba(53, 53, 53, 0.05) 53%,
      rgba(44, 44, 44, 0.05) 53%,
      rgba(44, 44, 44, 0.05) 82%,
      rgba(77, 77, 77, 0.05) 82%,
      rgba(77, 77, 77, 0.05) 98%,
      rgba(8, 8, 8, 0.05) 98%,
      rgba(8, 8, 8, 0.05) 100%
    ),
    linear-gradient(334deg, hsl(247, 0%, 2%), hsl(247, 0%, 2%));
  background-size: cover;
  margin-bottom: ${rem(30)};
  border-radius: ${rem(10)};
  overflow: hidden;
`

const Fred = styled.img`
  width: ${rem(100)};
  position: relative;
  bottom: ${rem(20)};
  left: ${rem(20)};
  @media (max-width: 576px) {
    width: ${rem(50)};
  }
`

const CardButtons = styled.div``

const CardCodeWrap = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
`

export default Card
