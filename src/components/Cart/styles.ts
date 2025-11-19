import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.div`
  background-color: ${cores.salmao};
  z-index: 1;
  max-width: 360px;
  width: 100%;
  height: 100%;
  padding: 32px 8px 0 8px;
`
export const Botao = styled.button`
  width: 344px;
  height: 24px;
  background-color: ${cores.rosaClaro};
  color: ${cores.salmao};
  border: none;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`
export const Prices = styled.div`
  display: flex;
  justify-content: space-between;

  width: 344px;
  height: 16px;
  margin-bottom: 16px;

  p {
    font-weight: 700;
    font-size: 14px;
    color: ${cores.rosaClaro};
  }
`

export const Cartitem = styled.li`
  position: relative;
  display: flex;
  width: 344px;
  height: 100px;
  background-color: ${cores.rosaClaro};
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    margin-top: 8px;
    font-weight: 900;
    font-size: 18px;
    text-align: center;
    color: ${cores.salmao};
  }

  p {
    margin-top: 16px;
    font-weight: 400;
    font-size: 14px;
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    &:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  }
`
