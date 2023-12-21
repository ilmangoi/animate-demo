import FlipCards from '@/components/FlipCards'
import OtherWrap from '@/components/OtherWrap'
import Head from 'next/head'
import styled from 'styled-components'

export default function Other() {
  return (
    <>
      <Head>
        <title>GSAP Other</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <OtherWrapper>
        <OtherWrap>
          <FlipCards />
        </OtherWrap>
      </OtherWrapper>
    </>
  )
}

const OtherWrapper = styled.div`
  position: relative;
  min-height: 100%;
`
