import Hero from '../../components/Hero'
import RestList from '../../components/RestList'
import { useGetRestaurantesQuery } from '../../services/api'

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
  const {
    data: restaurantesApi = [],
    isLoading,
    error
  } = useGetRestaurantesQuery()

  if (isLoading) {
    return <p>Carregando...</p>
  }

  if (error) {
    return <p>Ocorreu um erro ao carregar os restaurantes.</p>
  }

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
