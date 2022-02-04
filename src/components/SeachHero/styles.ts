import styled from 'styled-components'
import TextField from '@mui/material/TextField'

const CssTextInput = styled(TextField)({
  '& label': {
    color: '#f5f5f5'
  },
  '& label.Mui-focused': {
    color: '#fff'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#fff'
    },
    '&:hover fieldset': {
      borderColor: '#fff'
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff'
    }
  }
})

const NavSection = styled.nav`
  margin-right: 70px;

  input {
    width: 290px;
    color: #fff;
    background: #232323;
    border-radius: 6px;
  }
`

export { NavSection, CssTextInput }
