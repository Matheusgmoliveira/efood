import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${cores.rosaClaro};
  padding: 40px;
`

export const Descricao = styled.p`
  width: 480px;
  height: 24px;
  margin-top: 80px;
  font-weigth: 400;
  font-size: 10px;
  text-align: center;
  color: ${cores.salmao};
`
