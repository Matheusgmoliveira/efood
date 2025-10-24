import ProductsList from '../../components/ProductsList'

import Banner from '../../components/Banner'
import Header from '../../components/Header'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Produto = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}
type Restaurante = {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Produto[]
}

const Product = () => {
  const [restauranteApi, setRestaurantesApi] = useState<Restaurante[]>([])
  const { id } = useParams<{ id: string }>()
  const restauranteId = id ? parseInt(id) : null
  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((data) => setRestaurantesApi(data))
  }, [])

  const restauranteSelecionado = restauranteApi.find(
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
                title: item.nome,
                description: item.descricao,
                image: item.foto,
                preco: item.preco,
                porcao: item.porcao,
                button: `Mais Detalhes`
              }
            })}
          />
        </>
      )}
    </>
  )
}
export default Product
