import Letters from '@/components/Letters'
import Head from 'next/head'
import styled from 'styled-components'
import Snow from '@/components/Snow'

export default function Home() {
  return (
    <>
      <Head>
        <title>GSAP</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <IndexPage>
        <Letters />
        <Snow />
      </IndexPage>
    </>
  )
}

const IndexPage = styled.div``
