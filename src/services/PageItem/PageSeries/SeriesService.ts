import { api } from '../../api'
import auth from '../../auth'
import { getApiResponseProps } from './SeriesModel'
import { BASE_URL_CHARACTERS, BASE_URL_SERIES, BASE_URL_CREATORS, BASE_URL_COMIC } from '../../apiConstants'

export const getSerieItem = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_SERIES}/${query}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail getSerieItem')
  }
}

export const getSerieItemCharacter = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_SERIES}/${query}/${BASE_URL_CHARACTERS}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail getSerieItemCharacter')
  }
}

export const getSerieItemCreators = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_SERIES}/${query}/${BASE_URL_CREATORS}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail getSerieItemCreators')
  }
}

export const getSeriesItemComics = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_SERIES}/${query}/${BASE_URL_COMIC}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail getSeriesItemComics')
  }
}
