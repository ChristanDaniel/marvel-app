import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])

import { CircularProgress } from '@mui/material'

import { MainContainer, ItemContainer, ItemDescriptionContent, ItemSwiperContent, CircularContent } from './styles'
import { FooterContainer } from '../../../components/FooterContainer'
import { getEventsItemSeries, getEventItem, getEventItemCharacter, getEventItemCreators } from '../../../services/PageItem/PageEvent/EventService'

type EventsListProps = {
  id: number
  title?: string
  name?: string
  description: string
  thumbnail: {
    extension?: string
    path?: string
  }
  resourceURI?: string
}
type EventsProps = {
  id: number
  fullName?: string
  thumbnail: {
    extension?: string
    path?: string
  }
}

const PageEventsContainer = (): JSX.Element => {
  const router = useRouter()
  const [eventsList, setEventsList] = useState<EventsListProps[]>([])
  const [eventsCharacterList, setEventsCharacterList] = useState<EventsListProps[]>([])
  const [eventsCreatorList, setEventsCreatorList] = useState<EventsProps[]>([])
  const [eventsSeriesList, setEventsSeriesList] = useState<EventsListProps[]>([])

  const getEventsList = async () => {
    const response = await getEventItem(router.query.id)
    setEventsList(response.data.results)
  }

  const getEventsCharacterList = async () => {
    const responseEvents = await getEventItemCharacter(router.query.id)
    setEventsCharacterList(responseEvents.data.results)
  }

  const getEventsCreatorList = async () => {
    const responseEvents = await getEventItemCreators(router.query.id)
    setEventsCreatorList(responseEvents.data.results)
  }

  const getEventsSeriesList = async () => {
    const responseEvents = await getEventsItemSeries(router.query.id)
    setEventsSeriesList(responseEvents.data.results)
  }

  useEffect(() => {
    getEventsList()
    getEventsCharacterList()
    getEventsCreatorList()
    getEventsSeriesList()
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
          {eventsList.length ? (
            <>
              {eventsList.map((event) => {
                return (
                  <div key={event.id + router.asPath}>
                    <img src={`${event.thumbnail.path}/portrait_uncanny.${event.thumbnail.extension}`} alt={event.title} />
                    <h1>{event.title}</h1>
                    <span>Description </span>
                    {event.description === '' || null ? <p>does not have a description yet</p> : <p>{event.description}</p>}
                  </div>
                )
              })}
            </>
          ) : (
            <CircularProgress />
          )}
        </ItemDescriptionContent>

        <ItemSwiperContent>
          <h1>Characters</h1>
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
              {eventsCharacterList.length ? (
                <>
                  {eventsCharacterList?.map((event) => {
                    return (
                      <SwiperSlide key={1 + event.id}>
                        <a href={`/character/${event.id}`}>
                          <img src={`${event.thumbnail.path}/portrait_uncanny.${event.thumbnail.extension}`} alt={event.name} />
                          <p id="TitleEvent">{event.name}</p>
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
          <h1>Creator</h1>
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
              {eventsCreatorList.length ? (
                <>
                  {eventsCreatorList?.map((event) => {
                    return (
                      <SwiperSlide key={event.id + 2}>
                        <a>
                          <img src={`${event.thumbnail.path}/portrait_uncanny.${event.thumbnail.extension}`} alt={event.fullName} />
                          <p id="TitleEvent">{event.fullName}</p>
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
              {eventsSeriesList.length ? (
                <>
                  {eventsSeriesList?.map((event) => {
                    return (
                      <SwiperSlide key={event.id + 2}>
                        <a href={`/Series/${event.id}`}>
                          <img src={`${event.thumbnail.path}/portrait_uncanny.${event.thumbnail.extension}`} alt={event.title} />
                          <p id="TitleEvent">{event.title}</p>
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
export default PageEventsContainer
