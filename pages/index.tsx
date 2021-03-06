import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const HomeContainer = dynamic(() => import('../src/features/PageList/HomeContainer'), {
  ssr: false
})

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marvel | Character</title>
      </Head>
      <HomeContainer />
    </>
  )
}

export default Home
