import { useEffect, useState } from 'react'
import { Imagem } from './styles'
import { RestauranteApi } from '../../pages/Home'

type BannerProps = {
  restauranteId: number | null
}
const Banner = ({ restauranteId }: BannerProps) => {
  const [restaurantes, setRestaurantes] = useState<RestauranteApi[]>([])

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  if (restaurantes.length === 0) return null

  // Pega o primeiro restaurante que esteja destacado
  const restauranteDestacado = restaurantes.find((r) => r.id === restauranteId)

  if (!restauranteDestacado) return null

  return <Imagem src={restauranteDestacado.capa} />
}

export default Banner
