import { Container, Imagem, Tipo, Titulo } from './styles'
import { useGetRestaurantesQuery } from '../../services/api'

type Restaurante = {
  id: number
  titulo: string
  tipo: string
  capa: string
}

type BannerProps = {
  restauranteId: number | null
}

const Banner = ({ restauranteId }: BannerProps) => {
  const { data: restaurantes = [], isLoading } = useGetRestaurantesQuery()

  if (isLoading || restaurantes.length === 0) return null

  const restauranteDestacado = restaurantes.find(
    (r: Restaurante) => r.id === restauranteId
  )

  if (!restauranteDestacado) return null

  return (
    <Container>
      <Imagem src={restauranteDestacado.capa} />
      <Tipo>{restauranteDestacado.tipo}</Tipo>
      <Titulo>{restauranteDestacado.titulo}</Titulo>
    </Container>
  )
}

export default Banner
