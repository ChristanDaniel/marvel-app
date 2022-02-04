import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const PageEventContainer = dynamic(() => import('../../src/features/PageItem/PageEventContainer'), {
  ssr: false
})

const EventPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marvel | Event</title>
      </Head>
      <PageEventContainer />
    </>
  )
}

export default EventPage
