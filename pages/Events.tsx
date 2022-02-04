import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const EventsContainer = dynamic(() => import('../src/features/PageList/EventsContainer'), {
  ssr: false
})

const PageEvents: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marvel | Events</title>
      </Head>
      <EventsContainer />
    </>
  )
}

export default PageEvents
