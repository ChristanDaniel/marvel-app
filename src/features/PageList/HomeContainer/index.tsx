import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { MainContainer, ItemContent, ItemList, CircularContent } from './styles'

import { CircularProgress } from '@mui/material'
import { FooterContainer } from '../../../components/FooterContainer'

import Header from '../../../components/Header'
import Slider from '../../../components/Slider/SliderBanner'
import Button from '../../../components/Button'

import { getCharactersList } from '../../../services/PageList/PageListService'

interface ChracterProps {
  id: number
  name?: string
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}
const HomeContainer = (): JSX.Element => {
  const router = useRouter()

  const [getLimit, setGetLimit] = useState<number>(18)
  const [character, setCharacter] = useState<ChracterProps[]>([])

  const getCharacterList = async () => {
    const response = await getCharactersList(getLimit)
    setCharacter(response.data.results)
  }

  const getCharacterListLimited = () => {
    setGetLimit((prevState) => prevState + 18)
  }

  useEffect(() => {
    getCharacterList()
  }, [getLimit])

  return (
    <MainContainer>
      <Header apiGetString={'characters?nameStartsWith'} setStateModificationList={setCharacter} />
      <div>
        <Slider />
      </div>
      <ItemContent>
        {character.length ? (
          <ul>
            {character.map((char) => {
              return (
                <a onClick={() => router.push(`/character/${char.id}`)} key={char.id}>
                  <ItemList>
                    <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="teste" />
                    <div>
                      <h3>
                        {char.name} {char.title}
                      </h3>
                      {char.description === '' ? <p>Hero doesn’t have a description yet</p> : <p>{char.description}</p>}
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
      <Button onClick={() => getCharacterListLimited()}>More</Button>
      <FooterContainer />
    </MainContainer>
  )
}

export default HomeContainer
