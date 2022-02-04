import styled from 'styled-components'

const Buttons = styled.button`
  width: 340px;
  margin: auto;
  margin-bottom: 40px;
  padding: 15px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  background: rgba(178, 34, 34);
  color: #fff;

  cursor: pointer;
  border: 0;

  transition: 0.3s;

  :hover {
    filter: brightness(0.7);
  }
`

export { Buttons }
