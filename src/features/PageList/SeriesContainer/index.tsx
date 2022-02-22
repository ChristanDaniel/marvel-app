import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { MainContainer, ItemContent, ItemList, CircularContent } from './styles'

import { CircularProgress } from '@mui/material'
import { FooterContainer } from '../../../components/FooterContainer'

import Header from '../../../components/Header'
import Slider from '../../../components/Slider/SliderBanner'
import Button from '../../../components/Button'
import { getSeriesList } from '../../../services/PageList/PageListService'

interface ChracterSerieProps {
  id: number
  name?: string
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

const SeriesContainer = (): JSX.Element => {
  const router = useRouter()
  const [characterSerie, setCharacterSerie] = useState<ChracterSerieProps[]>([])
  const [getLimit, setGetLimit] = useState<number>(18)

  const getCharacterSerieList = async () => {
    const response = await getSeriesList(getLimit)

    setCharacterSerie(response.data.results)
  }

  const getCharacterListEventsLimited = async () => {
    setGetLimit((prevState) => prevState + 18)
  }

  useEffect(() => {
    getCharacterSerieList()
  }, [getLimit])

  return (
    <MainContainer>
      <Header apiGetString={'series?titleStartsWith'} setStateModificationList={setCharacterSerie} />
      <div>
        <Slider />
      </div>
      <ItemContent>
        {characterSerie.length ? (
          <ul>
            {characterSerie.map((char) => {
              return (
                <a onClick={() => router.push(`/Series/${char.id}`)} key={char.id + 6}>
                  <ItemList>
                    <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="teste" />
                    <div>
                      <h3>{char.title}</h3>
                      {char.description === '' || null ? <p>Series doesn’t have a description yet</p> : <p>{char.description}</p>}
                    </div>
                  </ItemList>
                </a>
              )
            })}
          </ul>
        ) : (
          <CircularContent>
            <CircularProgress />
          </CircularContent>
        )}
      </ItemContent>
      <Button onClick={() => getCharacterListEventsLimited()}>More</Button>
      <FooterContainer />
    </MainContainer>
  )
}

export default SeriesContainer
