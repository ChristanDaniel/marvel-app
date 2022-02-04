import { useState } from 'react'

import auth from '../../services/auth'
import { api } from '../../services/api'
import { NavSection, CssTextInput } from './styles'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface ChracterProps {
  id: number
  name?: string
  title: string
  description: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface SeachProps {
  setStateModificationList: React.Dispatch<React.SetStateAction<ChracterProps[]>>
  apiGetString: string
}

const SearchComponent = ({ apiGetString, setStateModificationList }: SeachProps): JSX.Element => {
  const [inputSearch, setInputSearch] = useState('')

  const handleGetCharacterSearch = async () => {
    if (inputSearch.length == 0) {
      return
    } else {
      const response = await api.get(`/${apiGetString}=${inputSearch}`, { params: { ts: auth.ts, apikey: auth.apikey, hash: auth.hash } })

      if (response.data.data.count === 0) {
        toast.error('search not found. 🙁', {
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined
        })
      } else {
        setStateModificationList(response.data.data.results)
      }
    }
  }

  const handleSearchClickEnter = async (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key == 'Enter') {
      handleGetCharacterSearch()
    } else {
      return
    }
  }

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavSection>
        <CssTextInput
          id="custom-css-outlined-input"
          label="Search"
          variant="outlined"
          onChange={(event) => setInputSearch(event.target.value)}
          value={inputSearch}
          onKeyPress={(event) => handleSearchClickEnter(event)}
        />
      </NavSection>
    </>
  )
}
export default SearchComponent
