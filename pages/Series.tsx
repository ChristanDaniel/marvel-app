import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const SeriesContainer = dynamic(() => import('../src/features/PageList/SeriesContainer'), {
  ssr: false
})

const PageSerie: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marvel | Series</title>
      </Head>

      <SeriesContainer />
    </>
  )
}

export default PageSerie
