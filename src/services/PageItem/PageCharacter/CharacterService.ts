import { api } from '../../api'
import auth from '../../auth'
import { getApiResponseProps } from './CharacterModel'
import { BASE_URL_CHARACTERS, BASE_URL_COMIC, BASE_URL_EVENTS, BASE_URL_SERIES } from '../../apiConstants'

export const getCharactersItem = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_CHARACTERS}/${query}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest')
  }
}

export const getCharactersItemComics = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_CHARACTERS}/${query}/${BASE_URL_COMIC}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest')
  }
}

export const getCharactersItemSeries = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_CHARACTERS}/${query}/${BASE_URL_SERIES}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest')
  }
}

export const getCharactersItemEvents = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_CHARACTERS}/${query}/${BASE_URL_EVENTS}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest')
  }
}
