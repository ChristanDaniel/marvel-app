// import { useEffect } from 'react'
import { MainContainer } from './styles'
import axios from 'axios'
import { useState } from 'react'

const publicKey = '55d38ed11eb30d8266c188e95347d927';
const privateKey = '83d797f0b34d132b9cfc8309213f57672ca1e609';

const time = Number(new Date())

const hash = (time + privateKey = publicKey);

const HomeContainer = (): JSX.Element => {
  const [character, setCharacter] = useState([])

  const getCharacterList = () => {
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey${publicKey}&hash=${hash}`)
  }
  // useEffect(() => {
  //  http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey${publicKey}&hash=${hash}
  // }, [])

  return (
    <MainContainer>
      <h1>Hello World</h1>
    </MainContainer>
  )
}

export default HomeContainer
