import { useEffect, useState } from 'react'
import RestList from '../../components/RestList'
import Hero from '../../components/Hero'

// Tipo dos dados que vêm da API
export type RestauranteApi = {
  id: number
  titulo: string
  tipo: string
  destacado: boolean
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
  }[]
}

// Tipo que será usado para a lista de restaurantes
export type RestauranteParaLista = {
  id: number
  title: string
  description: string
  image: string
  nota: string
  infos: string[]
  botao: string
}

const Home = () => {
  const [restaurantesApi, setRestaurantesApi] = useState<RestauranteApi[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantesApi(data))
  }, [])

  // Converter dados da API para o formato que o RestList espera
  const restaurantesConvertidos: RestauranteParaLista[] = restaurantesApi.map(
    (item) => ({
      id: item.id,
      title: item.titulo,
      description: item.descricao,
      image: item.capa,
      nota: item.avaliacao.toString(),
      infos: item.destacado ? ['Destaque da semana'] : [],
      botao: 'Saiba mais'
    })
  )

  return (
    <>
      <Hero />
      <RestList restaurantes={restaurantesConvertidos} />
    </>
  )
}

export default Home
