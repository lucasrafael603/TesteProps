import styled, {css} from 'styled-components'



export const Form = styled.form`



input {



${(props) => props.Iserror && css`
  color: red;
  background-color: red;

`}
}


`