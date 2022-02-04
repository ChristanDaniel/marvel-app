import { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'

import { MainContainer, CharacterContent, CharacterList, CircularContent } from './styles'

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
      <CharacterContent>
        {character.length ? (
          <ul>
            {character.map((char) => {
              return (
                <a onClick={() => router.push(`/character/${char.id}`)} key={char.id}>
                  <CharacterList>
                    <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="teste" />
                    <div>
                      <h3>
                        {char.name} {char.title}
                      </h3>
                      {char.description === '' ? <p>does not have a description yet</p> : <p>{char.description}</p>}
                    </div>
                  </CharacterList>
                </a>
              )
            })}
          </ul>
        ) : (
          <CircularContent>
            <CircularProgress />
          </CircularContent>
        )}
      </CharacterContent>
      <Button onClick={() => getCharacterListLimited()}>More</Button>
      <FooterContainer />
    </MainContainer>
  )
}

export default HomeContainer
