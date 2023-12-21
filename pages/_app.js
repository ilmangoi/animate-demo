import Theme from '@/styles/Theme'
import GlobalStyles from '@/styles/GlobalStyles'
import { Inter } from '@next/font/google'
import { BallTriangle } from 'react-loader-spinner'
import { useEffect, useState } from 'react'
import Nav from '@/components/Nav'
import { Provider } from 'react-redux'
import store from '@/store'
import 'reset.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  const [isLoad, setIsLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(false)
    }, 1000)
  }, [])

  if (isLoad)
    return (
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color='#0ae448'
        ariaLabel='ball-triangle-loading'
        wrapperClass={'loader'}
        wrapperStyle={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          backgroundColor: '#000',
        }}
        visible={true}
      />
    )

  return (
    <>
      <GlobalStyles />
      <Theme>
        <main className={inter.className}>
          <Provider store={store}>
            <Nav color={'white'} />
            <Component {...pageProps} />
          </Provider>
        </main>
      </Theme>
    </>
  )
}
