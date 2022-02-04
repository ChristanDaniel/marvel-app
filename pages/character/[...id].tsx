import type { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const CharacterContainer = dynamic(() => import('../../src/features/PageItem/PageCharacterContainer'), {
  ssr: false
})

const CharacterPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Marvel | Character</title>
      </Head>
      <CharacterContainer />
    </>
  )
}

export default CharacterPage
