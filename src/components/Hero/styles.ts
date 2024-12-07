import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'
export const HeaderBar = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: center;
  background-color: ${cores.rosaClaro};
  background-image: url(${fundo});
  background-size: cover;
  padding: 24px;
  height: 384px;

  width: 100%;

  h1 {
    width: 539px;
    height: 84px;
    margin-top: 180px;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
  }
`
