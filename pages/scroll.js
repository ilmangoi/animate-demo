import LayeredPinning from '@/components/LayeredPinning'
import ScrollBlock from '@/components/ScrollBlock'
import ScrollBlockColorLine from '@/components/ScrollBlockColorLine'
import Head from 'next/head'

export default function Beyond() {
  return (
    <>
      <Head>
        <title>GSAP ScrollTrigger</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <>
        <ScrollBlock />
        <ScrollBlockColorLine />
        <LayeredPinning />
      </>
    </>
  )
}
