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
import { getSerieItem, getSerieItemCharacter, getSerieItemCreators, getSeriesItemComics } from '../../../services/PageItem/PageSeries/SeriesService'

type SeriesListProps = {
  id: number
  title?: string
  name?: string
  fullName?: string
  description?: string
  thumbnail: {
    extension: string
    path: string
  }
}

const PageEventsContainer = (): JSX.Element => {
  const router = useRouter()
  const [SeriesList, setSeriesList] = useState<SeriesListProps[]>([])
  const [seriesCharacterList, setSeriesCharacterList] = useState<SeriesListProps[]>([])
  const [seriesCreatorList, setSeriesCreatorList] = useState<SeriesListProps[]>([])
  const [comicSeriesList, setSeriesComicList] = useState<SeriesListProps[]>([])

  const getSeriesList = async () => {
    const response = await getSerieItem(router.query.id)

    setSeriesList(response.data.results)
  }

  const getSeriesCharacterList = async () => {
    const responseSeries = await getSerieItemCharacter(router.query.id)
    setSeriesCharacterList(responseSeries.data.results)
  }

  const getSeriesCreatorList = async () => {
    const responseSeries = await getSerieItemCreators(router.query.id)
    setSeriesCreatorList(responseSeries.data.results)
  }

  const getSeriesComicList = async () => {
    const responseComic = await getSeriesItemComics(router.query.id)
    setSeriesComicList(responseComic.data.results)
  }

  useEffect(() => {
    getSeriesList()
    getSeriesCharacterList()
    getSeriesCreatorList()
    getSeriesComicList()
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
          {SeriesList.length ? (
            <>
              {SeriesList.map((serie) => {
                return (
                  <div key={serie.id + router.asPath}>
                    <img src={`${serie.thumbnail.path}/portrait_uncanny.${serie.thumbnail.extension}`} alt={serie.title} />
                    <h1>{serie.title}</h1>
                    <span>Description </span>
                    {serie.description === null || '' ? <p>does not have a description yet</p> : <p>{serie.description}</p>}
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
              {seriesCharacterList.length ? (
                <>
                  {seriesCharacterList?.map((serie) => {
                    return (
                      <SwiperSlide key={1 + serie.id}>
                        <a href={`/character/${serie.id}`}>
                          <img src={`${serie.thumbnail.path}/portrait_uncanny.${serie.thumbnail.extension}`} alt={serie.name} />
                          <p id="TitleEvent">{serie.name}</p>
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
              {seriesCreatorList.length ? (
                <>
                  {seriesCreatorList?.map((serie) => {
                    return (
                      <SwiperSlide key={serie.id + 2}>
                        <a>
                          <img src={`${serie.thumbnail.path}/portrait_uncanny.${serie.thumbnail.extension}`} alt={serie.fullName} />
                          <p id="TitleEvent">{serie.fullName}</p>
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
          <h1>Comic</h1>
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
              {comicSeriesList.length ? (
                <>
                  {comicSeriesList?.map((serie) => {
                    return (
                      <SwiperSlide key={serie.id + 2}>
                        <a href={`/Comic/${serie.id}`}>
                          <img src={`${serie.thumbnail.path}/portrait_uncanny.${serie.thumbnail.extension}`} alt={serie.title} />
                          <p id="TitleEvent">{serie.title}</p>
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
