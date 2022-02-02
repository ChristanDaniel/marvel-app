import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;

  border-bottom: 1px solid #ffff;

  img {
    margin-left: 70px;
  }

  input {
    height: 35px;
    width: 280px;
    padding-left: 20px;
    border-radius: 15px;
    border: none;
    margin-right: 90px;
  }
`

export { HeaderContainer }
