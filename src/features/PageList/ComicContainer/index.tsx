import router from 'next/router'
import { useEffect, useState } from 'react'

import { CircularProgress } from '@mui/material'
import { FooterContainer } from '../../../components/FooterContainer'

import { MainContainer, ItemContent, ItemList, CircularContent } from './styles'

import Header from '../../../components/Header'
import Slider from '../../../components/Slider/SliderBanner'
import Button from '../../../components/Button'
import { getComicList } from '../../../services/PageList/PageListService'

interface ChracterComicProps {
  id: number
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

const ComicContainer = (): JSX.Element => {
  const [characterComic, setCharacterComic] = useState<ChracterComicProps[]>([])
  const [getLimit, setGetLimit] = useState<number>(18)

  const getCharacterComicList = async () => {
    const response = await getComicList(getLimit)

    setCharacterComic(response.data.results)
  }

  const getCharacterListComicLimited = async () => {
    setGetLimit((prevState) => prevState + 18)
  }

  useEffect(() => {
    getCharacterComicList()
  }, [getLimit])

  return (
    <MainContainer>
      <Header apiGetString={'comics?titleStartsWith'} setStateModificationList={setCharacterComic} />
      <div>
        <Slider />
      </div>
      <ItemContent>
        {characterComic.length ? (
          <ul>
            {characterComic.map((char) => {
              return (
                <div key={char.id}>
                  <a onClick={() => router.push(`/Comic/${char.id}`)}>
                    <ItemList>
                      <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="teste" />
                      <div>
                        <h3>{char.title}</h3>
                        {char.description === '' ? <p>Comic doesn’t have a description yet</p> : <p>{char.description}</p>}
                      </div>
                    </ItemList>
                  </a>
                </div>
              )
            })}
          </ul>
        ) : (
          <CircularContent>
            <CircularProgress />
          </CircularContent>
        )}
      </ItemContent>
      <Button onClick={() => getCharacterListComicLimited()}>More</Button>
      <FooterContainer />
    </MainContainer>
  )
}

export default ComicContainer
