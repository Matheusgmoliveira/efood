import ProductsList from '../../components/ProductsList'
import { useGetRestaurantesQuery } from '../../services/api'
import Banner from '../../components/Banner'
import Header from '../../components/Header'

import { useParams } from 'react-router-dom'
import Cart from '../../components/Cart'

export type Produto = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao?: string
}
export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  destacado: boolean
  cardapio: Produto[]
}

const Product = () => {
  const { id } = useParams<{ id: string }>()
  const restauranteId = id ? parseInt(id) : null
  const { data: restaurantes = [], isLoading } = useGetRestaurantesQuery()

  if (isLoading) {
    return <p>Carregando</p>
  }

  const restauranteSelecionado = restaurantes.find(
    (r) => r.id === restauranteId
  )
  return (
    <>
      <Header />
      {restauranteSelecionado && (
        <>
          <Banner restauranteId={restauranteSelecionado.id} />
          <ProductsList
            products={restauranteSelecionado.cardapio.map((item) => {
              return {
                id: item.id,
                nome: item.nome,
                descricao: item.descricao,
                foto: item.foto,
                preco: item.preco,
                porcao: item.porcao,
                button: `Mais Detalhes`
              }
            })}
          />
          <Cart />
        </>
      )}
    </>
  )
}
export default Product
