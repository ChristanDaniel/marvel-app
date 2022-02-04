import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'

import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation } from 'swiper'
SwiperCore.use([Pagination, Navigation])

import { CircularProgress } from '@mui/material'

import { MainContainer, CharacterContainer, CharacterDescriptionContent, CharacterComicsContent, CircularContent } from './styles'
import { FooterContainer } from '../../../components/FooterContainer'
import { getComicItem, getComicItemCharacter, getComicItemCreators } from '../../../services/PageItem/PageComic/ComicServices'

type ComicsListProps = {
  id: number
  title?: string
  name?: string
  fullName?: string
  description?: string
  thumbnail: {
    extension?: string
    path?: string
  }
}
type ComicCreatorProps = {
  id: number
  fullName?: string
  thumbnail: {
    extension?: string
    path?: string
  }
}

const PageComicContainer = (): JSX.Element => {
  const router = useRouter()
  const [comicsList, setComicsList] = useState<ComicsListProps[]>([])
  const [comicsCharacter, setComicsCharacter] = useState<ComicsListProps[]>([])
  const [chractersComicCreator, setChractersComicCreator] = useState<ComicCreatorProps[]>([])

  const getCharacterList = async () => {
    const response = await getComicItem(router.query.id)
    setComicsList(response.data.results)
  }

  const getChractersCharacter = async () => {
    const responseComics = await getComicItemCharacter(router.query.id)
    setComicsCharacter(responseComics.data.results)
  }

  const getChractersComicCreator = async () => {
    const responseEvents = await getComicItemCreators(router.query.id)
    setChractersComicCreator(responseEvents.data.results)
  }

  useEffect(() => {
    getCharacterList()
    getChractersCharacter()
    getChractersComicCreator()
  }, [])

  return (
    <MainContainer>
      <header>
        <a href="/">
          <img src="/marvelLogo.png" alt="Logo" />
        </a>
      </header>
      <CharacterContainer>
        <CharacterDescriptionContent>
          {comicsList.length ? (
            <>
              {comicsList.map((comic) => {
                return (
                  <div key={comic.id + router.asPath}>
                    <img src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.title} />
                    <h1>{comic.title}</h1>
                    <span>Description </span>
                    {comic.description === '' || null ? <p>does not have a description yet</p> : <p>{comic.description}</p>}
                  </div>
                )
              })}
            </>
          ) : (
            <CircularProgress />
          )}
        </CharacterDescriptionContent>

        <CharacterComicsContent>
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
              {comicsCharacter.length ? (
                <>
                  {comicsCharacter?.map((comic) => {
                    return (
                      <SwiperSlide key={1 + comic.id}>
                        <a href={`/character/${comic.id}`}>
                          <img src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.name} />
                          <p id="TitleEvent">{comic.name}</p>
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
        </CharacterComicsContent>
        <CharacterComicsContent>
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
              {chractersComicCreator.length ? (
                <>
                  {chractersComicCreator?.map((comic) => {
                    return (
                      <SwiperSlide key={comic.id + 2}>
                        <a>
                          <img src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`} alt={comic.fullName} />
                          <p id="TitleEvent">{comic.fullName}</p>
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
        </CharacterComicsContent>
      </CharacterContainer>
      <FooterContainer />
    </MainContainer>
  )
}
export default PageComicContainer
