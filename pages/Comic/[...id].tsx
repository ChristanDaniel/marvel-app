import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const CharacterComicContainer = dynamic(() => import('../../src/features/PageItem/PageComicContainer'), {
  ssr: false
})

const CharacterComicPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marvel | Comic</title>
      </Head>
      <CharacterComicContainer />
    </>
  )
}

export default CharacterComicPage
