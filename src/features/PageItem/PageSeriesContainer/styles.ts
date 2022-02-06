import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;

  header {
    display: flex;
    justify-content: center;
  }

  a {
    cursor: pointer;
  }
`

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #232323;
  margin-top: 100px;
  position: relative;
`

const ItemDescriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    color: #fff;
  }

  img {
    border-radius: 3px;
    margin-top: -100px;
    height: 230px;
    width: 230px;
  }

  p {
    color: #fff;
    max-width: 600px;
  }

  span {
    margin-top: 20px;
  }
`

const ItemSwiperContent = styled.div`
  min-width: 100%;
  min-height: 400px;
  background: #232323;

  div {
    /* flex-direction: column; */
  }

  h1 {
    color: #ffff;
    margin-left: 50px;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  p {
    color: #ffff;
    max-width: 175px;
  }

  img {
    height: 230px;
    width: 180px;
    transition: 0.4s;

    &:hover {
      transform: scale(1.04);
      border-radius: 16px;
    }
  }

  #swiperContainer {
    padding-left: 60px;
    padding-right: 20px;
  }

  #TitleEvent {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    margin-bottom: 24px;
  }
`

const CircularContent = styled.div`
  min-width: 100%;
  min-height: 290px;

  display: flex;
  align-items: center;
  justify-content: center;
`

export { MainContainer, ItemContainer, ItemDescriptionContent, ItemSwiperContent, CircularContent }
