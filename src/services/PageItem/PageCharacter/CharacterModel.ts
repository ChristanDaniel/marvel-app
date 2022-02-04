type ChracterProps = {
  id: number
  title?: string
  name?: string
  description?: string
  thumbnail: {
    extension?: string
    path?: string
  }
}

interface IDate {
  count: number
  limit: number
  offset: number
  results: ChracterProps[]
}

interface getApiResponseProps {
  data: IDate
}

export type { getApiResponseProps }
