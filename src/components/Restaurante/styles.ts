import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
export const Card = styled.div`
  width: 472px;
  background-color: ${cores.branco};
  border: 1px solid ${cores.salmao};
  padding-bottom: 8px;
  margin-bottom: 48px;
  margin-top: 80px;
  position: relative;

  ${TagContainer} {
    margin: 8px;
  }
  img {
    width: 100%;
    height: auto;
  }
  div {
    display: flex;
    justify-content: space-between;

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 8px;
      li {
        margin-right: 8px;
        font-weight: 700;
        font-size: 18px;
        list-style-type: none;
      }
    }
  }
`
export const Titulo = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 16px;
  margin-left: 8px;
`
export const Descricao = styled.p`
  margin: 8px;
  width: 456px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin-bottom: 16px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Botao = styled.button`
  width: 82px;
  height: 24px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  background-color: ${cores.salmao};
  color: ${cores.branco};
  margin-left: 8px;
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`
