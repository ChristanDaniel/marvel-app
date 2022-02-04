type SeriesListProps = {
  id: number
  title?: string
  name?: string
  fullName?: string
  description?: string
  thumbnail: {
    extension: string
    path: string
  }
}

interface IDate {
  count: number
  limit: number
  offset: number
  results: SeriesListProps[]
}

interface getApiResponseProps {
  data: IDate
}

export type { getApiResponseProps }
