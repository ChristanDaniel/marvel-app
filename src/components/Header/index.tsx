import { HeaderContainer } from './styles'

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderContainer>
        <img src="/marvelLogo.png" alt="logo" />

        <input placeholder="Search Heros" />
      </HeaderContainer>
    </>
  )
}

export default Header
