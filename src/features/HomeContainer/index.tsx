import { useContext } from 'react'
import { useRouter } from 'next/dist/client/router'

import { CharacterContainerContext } from '../CharacterContext'

import { MainContainer, CharacterContent, CharacterList, CircularContent } from './styles'

import Slider from '../../components/Slider/SliderBanner'
import { CircularProgress } from '@mui/material'
import { FooterContainer } from '../../components/FooterContainer'

const HomeContainer = (): JSX.Element => {
  const router = useRouter()
  const { character, getCharacterListLimited } = useContext(CharacterContainerContext)

  return (
    <MainContainer>
      <div>
        <Slider />
      </div>
      <CharacterContent>
        {character.length ? (
          <ul>
            {character.map((char) => {
              return (
                <>
                  <a onClick={() => router.push(`/character/${char.id}`)}>
                    <CharacterList>
                      <img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt="teste" />
                      <div>
                        <h3>{char.name}</h3>
                        {char.description === '' ? <p>character does not have a description yet</p> : <p>{char.description}</p>}
                      </div>
                    </CharacterList>
                  </a>
                </>
              )
            })}
          </ul>
        ) : (
          <CircularContent>
            <CircularProgress />
          </CircularContent>
        )}
      </CharacterContent>
      <button onClick={() => getCharacterListLimited()}>More</button>
      <FooterContainer />
    </MainContainer>
  )
}

export default HomeContainer
