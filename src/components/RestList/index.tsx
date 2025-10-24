import Restaurante from '../Restaurante'
import { Container, List } from './styles'
import type { RestauranteParaLista } from '../../pages/Home'
export type Props = {
  restaurantes: RestauranteParaLista[]
}
const RestList = ({ restaurantes }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurantes.map((restaurante) => (
          <Restaurante
            key={restaurante.id}
            id={restaurante.id}
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
