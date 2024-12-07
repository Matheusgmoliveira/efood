import ProductsList from '../../components/ProductsList'
import Pizza from '../../assets/images/Pizza.png'
import Produtos from '../../models/Products'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
const produtos: Produtos[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    image: Pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    image: Pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    image: Pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    image: Pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    image: Pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    image: Pizza,
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    button: 'Adicionar ao carrinho'
  }
]

const Product = () => (
  <>
    <Header />
    <Banner />
    <ProductsList products={produtos} />
  </>
)

export default Product
