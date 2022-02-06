import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import {
  getCharactersItem,
  getCharactersItemComics,
  getCharactersItemEvents,
  getCharactersItemSeries
} from '../../../services/PageItem/PageCharacter/CharacterService'

import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])

import { CircularProgress } from '@mui/material'

import { MainContainer, ItemContainer, ItemDescriptionContent, ItemSwiperContent, CircularContent } from './styles'
import { FooterContainer } from '../../../components/FooterContainer'

type ChracterProps = {
  id: number
  title?: string
  name?: string
  description?: string
  thumbnail: {
    extension?: string
    path?: string
  }
}

const HomeContainer = (): JSX.Element => {
  const router = useRouter()
  const [character, setCharacter] = useState<ChracterProps[]>([])
  const [characterComics, setCharacterComics] = useState<ChracterProps[]>([])
  const [chractersSeries, setChractersSeries] = useState<ChracterProps[]>([])
  const [chractersEvents, setChractersEvents] = useState<ChracterProps[]>([])

  const getCharacterList = async () => {
    const response = await getCharactersItem(router.query.id)
    setCharacter(response.data.results)
  }

  const getChractersCominic = async () => {
    const responseComics = await getCharactersItemComics(router.query.id)
    setCharacterComics(responseComics.data.results)
  }

  const getChractersSeries = async () => {
    const responseSeries = await getCharactersItemSeries(router.query.id)
    setChractersSeries(responseSeries.data.results)
  }

  const getChractersEvents = async () => {
    const responseEvents = await getCharactersItemEvents(router.query.id)
    setChractersEvents(responseEvents.data.results)
  }

  useEffect(() => {
    getCharacterList()
    getChractersCominic()
    getChractersSeries()
    getChractersEvents()
  }, [])

  return (
    <MainContainer>
      <header>
        <a href="/">
          <img src="/marvelLogo.png" alt="Logo" />
        </a>
      </header>
      <ItemContainer>
        <ItemDescriptionContent>
          {character.length ? (
            <>
              {character.map((char) => {
                return (
                  <div key={char.name + router.asPath}>
                    <img src={`${char.thumbnail.path}/portrait_uncanny.${char.thumbnail.extension}`} alt={char.name} />
                    <h1>{char.name}</h1>
                    <span>Description </span>
                    {char.description === '' || null ? <p>does not have a description yet</p> : <p>{char.description}</p>}
                  </div>
                )
              })}
            </>
          ) : (
            <CircularProgress />
          )}
        </ItemDescriptionContent>

        <ItemSwiperContent>
          <h1>Comics</h1>
          <div>
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              id="swiperContainer"
            >
              {characterComics.length ? (
                <>
                  {characterComics?.map((char) => {
                    return (
                      <SwiperSlide key={1 + char.id}>
                        <a href={`/Comic/${char.id}`}>
                          <img src={`${char.thumbnail.path}/portrait_uncanny.${char.thumbnail.extension}`} alt={char.title} />
                          <p id="TitleEvent">{char.title}</p>
                        </a>
                      </SwiperSlide>
                    )
                  })}
                </>
              ) : (
                <CircularContent>
                  <CircularProgress />
                </CircularContent>
              )}
            </Swiper>
          </div>
        </ItemSwiperContent>
        <ItemSwiperContent>
          <h1>Series</h1>
          <div>
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              id="swiperContainer"
            >
              {chractersSeries.length ? (
                <>
                  {chractersSeries?.map((char) => {
                    return (
                      <SwiperSlide key={char.id + 2}>
                        <a href={`/Series/${char.id}`}>
                          <img src={`${char.thumbnail.path}/portrait_uncanny.${char.thumbnail.extension}`} alt={char.title} />
                          <p id="TitleEvent">{char.title}</p>
                        </a>
                      </SwiperSlide>
                    )
                  })}
                </>
              ) : (
                <CircularContent>
                  <CircularProgress />
                </CircularContent>
              )}
            </Swiper>
          </div>
        </ItemSwiperContent>

        <ItemSwiperContent>
          <h1>Events</h1>
          <div>
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              pagination={{
                clickable: true
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              id="swiperContainer"
            >
              {chractersEvents.length ? (
                <>
                  {chractersEvents?.map((char) => {
                    return (
                      <SwiperSlide key={char.id + 2}>
                        <a href={`/Event/${char.id}`}>
                          <img src={`${char.thumbnail.path}/portrait_uncanny.${char.thumbnail.extension}`} alt={char.title} />
                          <p id="TitleEvent">{char.title}</p>
                        </a>
                      </SwiperSlide>
                    )
                  })}
                </>
              ) : (
                <CircularContent>
                  <CircularProgress />
                </CircularContent>
              )}
            </Swiper>
          </div>
        </ItemSwiperContent>
      </ItemContainer>
      <FooterContainer />
    </MainContainer>
  )
}
export default HomeContainer
