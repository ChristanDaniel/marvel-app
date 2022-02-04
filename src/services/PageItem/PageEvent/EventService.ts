import { api } from '../../api'
import auth from '../../auth'
import { getApiResponseProps } from './EventModel'
import { BASE_URL_CHARACTERS, BASE_URL_SERIES, BASE_URL_CREATORS, BASE_URL_EVENTS } from '../../apiConstants'

export const getEventItem = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_EVENTS}/${query}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail getEventItem')
  }
}

export const getEventItemCharacter = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_EVENTS}/${query}/${BASE_URL_CHARACTERS}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail getEventItemCharacter')
  }
}

export const getEventItemCreators = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_EVENTS}/${query}/${BASE_URL_CREATORS}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail getEventItemCreators')
  }
}

export const getEventsItemSeries = async (query: string | string[] | undefined): Promise<getApiResponseProps> => {
  try {
    const { data } = await api.get<getApiResponseProps>(`${BASE_URL_EVENTS}/${query}/${BASE_URL_SERIES}`, {
      params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash }
    })

    return data
  } catch (error) {
    throw new Error('Fail getEventsItemSeries')
  }
}
