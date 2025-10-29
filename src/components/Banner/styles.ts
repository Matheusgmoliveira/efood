import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 286px;
`

export const Imagem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
  border-radius: 4px;
`

export const Titulo = styled.h1`
  position: absolute;
  bottom: 20px;
  left: 170px;
  font-weight: 900;
  font-size: 32px;
  color: ${cores.branco};
`
export const Tipo = styled.p`
  position: absolute;
  bottom: 187px;
  left: 170px;
  font-weight: 100;
  font-style: Thin;
  font-size: 32px;
  line-height: 100%;
  color: ${cores.branco};
`
