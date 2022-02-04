interface IResults {
  id: number
  name?: string
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface IDate {
  count: number
  limit: number
  offset: number
  results: IResults[]
}

interface getApiResponseProps {
  data: IDate
}

export type { getApiResponseProps }
