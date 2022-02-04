import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const ComicContainer = dynamic(() => import('../src/features/PageList/ComicContainer'), {
  ssr: false
})

const PageComic: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marvel | Comics</title>
      </Head>
      <ComicContainer />
    </>
  )
}

export default PageComic
