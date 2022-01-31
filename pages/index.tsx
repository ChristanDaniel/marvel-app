import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const HomeContainer = dynamic(() => import('../src/features/HomeContainer'), {
  ssr: false
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marvel | Home</title>
      </Head>
      <HomeContainer />
    </>
  )
}

export default Home
