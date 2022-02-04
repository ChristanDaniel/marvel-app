import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const PageSeriesContainer = dynamic(() => import('../../src/features/PageItem/PageSeriesContainer'), {
  ssr: false
})

const SeriesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marvel | Serie</title>
      </Head>
      <PageSeriesContainer />
    </>
  )
}

export default SeriesPage
