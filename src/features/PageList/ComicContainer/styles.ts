import styled from 'styled-components'

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const CharacterContent = styled.div`
  ul {
    width: auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 45px;
    gap: 30px;
  }
`

const CircularContent = styled.div`
  min-width: 100%;
  min-height: 290px;

  display: flex;
  align-items: center;
  justify-content: center;
`

const CharacterList = styled.li`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 20px;
  border-radius: 10px;
  background: #00000090;
  opacity: 0.8;
  animation: move 800ms;
  transition: all linear 0.2s;

  div {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  img {
    border-radius: 2px;
    height: 130px;
    width: 130px;
    filter: grayscale(100%);
    /* opacity: 0.8; */
  }

  h3 {
    color: #fff;
    margin-bottom: 12px;
  }

  p {
    color: #fff;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  &:hover {
    box-shadow: 1px 3px 12px 0 rgba(178, 34, 34);
    opacity: 1;
    cursor: pointer;
    > img {
      top: -15px;
      filter: grayscale(0);
    }
  }

  @keyframes move {
    from {
      opacity: 0;
      transform: translateY(-35%);
    }

    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }
`

export { MainContainer, CharacterContent, CircularContent, CharacterList }
