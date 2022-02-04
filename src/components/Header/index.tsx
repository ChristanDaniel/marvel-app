import { HeaderContainer, HeaderLiContent } from './styles'
import SeachHero from '../Search'
import { ActiveLink } from '../ActiveLink'

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

const Header = ({ setStateModificationList, apiGetString }: SeachProps): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <a href="/">
          <img src="/marvelLogo.png" alt="logo" />
        </a>

        <HeaderLiContent>
          <div>
            <ActiveLink href="/" activeClassName={'active'}>
              <a>Character</a>
            </ActiveLink>
            <ActiveLink href="/Comic" activeClassName={'active'}>
              <a>Comics</a>
            </ActiveLink>
            <ActiveLink href="/Events" activeClassName={'active'}>
              <a>Events</a>
            </ActiveLink>
            <ActiveLink href="/Series" activeClassName={'active'}>
              <a>Series</a>
            </ActiveLink>
          </div>
        </HeaderLiContent>
        <SeachHero apiGetString={apiGetString} setStateModificationList={setStateModificationList} />
      </HeaderContainer>
    </>
  )
}

export default Header
