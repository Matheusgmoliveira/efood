import { useEffect, useState } from 'react'
import { Container, Imagem, Tipo, Titulo } from './styles'
import { RestauranteApi } from '../../pages/Home'

type BannerProps = {
  restauranteId: number | null
}
const Banner = ({ restauranteId }: BannerProps) => {
  const [restaurantes, setRestaurantes] = useState<RestauranteApi[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  if (restaurantes.length === 0) return null

  const restauranteDestacado = restaurantes.find((r) => r.id === restauranteId)

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
