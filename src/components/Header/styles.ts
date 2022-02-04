import styled from 'styled-components'

const HeaderLiContent = styled.div`
  div {
    display: flex;
    gap: 24px;
  }

  a {
    position: relative;
    color: #fff;
    font-size: 18px;
    cursor: pointer;

    &.active {
      color: red;
    }

    &.active::after {
      content: '';
      position: absolute;
      top: 100%;
      right: 0;
      left: -1px;
      height: 0;
      width: 100%;
      border-radius: 4px 4px 0 0;
      border: solid 2px red;
    }
  }
`

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ffff;

  img {
    margin-left: 90px;
  }

  @media screen and (max-width: 800px) {
    ${HeaderLiContent} {
      display: none;
    }
  }
`

export { HeaderContainer, HeaderLiContent }
