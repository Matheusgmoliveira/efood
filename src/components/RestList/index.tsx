import Restaurante from '../Restaurante'
import { Container, List } from './styles'
import Restaurantes from '../../models/Restaurantes'
export type Props = {
  restaurantes: Restaurantes[]
}
const RestList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            title={restaurante.title}
            description={restaurante.description}
            image={restaurante.image}
            nota={restaurante.nota}
            infos={restaurante.infos}
            botao={restaurante.botao}
          />
        ))}
      </List>
    </div>
  </Container>
)
export default RestList
