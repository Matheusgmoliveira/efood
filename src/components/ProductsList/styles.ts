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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.visivel {
    display: flex;
  }
  .container {
    max-width: 1024px;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1024px;
  height: 344px;
  position: relative;
  margin: 490px 171px 790px 171px;
  background-color: ${cores.salmao};
  z-index: 1;
`

export const ImagemProduto = styled.img`
  margin: 32px;
`

export const Nome = styled.p`
  margin-top: 32px;
  font-weight: 900;
  font-size: 18px;
  line-height: 100%;
  color: ${cores.branco};
`
export const Detalhes = styled.p`
  width: 656px;
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${cores.branco};
`
export const Informacao = styled(Detalhes)``

export const BotaoCarrinho = styled.button`
  width: 218px;
  height: 24px;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  background-color: ${cores.rosaClaro};
  color: ${cores.salmao};
  margin-top: 16px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`
export const Close = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`
