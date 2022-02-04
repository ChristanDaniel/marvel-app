import type { AppProps } from 'next/app'

import '../styles/Global'
import { GlobalStyle } from '../styles/Global'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}

export default MyApp
