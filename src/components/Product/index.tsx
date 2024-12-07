import { Card, Descricao, Botao, Titulo } from './styles'

type Props = {
  title: string
  image: string
  description: string
  button: string
}
const Product = ({ button, description, image, title }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Botao>{button}</Botao>
  </Card>
)

export default Product
