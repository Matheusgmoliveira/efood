import { Card, Descricao, Botao, Titulo } from './styles'

type Props = {
  title: string
  image: string
  description: string
  button: string
  onClick?: () => void
}
const getDescricao = (descricao: string) => {
  if (descricao.length > 90) {
    return descricao.slice(0, 91) + '...'
  }
  return descricao
}

const Product = ({ button, description, image, title, onClick }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{getDescricao(description)}</Descricao>
    <Botao onClick={onClick}>{button}</Botao>
  </Card>
)

export default Product
