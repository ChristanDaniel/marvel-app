import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { CircularProgress } from '@mui/material'
import { FooterContainer } from '../../../components/FooterContainer'

import { MainContainer, ItemContent, ItemList, CircularContent } from './styles'

import Header from '../../../components/Header'
import Slider from '../../../components/Slider/SliderBanner'
import Button from '../../../components/Button'
import { getEventsList } from '../../../services/PageList/PageListService'

interface ChracterEventsProps {
  id: number
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

const EventsContainer = (): JSX.Element => {
  const router = useRouter()
  const [characterEvents, setCharacterEvents] = useState<ChracterEventsProps[]>([])
  const [getLimit, setGetLimit] = useState<number>(18)

  const getCharacterEventsList = async () => {
    const response = await getEventsList(getLimit)
    setCharacterEvents(response.data.results)
  }

  const getCharacterListEventsLimited = async () => {
    setGetLimit((prevState) => prevState + 18)
  }

  useEffect(() => {
    getCharacterEventsList()
  }, [getLimit])

  return (
    <MainContainer>
      <Header apiGetString={'events?nameStartsWith'} setStateModificationList={setCharacterEvents} />
      <div>
        <Slider />
      </div>
      <ItemContent>
        {characterEvents.length ? (
          <ul>
            {characterEvents.map((char) => {
              return (
                <div key={char.id + 5}>
                  <a onClick={() => router.push(`/Event/${char.id}`)}>
                    <ItemList>
                      <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="teste" />
                      <div>
                        <h3>{char.title}</h3>
                        {char.description === '' ? <p>Events doesn’t have a description yet</p> : <p>{char.description}</p>}
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
      <Button onClick={() => getCharacterListEventsLimited()}>More</Button>
      <FooterContainer />
    </MainContainer>
  )
}

export default EventsContainer
