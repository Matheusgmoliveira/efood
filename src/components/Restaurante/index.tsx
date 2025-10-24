import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos, Botao } from './styles'
import { Link } from 'react-router-dom'
import estrela from '../../assets/images/estrela.png'
type Props = {
  id: number
  title: string
  image: string
  description: string
  nota: string
  infos: string[]
  botao: string
}
const getDescricao = (descricao: string) => {
  if (descricao.length > 184) {
    return descricao.slice(0, 181) + '...'
  }
  return descricao
}

export const Restaurante = ({
  id,
  title,
  image,
  description,
  nota,
  infos,
  botao
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <div>
      <Titulo>{title}</Titulo>
      <ul>
        <li>{nota}</li>
        <img src={estrela} />
      </ul>
    </div>

    <Descricao>{getDescricao(description)}</Descricao>

    <Link to={`/Products/${id}`}>
      <Botao>{botao}</Botao>
    </Link>
  </Card>
)

export default Restaurante
