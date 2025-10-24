import styled from 'styled-components'
import { cores } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
`

export const Container = styled.section`
  display: flex;
  align-items: center;
`
export const Modal = styled.div`
  display: none;
  position: fixed;
  inset: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.73);
    z-index: 1;
  }
`

export const Banner = styled.div`
  display: flex;
  gap: 32px;
  width: 1024px;
  height: 344px;
  background-color: ${cores.salmao};
  padding: 32px;

  position: relative;
  z-index: 2;
`

export const ImagemProduto = styled.img`
  width: 280px;
  height: auto;
`

export const Nome = styled.p`
  font-weight: 900;
  font-size: 18px;
  color: ${cores.branco};
  margin-bottom: 16px;
`
export const Detalhes = styled.p`
  max-width: 600px;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.branco};
  margin-bottom: 16px;
`

export const Informacao = styled(Detalhes)`
  margin-bottom: 24px;
`

export const BotaoCarrinho = styled.button`
  height: 24px;
  background-color: ${cores.rosaClaro};
  color: ${cores.salmao};
  font-weight: 700;
  font-size: 14px;
  padding: 4px 16px;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`

export const Close = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`
