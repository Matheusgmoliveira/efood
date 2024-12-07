import styled from 'styled-components'
import { cores } from '../../styles'
import fundo from '../../assets/images/fundo.png'
export const HeaderBar = styled.header`
  display: flex;

  justify-content: space-between;
  align-items: center;
  background-color: ${cores.rosaClaro};
  background-image: url(${fundo});
  background-size: cover;
  padding: 24px;
  height: 186px;

  width: 2031px;
`

export const LinkRestaurante = styled.a`
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  margin-left: 170px;
  color: ${cores.salmao};
  cursor: pointer;
`

export const LinkCarrinho = styled.a`
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  margin-right: 170px;
  color: ${cores.salmao};
  cursor: pointer;
`
