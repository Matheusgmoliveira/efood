import ComidaJaponesa from '../../assets/images/Comida Japonesa.png'
import ComidaItaliana from '../../assets/images/Comida Italiana.png'
import Restaurante from '../../models/Restaurantes'
import RestList from '../../components/RestList'
import Hero from '../../components/Hero'
const restaurantes: Restaurante[] = [
  {
    id: 1,
    title: 'Hioki sushi',
    nota: '4.9',
    image: ComidaJaponesa,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    botao: 'Saiba mais'
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    nota: '4.9',
    image: ComidaItaliana,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    botao: 'Saiba mais'
  },
  {
    id: 3,
    title: 'La Dolce Vita Trattoria',
    nota: '4.9',
    image: ComidaItaliana,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    botao: 'Saiba mais'
  },
  {
    id: 4,
    title: 'La Dolce Vita Trattoria',
    nota: '4.9',
    image: ComidaItaliana,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    botao: 'Saiba mais'
  },
  {
    id: 5,
    title: 'La Dolce Vita Trattoria',
    nota: '4.9',
    image: ComidaItaliana,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    botao: 'Saiba mais'
  },
  {
    id: 6,
    title: 'La Dolce Vita Trattoria',
    nota: '4.9',
    image: ComidaItaliana,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    botao: 'Saiba mais'
  }
]
const Home = () => (
  <>
    <Hero />
    <RestList restaurantes={restaurantes} />
  </>
)

export default Home
