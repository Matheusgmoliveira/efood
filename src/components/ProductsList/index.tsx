import Product from '../Product'
import Produtos from '../../models/Products'
import { Container, List } from './styles'
export type Props = {
  products: Produtos[]
}
const ProductsList = ({ products }: Props) => (
  <Container>
    <div className="container">
      <List>
        {products.map((produtos) => (
          <Product
            key={produtos.id}
            title={produtos.title}
            description={produtos.description}
            image={produtos.image}
            button={produtos.button}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
