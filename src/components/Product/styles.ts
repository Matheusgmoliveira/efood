import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 320px;
  height: 338px; /* altura fixa */
  background-color: ${cores.salmao};
  color: ${cores.rosaClaro};
  padding-bottom: 8px;
  margin: 80px 0 32px 0;

  img {
    width: 304px;
    height: 167px; /* corrigido */
    margin: 8px;
    object-fit: cover; /* mantém proporção sem distorcer */
  }
`

export const Titulo = styled.h3`
  font-weight: 900;
  font-size: 16px;
  margin: 8px;
  color: ${cores.rosaClaro};
`

export const Descricao = styled.p`
  width: 304px;
  height: 88px; /* corrigido */
  margin: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.rosaClaro};
  overflow: hidden; /* corta texto que ultrapassar */
`

export const Botao = styled.button`
  width: 304px;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background-color: ${cores.rosaClaro};
  color: ${cores.salmao};
  margin: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`
