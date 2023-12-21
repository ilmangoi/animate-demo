import Rainbow from '@/components/Rainbow'
import Head from 'next/head'
import hljs from 'highlight.js'
import { useEffect } from 'react'

export default function Beyond() {
  useEffect(() => {
    hljs.addPlugin(new CopyButtonPlugin())
    hljs.highlightAll()
  }, [])

  return (
    <>
      <Head>
        <title>GSAP Beyond</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <>
        <Rainbow />
      </>
    </>
  )
}
