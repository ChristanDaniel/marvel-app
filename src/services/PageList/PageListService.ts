import { api } from '../api'
import auth from '../auth'
import { BASE_URL_CHARACTERS, BASE_URL_COMIC_YEAR, BASE_URL_EVENTS, BASE_URL_SERIES } from '../apiConstants'
import { getApiResponseProps } from './PageListModel'

export const getCharactersList = async (limit: number): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(BASE_URL_CHARACTERS, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash, limit }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest getCharactersList')
  }
}

export const getComicList = async (limit: number): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(BASE_URL_COMIC_YEAR, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash, limit }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest getComicList')
  }
}

export const getEventsList = async (limit: number): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(BASE_URL_EVENTS, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash, limit }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest getEventsList')
  }
}

export const getSeriesList = async (limit: number): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(BASE_URL_SERIES, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash, limit }
    })

    return data
  } catch (error) {
    throw new Error('Fail handleRequest, getSeriesList')
  }
}
