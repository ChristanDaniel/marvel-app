import styled from 'styled-components'

const Footer = styled.footer`
  width: 100%;
  height: 140px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    color: #616480;
    margin-bottom: 12px;
    font-size: smaller;
  }

  a {
    display: flex;
    align-items: center;
    color: #ffff;
    margin-bottom: 4px;
  }

  span {
    font-size: 15px;
    margin: 2px;
  }

  #teste {
    display: flex;
    justify-content: center;

    svg {
      margin-right: 5px;
    }
  }
`

export { Footer }
