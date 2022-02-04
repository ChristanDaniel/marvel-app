import { api } from '../../api'
import auth from '../../auth'
import { getApiResponseProps } from './ComicModel'
import { BASE_URL_CHARACTERS, BASE_URL_COMIC, BASE_URL_CREATORS } from '../../apiConstants'

export const getComicItem = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_COMIC}/${query}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest getComicItem')
  }
}

export const getComicItemCharacter = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_COMIC}/${query}/${BASE_URL_CHARACTERS}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest getComicItemCharacter')
  }
}

export const getComicItemCreators = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_COMIC}/${query}/${BASE_URL_CREATORS}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest getComicItemCreators')
  }
}
